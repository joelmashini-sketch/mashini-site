export function SkylineThumb({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 240"
      className={className}
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sky-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2b3442" />
          <stop offset="100%" stopColor="#171c23" />
        </linearGradient>
      </defs>
      <rect width="400" height="240" fill="url(#sky-grad)" />
      <g fill="#0f1318" opacity="0.9">
        <rect x="10" y="120" width="28" height="120" />
        <rect x="45" y="90" width="22" height="150" />
        <rect x="74" y="140" width="30" height="100" />
        <rect x="112" y="60" width="26" height="180" />
        <rect x="145" y="100" width="20" height="140" />
        <rect x="172" y="40" width="34" height="200" />
        <rect x="213" y="110" width="24" height="130" />
        <rect x="244" y="75" width="28" height="165" />
        <rect x="279" y="130" width="22" height="110" />
        <rect x="308" y="95" width="30" height="145" />
        <rect x="345" y="55" width="24" height="185" />
        <rect x="375" y="115" width="20" height="125" />
      </g>
      <g fill="#FA611B" opacity="0.55">
        <rect x="180" y="50" width="4" height="6" />
        <rect x="189" y="65" width="4" height="6" />
        <rect x="198" y="80" width="4" height="6" />
        <rect x="120" y="75" width="4" height="6" />
        <rect x="129" y="95" width="4" height="6" />
        <rect x="252" y="90" width="4" height="6" />
        <rect x="261" y="110" width="4" height="6" />
        <rect x="353" y="70" width="4" height="6" />
      </g>
    </svg>
  );
}

export function WorldDotsBackdrop({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 500"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <g fill="currentColor" opacity="0.5">
        {Array.from({ length: 26 }).map((_, row) =>
          Array.from({ length: 42 }).map((_, col) => {
            const x = col * 19 + (row % 2 === 0 ? 0 : 9);
            const y = row * 19;
            const seed = Math.sin(row * 12.9898 + col * 78.233) * 43758.5453;
            const frac = seed - Math.floor(seed);
            if (frac > 0.6) return null;
            return <circle key={`${row}-${col}`} cx={x} cy={y} r={1.4} />;
          })
        )}
      </g>
    </svg>
  );
}
