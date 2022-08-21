import React from "react";
import Svg, { G, Path, Defs } from "react-native-svg"

const BearRightHand = (props) => {
  return (
    <Svg
      width={81}
      height={75}
      viewBox="0 0 81 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G filter="url(#filter0_di_3443_7643)">
        <Path
          d="M74.995 44.509C74.992 61.438 60.312 69 44.145 69s-31.152-11.989-31.15-28.918C12.999 23.153 27.117 12 43.302 12c16.185 0 31.697 15.523 31.694 32.509z"
          fill="#FCBD42"
        />
      </G>
      <Defs></Defs>
    </Svg>
  );
};

export default BearRightHand;
