import React from 'react';
import Svg, { Circle, G, Rect, Path, Defs } from "react-native-svg"

const ScheduleFrame = (props) => {
    return (
        <Svg
            width={176}
            height={202}
            viewBox="0 0 176 202"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Circle cx={100} cy={134} r={100} fill="#FBF0DB" />
            <G filter="url(#filter0_d_44_778)">
                <G filter="url(#filter1_i_44_778)">
                    <Rect x={71} y={11} width={80} height={141} rx={5} fill="#512D6D" />
                </G>
                <G filter="url(#filter2_i_44_778)">
                    <Path
                        d="M73 20a5 5 0 015-5h12.776l2.879 1.465c.703.358 1.48.545 2.268.545h31.408c.64 0 1.273-.123 1.867-.362L133.294 15H144a5 5 0 015 5v125a5 5 0 01-5 5H78a5 5 0 01-5-5V20z"
                        fill="#FFFCF6"
                    />
                </G>
                <Rect
                    x={131}
                    y={147}
                    width={41}
                    height={3}
                    rx={1.5}
                    transform="rotate(-180 131 147)"
                    fill="#512D6D"
                />
            </G>
            <Rect
                opacity={0.45}
                width={4}
                height={64}
                rx={2}
                transform="matrix(0 -1 -1 0 144 49)"
                fill="#DADADA"
            />
            <Rect
                opacity={0.45}
                width={4}
                height={64}
                rx={2}
                transform="matrix(0 -1 -1 0 144 58)"
                fill="#DADADA"
            />
            <Rect
                opacity={0.45}
                width={4}
                height={22}
                rx={2}
                transform="matrix(0 -1 -1 0 102 67)"
                fill="#DADADA"
            />
            <Path
                d="M85.841 31.5a2.659 2.659 0 115.318 0 2.659 2.659 0 01-5.318 0z"
                fill="#EEEDE9"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M88.059 23.187a.614.614 0 01.882 0l2.105 2.177h2.976c.339 0 .613.275.613.614v2.976l2.178 2.105c.25.241.25.641 0 .882l-2.178 2.104v2.977a.613.613 0 01-.613.614h-2.977l-2.104 2.177a.614.614 0 01-.882 0l-2.105-2.178h-2.976a.613.613 0 01-.613-.613v-2.977l-2.178-2.104a.614.614 0 010-.882l2.178-2.105v-2.976c0-.339.274-.614.613-.614h2.977l2.104-2.177zm.441 4.427a3.886 3.886 0 100 7.772 3.886 3.886 0 000-7.772z"
                fill="#EEEDE9"
            />
            <G filter="url(#filter3_d_44_778)">
                <Rect x={36} y={81} width={95} height={28} rx={5} fill="#fff" />
            </G>
            <Path
                d="M69.163 94.156h1.663c-.024-1.462-1.226-2.472-3.053-2.472-1.798 0-3.116.994-3.108 2.484-.004 1.21.85 1.902 2.235 2.235l.893.224c.894.217 1.39.473 1.394 1.026-.004.6-.572 1.01-1.454 1.01-.901 0-1.55-.417-1.606-1.239h-1.678c.044 1.775 1.314 2.692 3.304 2.692 2.003 0 3.18-.957 3.185-2.46-.004-1.365-1.034-2.09-2.46-2.41l-.737-.177c-.713-.164-1.31-.429-1.297-1.017 0-.53.468-.918 1.317-.918.83 0 1.338.377 1.402 1.022zm6.182-.309h-1.157v-1.474H72.48v1.474h-.841v1.282h.841v3.205c-.008 1.205.813 1.802 2.05 1.75a3.32 3.32 0 00.926-.16l-.268-1.27c-.084.016-.264.056-.425.056-.34 0-.576-.128-.576-.6v-2.98h1.157v-1.283zm5.057 3.533c.004.826-.56 1.258-1.173 1.258-.645 0-1.062-.453-1.066-1.178v-3.613h-1.706v3.918c.004 1.438.845 2.315 2.083 2.315.925 0 1.59-.477 1.866-1.198h.064V100h1.639v-6.153h-1.707v3.533zm5.339 2.72c.993 0 1.51-.573 1.746-1.085h.072V100h1.683v-8.204h-1.703v3.085h-.052c-.228-.501-.72-1.114-1.75-1.114-1.35 0-2.492 1.05-2.492 3.165 0 2.059 1.094 3.168 2.496 3.168zm.54-1.358c-.837 0-1.293-.745-1.293-1.818 0-1.066.448-1.799 1.294-1.799.829 0 1.293.701 1.293 1.799 0 1.097-.472 1.818-1.293 1.818zm5.417 3.565c1.27 0 1.943-.649 2.292-1.642l2.39-6.81-1.806-.008-1.285 4.519h-.064l-1.274-4.519h-1.795l2.207 6.329-.1.261c-.224.576-.653.604-1.254.42l-.384 1.274c.244.104.64.176 1.073.176zm11.44-8.46h-1.158v-1.474h-1.707v1.474h-.84v1.282h.84v3.205c-.008 1.205.814 1.802 2.051 1.75.441-.016.753-.104.926-.16l-.269-1.27c-.084.016-.264.056-.424.056-.341 0-.577-.128-.577-.6v-2.98h1.158v-1.283zm1.111 6.153h1.707v-6.153h-1.707V100zm.857-6.946c.509 0 .926-.388.926-.865 0-.473-.417-.861-.926-.861-.504 0-.921.388-.921.86 0 .478.417.866.921.866zm2.216 6.946h1.707v-3.693c0-.681.432-1.134 1.001-1.134.561 0 .938.385.938.99V100h1.654v-3.757c0-.637.364-1.07.985-1.07.545 0 .954.34.954 1.026V100h1.702v-4.138c0-1.334-.793-2.095-1.939-2.095-.901 0-1.602.46-1.854 1.166h-.064c-.197-.713-.826-1.166-1.671-1.166-.829 0-1.458.44-1.714 1.166h-.072v-1.086h-1.627V100zm13.093.12c1.522 0 2.548-.74 2.788-1.883l-1.578-.104c-.173.469-.613.713-1.182.713-.853 0-1.394-.564-1.394-1.482v-.004h4.19v-.468c0-2.091-1.266-3.125-2.892-3.125-1.811 0-2.984 1.286-2.984 3.185 0 1.95 1.157 3.168 3.052 3.168zm-1.366-3.817c.036-.701.569-1.262 1.326-1.262.741 0 1.254.529 1.258 1.262h-2.584z"
                fill="#F2994A"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M50.136 90.02a7.753 7.753 0 00-6.614-.508.797.797 0 00-.522.739v7.978c0 .534.563.9 1.081.701a6.35 6.35 0 015.416.416l.81.466a.37.37 0 00.193.05.37.37 0 00.192-.05l.811-.466a6.35 6.35 0 015.416-.416c.518.199 1.081-.167 1.081-.701V90.25a.797.797 0 00-.522-.74 7.753 7.753 0 00-6.614.508l-.364.21-.364-.21zm.9 1.634a.525.525 0 00-.536-.513.525.525 0 00-.536.513v6.5c0 .284.24.514.536.514.296 0 .536-.23.536-.513v-6.5z"
                fill="#F2994A"
            />
            <Path
                d="M43.875 100.237a4.817 4.817 0 014.679 0l.776.434a2.41 2.41 0 002.34 0l.776-.434a4.817 4.817 0 014.68 0l.073.041a.501.501 0 01.192.702.55.55 0 01-.732.184l-.074-.041a3.71 3.71 0 00-3.599 0l-.776.434a3.519 3.519 0 01-3.42 0l-.776-.434a3.71 3.71 0 00-3.6 0l-.073.041a.55.55 0 01-.732-.184.501.501 0 01.192-.702l.074-.041z"
                fill="#F2994A"
            />
            <G opacity={0.3} fill="#4E2B6A">
                <Path d="M44.925 131.161h1.632v1.464h-1.632v-1.464zM48.188 131.161h.816c.24 0 .478-.012.712-.035l.14 1.458c-.28.027-.564.041-.852.041h-.816v-1.464zM51.11 130.848a7.184 7.184 0 001.312-.55l.685 1.291a8.542 8.542 0 01-1.576.66l-.42-1.401zM53.604 129.499a7.282 7.282 0 001.006-1.015l1.12.929a8.752 8.752 0 01-1.205 1.218l-.921-1.132zM55.4 127.291c.223-.42.406-.863.545-1.326l1.388.425a8.778 8.778 0 01-.654 1.592l-1.278-.691zM56.22 124.558c.024-.237.035-.476.035-.719v-.742h1.45v.742c0 .29-.014.577-.04.861l-1.444-.142zM56.255 121.613v-1.484h1.45v1.484h-1.45zM56.255 118.645v-1.484h1.45v1.484h-1.45zM56.255 115.677v-1.483h1.45v1.483h-1.45zM56.255 112.71v-1.484h1.45v1.484h-1.45zM56.255 109.742V109h1.45v.742h-1.45zM33.979 133.171a18.093 18.093 0 00-4.03 0 .571.571 0 00-.5.495 17.9 17.9 0 000 4.119c.028.254.236.466.5.496 1.328.15 2.702.15 4.03 0a.571.571 0 00.501-.496 17.9 17.9 0 000-4.119.571.571 0 00-.501-.495z" />
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M36.566 124.574a.925.925 0 00-.92-.93.925.925 0 00-.92.93v3.437a40.22 40.22 0 00-1.841-.087v-2.111a.925.925 0 00-.92-.929.925.925 0 00-.921.929v2.111c-.615.015-1.23.044-1.84.087v-3.437a.925.925 0 00-.921-.93.925.925 0 00-.92.93v3.626a3.612 3.612 0 00-2.833 2.879h-3.61a.925.925 0 00-.92.93c0 .513.412.929.92.929h3.422a38.35 38.35 0 00-.09 1.859h-2.105a.925.925 0 00-.92.929c0 .513.412.929.92.929h2.104c.015.62.045 1.24.09 1.859h-3.42a.925.925 0 00-.921.929c0 .514.412.93.92.93h3.61a3.612 3.612 0 002.833 2.879v3.626c0 .513.412.929.92.929s.92-.416.92-.929v-3.438c.612.044 1.226.073 1.84.088v2.111c0 .513.413.929.921.929s.92-.416.92-.929v-2.111c.616-.015 1.23-.044 1.841-.088v3.438c0 .513.412.929.92.929.509 0 .92-.416.92-.929v-3.626a3.613 3.613 0 002.833-2.879h3.61c.508 0 .92-.416.92-.93a.925.925 0 00-.92-.929h-3.421c.045-.619.075-1.239.09-1.859h2.104c.508 0 .92-.416.92-.929a.925.925 0 00-.92-.929h-2.104c-.015-.62-.045-1.24-.09-1.859h3.421c.508 0 .92-.416.92-.929a.925.925 0 00-.92-.93h-3.61a3.613 3.613 0 00-2.832-2.879v-3.626zm-6.82 6.75a19.956 19.956 0 014.437 0 2.42 2.42 0 012.126 2.127 19.771 19.771 0 010 4.55 2.42 2.42 0 01-2.126 2.127 19.956 19.956 0 01-4.438 0 2.42 2.42 0 01-2.125-2.127 19.771 19.771 0 010-4.55 2.42 2.42 0 012.125-2.127z"
                />
                <Path d="M42.804 162.682h.906v1.464h-.906v-1.464zM40.085 162.682h.906v1.464h-.906c-.338 0-.67-.033-.99-.097l.282-1.437c.228.046.465.07.708.07zM37.07 161.055c.264.399.605.743 1.001 1.011l-.807 1.217a5.121 5.121 0 01-1.4-1.414l1.206-.814zM36.46 159.021c0 .245.023.485.068.715l-1.422.284a5.19 5.19 0 01-.097-.999v-.824h1.45v.824zM36.46 154.902v1.648h-1.45v-1.648h1.45zM36.46 151.607v1.648h-1.45v-1.648h1.45zM36.46 148.312v1.648h-1.45v-1.648h1.45zM52.616 155.871a.7.7 0 01-.5-.851.692.692 0 01.86-.474l3.203.888a.7.7 0 01.5.851.692.692 0 01-.86.474l-3.203-.888zM49.363 155.399a.674.674 0 01-.254.937l-2.866 1.58a.72.72 0 01-.96-.266.674.674 0 01.254-.937l2.865-1.581a.718.718 0 01.961.267z" />
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M44.33 163.057c1.126-4.147 5.488-6.553 9.742-5.374 4.253 1.178 6.787 5.496 5.66 9.643-1.127 4.147-5.49 6.553-9.742 5.374-4.254-1.179-6.788-5.496-5.66-9.643zm13.494-1.437a.45.45 0 01-.121.594l-3 2.184-1.84 1.461a1.354 1.354 0 01-1.202.238c-.718-.199-1.145-.928-.955-1.627.111-.409.418-.737.824-.88l2.237-.788 3.468-1.384a.48.48 0 01.59.202z"
                />
            </G>
            <Defs></Defs>
        </Svg>
    );
};

export default ScheduleFrame;
