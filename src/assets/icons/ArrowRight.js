import React from "react";
import Svg, { Path } from "react-native-svg"

const ArrowRight = (props) => {
  return (
    <Svg
      width={8}
      height={13}
      viewBox="0 0 8 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        opacity={0.7}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.161 11.821a.512.512 0 00.778 0l4.9-4.889a.66.66 0 000-.864l-4.9-4.889a.512.512 0 00-.778 0 .66.66 0 000 .864L5.672 6.5l-4.51 4.457a.66.66 0 000 .864z"
        fill="#0A5991"
        stroke="#512D6D"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ArrowRight;
