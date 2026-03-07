'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Banner from './Banner';
import Navigation from './Navigation';

const bannerImages = {
  '/': '/banner-logo.png',
  '/projects': '/banner-projects.png',
  '/about': '/banner-about.png',
};

export default function HeaderWrapper() {
  const [bannerHidden, setBannerHidden] = useState(false);
  const pathname = usePathname();
  const bannerImage = bannerImages[pathname] || '/banner-logo.png';

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 60) {
        setBannerHidden(true);
      } else if (window.scrollY < 10) {
        setBannerHidden(false);
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className={`fixed left-0 right-0 z-[60] transition-transform duration-300 ease-out ${
        bannerHidden ? '-translate-y-[160px]' : 'translate-y-0'
      }`}>
        <Banner hidden={false} image={bannerImage} />
        <Navigation />
      </div>

      {/* Spacer */}
      <div style={{ height: bannerHidden ? '56px' : '216px' }} className="transition-[height] duration-300" />
    </>
  );
}