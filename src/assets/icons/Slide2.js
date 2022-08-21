import React from "react";
import { View } from "react-native";
import Svg, { Rect } from "react-native-svg"
const Slide2 = (props) => {
  return (
    <View>
      <Svg
        width={75}
        height={5}
        viewBox="0 0 75 5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Rect x={19} width={37} height={5} rx={2.5} fill="#FFA800" />
        <Rect width={14} height={5} rx={2.5} fill="#092E49" />
        <Rect x={61} width={14} height={5} rx={2.5} fill="#092E49" />
      </Svg>
    </View>
  );
};

export default Slide2;
