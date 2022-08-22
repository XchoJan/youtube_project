import React from 'react';
import Svg, {Path} from "react-native-svg";

const GeoFencing = (props) => {
    return (
        <Svg
            width={34}
            height={16}
            viewBox="0 0 34 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 16A8 8 0 108 0a8 8 0 000 16zm0-4a4 4 0 100-8 4 4 0 000 8zM26 16a8 8 0 100-16 8 8 0 000 16zm0-4a4 4 0 100-8 4 4 0 000 8z"
                fill="#A895B2"
            />
            <Path d="M15 7h4v3h-4V7z" fill="#A895B2" />
        </Svg>
    );
};

export default GeoFencing;
