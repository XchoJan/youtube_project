import Svg, { Path } from "react-native-svg"
import React from "react";

const Ribbon = (props) => {
  return (
    <Svg
      width={96}
      height={24}
      viewBox="0 0 96 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M0 0h96v24H0l9.653-12L0 0z" fill="#45C195" />
    </Svg>
  );
};

export default Ribbon;
