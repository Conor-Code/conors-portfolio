'use client';

export default function Banner({ hidden, image }) {
  return (
    <div
      className={`w-full bg-[#0097b2] flex items-center justify-center transition-[transform,opacity] duration-300 ease-out ${
        hidden ? '-translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
      }`}
      style={{ height: '160px' }}
    >
      <img
        src={image}
        alt="Banner"
        className="h-[120px] sm:h-[140px] object-contain py-3"
      />
    </div>
  );
}