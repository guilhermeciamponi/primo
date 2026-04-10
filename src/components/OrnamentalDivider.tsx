const OrnamentalDivider = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center justify-center gap-4 ${className}`}>
    <div className="h-px w-12 bg-gold/60" />
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-gold">
      <path d="M10 2C10 2 12 6 18 10C12 14 10 18 10 18C10 18 8 14 2 10C8 6 10 2 10 2Z" stroke="currentColor" strokeWidth="1" fill="none" />
    </svg>
    <div className="h-px w-12 bg-gold/60" />
  </div>
);

export default OrnamentalDivider;
