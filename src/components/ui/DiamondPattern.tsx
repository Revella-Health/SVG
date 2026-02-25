interface DiamondPatternProps {
  id?: string;
}

export default function DiamondPattern({ id = "diamonds" }: DiamondPatternProps) {
  return (
    <div className="absolute inset-0 opacity-[0.035]" aria-hidden="true">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id={id}
            x="0"
            y="0"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <polygon
              points="40,0 80,40 40,80 0,40"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id})`} />
      </svg>
    </div>
  );
}
