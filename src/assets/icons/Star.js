import React from "react";
import Svg, { Path } from "react-native-svg";

const Star = (props) => {
  return (
    <Svg
      width={29}
      height={28}
      viewBox="0 0 29 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M13.591.977a1 1 0 011.818 0L18.77 8.29a1 1 0 00.792.575l7.994.937a1 1 0 01.562 1.729l-5.916 5.457a1 1 0 00-.303.93l1.579 7.893a1 1 0 01-1.47 1.068l-7.018-3.94a1 1 0 00-.98 0l-7.018 3.94a1 1 0 01-1.47-1.068l1.579-7.892a1 1 0 00-.303-.931L.882 11.53a1 1 0 01.562-1.729l7.994-.937a1 1 0 00.792-.575L13.59.977z"
        fill={props.fill ? props.fill :"#F2C94C"}
      />
    </Svg>
  );
};

export default Star;
