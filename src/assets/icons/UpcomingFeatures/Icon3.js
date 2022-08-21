import React from "react";
import Svg, { Path } from "react-native-svg";

const Icon3 = (props) => {
  return (
    <Svg
      width={4}
      height={6}
      viewBox="0 0 4 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M2 4l.207-2"
        stroke="#CE66FF"
        strokeWidth={3}
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default Icon3;
