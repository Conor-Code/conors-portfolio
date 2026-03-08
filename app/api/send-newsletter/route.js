import { Resend } from 'resend';
import { getPostBySlug } from '@/lib/newsletter';
import { createClient } from '@supabase/supabase-js';

const resend = new Resend(process.env.RESEND_API_KEY);

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

function buildEmailHtml(post, postUrl) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #0a0a0b; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;">
  <div style="max-width: 520px; margin: 0 auto;">

    <!-- Header -->
    <div style="background-color: #0097b2; padding: 24px 32px; text-align: center;">
      <h1 style="margin: 0; font-size: 22px; font-weight: 700; color: white; letter-spacing: -0.5px;">
        The Daily Ship
      </h1>
    </div>

    <!-- Content -->
    <div style="background-color: #111113; padding: 36px 32px;">

      <!-- Greeting -->
      <p style="font-size: 15px; color: #f0f0f2; line-height: 1.6; margin: 0 0 20px 0;">
        Hey there,
      </p>
      <p style="font-size: 15px; color: #8a8a9a; line-height: 1.6; margin: 0 0 28px 0;">
        I just published a fresh newsletter — here's a quick look.
      </p>

      <!-- Post Card -->
      <div style="background-color: #1a1a1d; border: 1px solid #222228; border-radius: 12px; padding: 24px; margin-bottom: 28px;">
        <p style="font-size: 12px; color: #555566; margin: 0 0 8px 0; letter-spacing: 0.5px;">
          ${formatDate(post.date)}
        </p>
        <h2 style="font-size: 22px; font-weight: 700; color: #0097b2; margin: 0 0 12px 0; letter-spacing: -0.3px;">
          ${post.title}
        </h2>
        ${post.summary ? `
        <p style="font-size: 14px; color: #8a8a9a; line-height: 1.6; margin: 0;">
          ${post.summary}
        </p>
        ` : ''}
      </div>

      <!-- CTA Button -->
      <div style="text-align: center; margin-bottom: 8px;">
        <a href="${postUrl}" style="display: inline-block; background-color: #0097b2; color: white; text-decoration: none; padding: 14px 32px; border-radius: 10px; font-weight: 600; font-size: 14px;">
          Read the full post
        </a>
      </div>
    </div>

    <!-- Footer -->
    <div style="padding: 24px 32px; text-align: center;">
      <p style="font-size: 13px; color: #8a8a9a; margin: 0 0 6px 0;">
        Conor Collins
      </p>
      <a href="https://x.com/Conor_Code" style="font-size: 12px; color: #0097b2; text-decoration: none;">
        @Conor_Code on X
      </a>
      <p style="font-size: 11px; color: #555566; margin: 16px 0 0 0;">
        You're receiving this because you subscribed to the newsletter.
      </p>
    </div>

  </div>
</body>
</html>
  `;
}

export async function POST(request) {
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.NEWSLETTER_SECRET}`) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { slug } = await request.json();
  if (!slug) {
    return Response.json({ error: 'Slug is required' }, { status: 400 });
  }

  const post = getPostBySlug(slug);
  if (!post) {
    return Response.json({ error: 'Post not found' }, { status: 404 });
  }

  const { data: subscribers, error: dbError } = await supabase
    .from('newsletter_subscribers')
    .select('email');

  if (dbError) {
    return Response.json({ error: 'Failed to fetch subscribers' }, { status: 500 });
  }

  if (!subscribers || subscribers.length === 0) {
    return Response.json({ error: 'No subscribers' }, { status: 400 });
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const postUrl = `${siteUrl}/newsLetter`;

  const results = [];
  for (const sub of subscribers) {
    try {
      await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: sub.email,
        subject: `New post: ${post.title}`,
        html: buildEmailHtml(post, postUrl),
      });
      results.push({ email: sub.email, status: 'sent' });
    } catch (err) {
      results.push({ email: sub.email, status: 'failed' });
    }
  }

  return Response.json({
    sent: results.filter((r) => r.status === 'sent').length,
    failed: results.filter((r) => r.status === 'failed').length,
    results,
  });
}