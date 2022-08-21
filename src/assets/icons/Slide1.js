import React from "react";
import { View } from "react-native";
import Svg, { Rect } from "react-native-svg"


const Slide1 = (props) => {
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
        <Rect width={38} height={5} rx={2.5} fill="#FFA800" />
        <Rect x={43} width={14} height={5} rx={2.5} fill="#000" />
        <Rect x={61} width={14} height={5} rx={2.5} fill="#000" />
      </Svg>
    </View>
  );
};

export default Slide1;
