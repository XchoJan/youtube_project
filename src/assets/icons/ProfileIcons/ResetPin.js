import React from "react";
import Svg, { Path } from "react-native-svg";

const ResetPin = (props) => {
  return (
    <Svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.423 6.354a4.84 4.84 0 011.417 3.423v6.287a1 1 0 01-1 1H7.16a1 1 0 01-1-1V9.777a4.84 4.84 0 018.263-3.423zm-6.77 3.423h6.695a3.349 3.349 0 00-6.695 0zm4.002 4.05a1.008 1.008 0 00-.523-1.873 1.01 1.01 0 00-.524 1.872.572.572 0 00-.015.083l-.002.052v1.175a.54.54 0 001.08 0V13.96a.549.549 0 00-.016-.135z"
        fill="#512D6D"
      />
      <Path
        d="M19.582 4.12a11 11 0 102.08 4.173l-1.32.335a9.637 9.637 0 11-1.822-3.656l1.063-.852z"
        fill="#512D6D"
      />
      <Path d="M21.257 7.42L17.363 5.96l3.213-2.641.68 4.103z" fill="#512D6D" />
    </Svg>
  );
};

export default ResetPin;
