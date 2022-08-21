import React from "react";
import Svg, { Path } from "react-native-svg"

const Lock = (props) => {
  return (
    <Svg
      width={14}
      height={13}
      viewBox="0 0 14 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M5.4 3.59c0-.136-.152-.225-.279-.158C3.974 4.039 3.2 5.186 3.2 6.5c0 1.949 1.701 3.529 3.8 3.529 2.099 0 3.8-1.58 3.8-3.529 0-1.314-.774-2.46-1.921-3.068-.127-.067-.279.022-.279.158v.916c0 .057.029.111.076.148.565.443.924 1.105.924 1.846 0 1.333-1.164 2.414-2.6 2.414-1.436 0-2.6-1.08-2.6-2.414 0-.74.359-1.403.924-1.846a.189.189 0 00.076-.148V3.59z"
        fill="#fff"
      />
      <Path
        d="M7.6 2.786c0-.308-.269-.557-.6-.557-.331 0-.6.249-.6.557V6.5c0 .308.269.557.6.557.331 0 .6-.25.6-.557V2.786z"
        fill="#fff"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 6.5C0 2.91 3.134 0 7 0s7 2.91 7 6.5S10.866 13 7 13s-7-2.91-7-6.5zm7-5.386c-3.203 0-5.8 2.412-5.8 5.386s2.597 5.386 5.8 5.386 5.8-2.412 5.8-5.386S10.203 1.114 7 1.114z"
        fill="#fff"
      />
    </Svg>
  );
};

export default Lock;
