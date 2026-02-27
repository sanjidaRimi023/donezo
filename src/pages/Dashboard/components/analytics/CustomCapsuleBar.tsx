import React from "react";
import type { ChartData } from "../../../../types/types";


interface CustomCapsuleBarProps {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  fill?: string;
  payload?: ChartData;
}

const CustomCapsuleBar: React.FC<CustomCapsuleBarProps> = (props) => {
  const { x = 0, y = 0, width = 0, height = 0, payload, fill } = props;

  if (!payload) return null;

  const radius = width / 2;
  const isStriped = payload.clicks < 500;
  return (
    <g>
      <defs>
        <pattern
          id="stripePattern"
          patternUnits="userSpaceOnUse"
          width="8"
          height="8"
          patternTransform="rotate(45)"
        >
          <line x1="0" y1="0" x2="0" y2="8" stroke="#cbd5e1" strokeWidth="3" />
        </pattern>
      </defs>
      <path
        d={`M${x},${y + radius} 
           A${radius},${radius} 0 0 1 ${x + width},${y + radius} 
           L${x + width},${y + height - radius} 
           A${radius},${radius} 0 0 1 ${x},${y + height - radius} Z`}
        fill={isStriped ? "url(#stripePattern)" : fill}
      />
    </g>
  );
};

export default CustomCapsuleBar;
