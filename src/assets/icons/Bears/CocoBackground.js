import React from "react";
import Svg, { Circle } from "react-native-svg";

const CocoBackground = (props) => {
  return (
    <Svg
      width={197}
      height={145}
      viewBox="0 0 197 145"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={129} cy={129} r={129} fill="#FBF0DB" />
    </Svg>
  );
};

export default CocoBackground;
