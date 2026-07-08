import type { ScorePillar } from "@/lib/data";

const palette = [
  "#FA611B",
  "#F08A3C",
  "#E0A23F",
  "#C9B23B",
  "#9FB24A",
  "#6FAE7E",
  "#4F9E9E",
  "#4584A8",
  "#3F5E8C",
  "#3A4250",
];

export default function ScoreGauge({
  score,
  pillars,
}: {
  score: number;
  pillars: ScorePillar[];
}) {
  const size = 220;
  const stroke = 22;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  let offsetAccumulated = 0;

  return (
    <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start">
      <div className="relative shrink-0" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#eceef0"
            strokeWidth={stroke}
          />
          {pillars.map((p, i) => {
            const length = (p.weight / 100) * circumference;
            const dasharray = `${length} ${circumference - length}`;
            const dashoffset = -offsetAccumulated;
            offsetAccumulated += length;
            return (
              <circle
                key={p.name}
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke={palette[i % palette.length]}
                strokeWidth={stroke}
                strokeDasharray={dasharray}
                strokeDashoffset={dashoffset}
              />
            );
          })}
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-serif-display text-4xl font-semibold text-brand-ink">
            {score}
            <span className="text-lg text-brand-ink-light">/100</span>
          </span>
          <span className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-brand-ink-light">
            Score global
          </span>
        </div>
      </div>

      <ul className="grid flex-1 grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2">
        {pillars.map((p, i) => (
          <li key={p.name} className="flex items-center gap-2.5 text-sm text-brand-ink-light">
            <span
              className="h-2.5 w-2.5 shrink-0 rounded-full"
              style={{ backgroundColor: palette[i % palette.length] }}
            />
            {p.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
