import React from "react";
import Svg, { Path } from "react-native-svg";

const ReportsIcon = (props) => {
  return (
    <Svg
      width={19}
      height={24}
      viewBox="0 0 19 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.901 0C.851 0 0 .827 0 1.846v20.308C0 23.174.851 24 1.901 24h15.198c1.05 0 1.901-.826 1.901-1.846V1.846C19 .826 18.149 0 17.099 0H1.901zm1.068 5.568c0-.093.084-.168.188-.168h3.536c.104 0 .188.075.188.168v14.21H2.97V5.567zm5.074 7.95c0-.093.084-.168.188-.168h3.095c.104 0 .189.075.189.167v6.26H8.043v-6.26zm4.738 3.581c-.104 0-.189.075-.189.168v2.51h3.557v-2.51c0-.093-.085-.168-.189-.168h-3.18z"
        fill="#A896B6"
      />
    </Svg>
  );
};

export default ReportsIcon;
