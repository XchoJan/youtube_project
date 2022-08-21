import React from "react";
import Svg, { Path } from "react-native-svg";

const ProfileIcon = (props) => {
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
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zM9.002 8.411a2.997 2.997 0 115.995 0 2.997 2.997 0 01-5.995 0zm-3.197 7.594a2.998 2.998 0 012.998-2.997h.272c.148 0 .294.023.434.069l.692.226a5.794 5.794 0 003.598 0l.692-.226c.14-.046.286-.07.434-.07h.272a2.998 2.998 0 012.998 2.998v.95c0 .602-.436 1.115-1.03 1.212a32.05 32.05 0 01-10.33 0 1.229 1.229 0 01-1.03-1.212v-.95z"
        fill="#A896B6"
      />
    </Svg>
  );
};

export default ProfileIcon;
