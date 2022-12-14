import React from "react";
import Svg, { Path } from "react-native-svg";

const Television = (props) => {
  return (
    <Svg
      width={22}
      height={20}
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        opacity={0.5}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 2.222C0 .995.985 0 2.2 0h17.6c1.215 0 2.2.995 2.2 2.222v12.222a2.211 2.211 0 01-2.2 2.223h-5.5L16.06 18c.486.368.585 1.065.22 1.555-.365.491-1.054.59-1.54.223L11 16.944l-3.74 2.834a1.093 1.093 0 01-1.54-.223A1.119 1.119 0 015.94 18l1.76-1.333H2.2c-1.215 0-2.2-.995-2.2-2.223V2.222zm11.013 12.222H2.2V2.222H19.8v12.222H11.013zm1.912-6.666c.607 0 1.1.497 1.1 1.11v2.223c0 .614-.492 1.111-1.1 1.111-.607 0-1.1-.497-1.1-1.11V8.888c0-.614.493-1.111 1.1-1.111zm-2.75-2.222c0-.614-.492-1.112-1.1-1.112-.608 0-1.1.498-1.1 1.112v5.555c0 .614.492 1.111 1.1 1.111.608 0 1.1-.497 1.1-1.11V5.555zm-4.675 0c.608 0 1.1.497 1.1 1.11v4.445c0 .614-.492 1.111-1.1 1.111-.608 0-1.1-.497-1.1-1.11V6.666c0-.614.492-1.111 1.1-1.111zm12.1 1.11c0-.613-.492-1.11-1.1-1.11-.607 0-1.1.497-1.1 1.11v4.445c0 .614.492 1.111 1.1 1.111.608 0 1.1-.497 1.1-1.11V6.666z"
        fill="#512D6D"
      />
    </Svg>
  );
};

export default Television;
