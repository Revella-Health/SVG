interface FlagDiamondsProps {
  size?: number;
}

export default function FlagDiamonds({ size = 32 }: FlagDiamondsProps) {
  return (
    <svg
      viewBox="0 0 90 60"
      style={{ width: size * 1.5, height: size }}
      aria-hidden="true"
    >
      <polygon points="30,0 45,30 30,60 15,30" fill="#009739" />
      <polygon points="45,0 60,30 45,60 30,30" fill="#FCD116" />
      <polygon points="60,0 75,30 60,60 45,30" fill="#009739" />
    </svg>
  );
}
