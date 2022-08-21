import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

const FeaturesIcon = (props) => {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 24c6.627 0 12-5.372 12-12S18.627 0 12 0 0 5.372 0 12s5.373 12 12 12zm2.616-16.772l-1.291-2.466c-.532-1.016-2.118-1.016-2.65 0L9.384 7.228c-.214.41-.64.691-1.133.75l-2.973.358c-1.224.147-1.714 1.522-.819 2.296l2.175 1.882c.36.312.523.769.433 1.214l-.546 2.687c-.225 1.107 1.058 1.957 2.143 1.42L11.3 16.53a1.594 1.594 0 011.4 0l2.636 1.304c1.085.537 2.368-.313 2.143-1.42l-.546-2.687c-.09-.445.073-.902.433-1.214l2.175-1.882c.895-.774.405-2.15-.819-2.296l-2.973-.357c-.492-.06-.919-.342-1.133-.75z"
        fill="#A896B6"
      />
    </Svg>
  );
};

export default FeaturesIcon;
