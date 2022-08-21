import React from "react";
import Svg, { Path } from "react-native-svg";

const Icon1 = (props) => {
  return (
    <Svg
      width={18}
      height={28}
      viewBox="0 0 18 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M2 6.014c2.671-1.779 4.944-3.157 8.146-3.716 1.436-.25 3.413-.773 4.37.702 1.19 1.836-.831 4.595-2.117 5.779-.347.32-1.059 1.087-1.604 1.087-.203 0-.724-.194-.307-.385 2-.915 6.157.635 5.427 3.195-.832 2.92-3.934 4.23-6.77 4.033-.076-.005-1.105-.07-.455-.135 1.208-.12 2.511.307 3.561.872 1.529.821 1.914 2.222.922 3.569-1.03 1.4-.264 3.59.296 4.985"
        stroke="#DB4646"
        strokeWidth={3}
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default Icon1;
