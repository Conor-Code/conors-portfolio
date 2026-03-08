'use client';

import Image from 'next/image';

export default function Banner({ hidden, image }) {
  return (
    <div
      className={`w-full bg-[#0097b2] flex items-center justify-center transition-[transform,opacity] duration-300 ease-out ${
        hidden ? '-translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
      }`}
      style={{ height: '160px' }}
    >
      <Image
        src={image}
        alt="Banner"
        width={400}
        height={140}
        className="h-[120px] sm:h-[140px] w-auto object-contain py-3"
        priority
      />
    </div>
  );
}