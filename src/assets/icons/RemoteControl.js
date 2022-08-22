import React from 'react';
import Svg, {Path} from "react-native-svg";

const RemoteControl = (props) => {
    return (
        <Svg
            width={29}
            height={23}
            viewBox="0 0 29 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M0 19.894c0-1.063.888-1.924 1.983-1.924h25.034c1.095 0 1.983.861 1.983 1.924v1.183C29 22.139 28.112 23 27.017 23H1.983C.888 23 0 22.139 0 21.077v-1.183zM13.209 16.393v-9.15h2.582v9.15H13.21z"
                fill="#A895B2"
            />
            <Path
                d="M18.571 3.95c0 2.18-1.822 3.948-4.071 3.948-2.249 0-4.072-1.768-4.072-3.949C10.428 1.77 12.252 0 14.5 0s4.071 1.768 4.071 3.95z"
                fill="#A895B2"
            />
        </Svg>
    );
};

export default RemoteControl;
