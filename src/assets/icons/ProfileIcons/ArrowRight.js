import React from "react";
import Svg, { Path } from "react-native-svg";

const ArrowRight = (props) => {
  return (
    <Svg
      width={10}
      height={18}
      viewBox="0 0 10 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.268.293a.864.864 0 011.297 0l8.167 8c.357.39.357 1.024 0 1.414l-8.167 8a.864.864 0 01-1.297 0 1.065 1.065 0 010-1.414L7.787 9 .268 1.707a1.065 1.065 0 010-1.414z"
        fill="#512D6D"
      />
    </Svg>
  );
};

export default ArrowRight;
