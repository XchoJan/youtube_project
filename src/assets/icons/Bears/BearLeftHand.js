import React from "react";
import Svg, { G, Path, Defs } from "react-native-svg"

const BearLeftHand = (props) => {
  return (
    <Svg
      width={81}
      height={75}
      viewBox="0 0 81 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G filter="url(#filter0_di_3443_7642)">
        <Path
          d="M12.005 44.509C12.008 61.438 26.688 69 42.855 69s31.152-11.989 31.15-28.918C74.001 23.153 59.883 12 43.698 12c-16.185 0-31.697 15.523-31.694 32.509z"
          fill="#FCBD42"
        />
      </G>
      <Defs></Defs>
    </Svg>
  );
};

export default BearLeftHand;
