import React from 'react';
import Svg, { Circle, G, Rect, Path, Defs } from "react-native-svg"

const GeoFacingFrame = (props) => {
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
            <G filter="url(#filter0_d_43_846)">
                <G filter="url(#filter1_i_43_846)">
                    <Rect x={71} y={11} width={80} height={141} rx={5} fill="#512D6D" />
                </G>
                <G filter="url(#filter2_i_43_846)">
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
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M112.828 53.518h-.923v-6.5h.902v.766h.077c.164-.292.482-.828 1.362-.828 1.146 0 1.992.902 1.992 2.435 0 1.53-.834 2.447-1.983 2.447-.865 0-1.204-.527-1.371-.828h-.056v2.508zm1.22-5.78c-.806 0-1.238.656-1.238 1.644 0 .994.445 1.67 1.238 1.67.825 0 1.257-.722 1.257-1.67 0-.94-.42-1.644-1.257-1.644zM120.055 51.099c-.176.354-.617.75-1.402.75-.902 0-1.603-.51-1.603-1.44 0-1.074.921-1.307 1.819-1.412.099-.011.191-.022.276-.03.652-.072.923-.101.923-.398v-.022c0-.535-.306-.846-.902-.846-.621 0-.967.323-1.103.659l-.867-.197c.308-.862 1.099-1.207 1.958-1.207.753 0 1.84.274 1.84 1.65v3.14h-.901v-.647h-.038zm-2.1-.677c0 .455.377.69.899.69.769 0 1.217-.512 1.217-1.072v-.61c-.12.12-.715.198-1.048.24l-.095.013c-.534.071-.973.246-.973.739z"
                fill="#C7B5B9"
            />
            <Path
                d="M123.148 51.745h-.924v-4.727h.893v.75h.049c.173-.507.649-.82 1.205-.82.117 0 .299.008.392.02v.88a2.189 2.189 0 00-.482-.055c-.654 0-1.133.447-1.133 1.065v2.887zM126.486 51.745h-.924v-6.303h.924v3.576h.08l1.89-2h1.106l-1.921 2.028 2.051 2.7h-1.134l-1.612-2.137-.46.459v1.677zM85.591 75.447h-.973v-1.133h-.923v1.133H83v.738h.695v2.792c-.003.858.655 1.274 1.384 1.258.293-.003.49-.058.599-.098l-.167-.76-.023.005a1.42 1.42 0 01-.301.035c-.3 0-.569-.099-.569-.631v-2.6h.973v-.74zM89.618 78.213c.003.804-.596 1.185-1.115 1.185-.571 0-.967-.412-.967-1.055v-2.897h-.923v3.008c0 1.172.645 1.782 1.556 1.782.714 0 1.199-.376 1.418-.88h.05v.818h.907v-4.728h-.926v2.767zM91.785 80.174h.924v-4.728h-.924v4.728zM92.252 74.717c.318 0 .583-.246.583-.548 0-.301-.265-.55-.583-.55-.322 0-.584.249-.584.55 0 .302.262.548.584.548zM96.165 75.447h-.972v-1.133h-.924v1.133h-.695v.738h.695v2.792c-.003.858.655 1.274 1.384 1.258.293-.003.49-.058.599-.098l-.167-.76-.023.005c-.065.013-.17.035-.301.035-.3 0-.568-.099-.568-.631v-2.6h.972v-.74zM97.187 80.174h.924v-4.728h-.924v4.728zM97.653 74.717c.319 0 .584-.246.584-.548 0-.301-.265-.55-.584-.55-.32 0-.583.249-.583.55 0 .302.262.548.583.548z"
                fill="#C7B5B9"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M101.351 80.27c1.337 0 2.211-.976 2.211-2.438 0-1.471-.874-2.447-2.211-2.447-1.337 0-2.211.976-2.211 2.447 0 1.462.874 2.437 2.211 2.437zm.003-.773c-.874 0-1.282-.76-1.282-1.668 0-.905.408-1.675 1.282-1.675.868 0 1.276.77 1.276 1.675 0 .908-.408 1.668-1.276 1.668z"
                fill="#C7B5B9"
            />
            <Path
                d="M105.517 77.367c0-.754.463-1.185 1.105-1.185.627 0 1.007.41 1.007 1.096v2.896h.924v-3.007c0-1.17-.646-1.782-1.616-1.782-.713 0-1.179.33-1.399.831h-.058v-.77h-.887v4.728h.924v-2.807zM105.242 106.417h1.282c-.019-1.123-.946-1.899-2.354-1.899-1.387 0-2.403.764-2.397 1.908-.003.93.655 1.462 1.724 1.718l.689.172c.688.166 1.071.363 1.074.788-.003.462-.441.776-1.121.776-.695 0-1.195-.32-1.238-.951h-1.294c.034 1.363 1.013 2.068 2.548 2.068 1.544 0 2.452-.736 2.455-1.89-.003-1.049-.797-1.606-1.896-1.853l-.569-.135c-.549-.126-1.01-.329-1-.782 0-.406.361-.705 1.016-.705.639 0 1.031.29 1.081.785zM109.628 111c1.263 0 2.057-.739 2.119-1.825h-1.242c-.077.505-.41.788-.861.788-.615 0-1.013-.514-1.013-1.419 0-.893.401-1.403 1.013-1.403.481 0 .79.317.861.787h1.242c-.056-1.092-.886-1.809-2.125-1.809-1.439 0-2.329.994-2.329 2.443 0 1.438.874 2.438 2.335 2.438zM113.905 108.175c.003-.61.377-.967.914-.967.535 0 .85.342.846.924v2.776h1.316v-3.01c.003-1.108-.651-1.779-1.64-1.779-.719 0-1.201.338-1.417.895h-.056v-2.41h-1.279v6.304h1.316v-2.733z"
                fill="#C7B5B9"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M120.16 111c1.439 0 2.335-.982 2.335-2.438 0-1.465-.896-2.443-2.335-2.443s-2.335.978-2.335 2.443c0 1.456.896 2.438 2.335 2.438zm.006-1.016c-.664 0-1.004-.606-1.004-1.431 0-.825.34-1.434 1.004-1.434.652 0 .992.609.992 1.434s-.34 1.431-.992 1.431zM125.494 111c1.439 0 2.335-.982 2.335-2.438 0-1.465-.896-2.443-2.335-2.443s-2.335.978-2.335 2.443c0 1.456.896 2.438 2.335 2.438zm.006-1.016c-.664 0-1.004-.606-1.004-1.431 0-.825.34-1.434 1.004-1.434.652 0 .991.609.991 1.434s-.339 1.431-.991 1.431z"
                fill="#C7B5B9"
            />
            <Path
                d="M130 104.604h-1.316v6.304H130v-6.304zM96.67 85.368a7.549 7.549 0 01-.035-.734v-.325h-1.542v.325c0 .298.014.592.043.883l1.534-.149zM96.635 83.659v-.325h-1.542v.325h1.542zM97.52 88.161a7.414 7.414 0 01-.564-1.354l-1.476.445c.174.571.402 1.118.68 1.635l1.36-.726zM99.38 90.418c-.38-.311-.73-.659-1.041-1.038l-1.192.976c.376.456.796.875 1.254 1.25l.98-1.188zM101.962 91.796a7.45 7.45 0 01-1.358-.562l-.728 1.355a9.044 9.044 0 001.639.677l.447-1.47zM104.143 92.116c-.249 0-.495-.012-.737-.036l-.149 1.53c.291.028.587.043.886.043.224 0 .445.01.663.032l.15-1.53a8.415 8.415 0 00-.813-.039zM108.056 93.091a8.241 8.241 0 00-1.504-.62l-.447 1.47c.427.129.836.299 1.223.505l.728-1.355zM110.557 95.139a8.372 8.372 0 00-1.149-1.146l-.979 1.187c.342.28.656.593.937.934l1.191-.975zM112.085 97.984a8.168 8.168 0 00-.623-1.498l-1.359.725c.207.386.377.793.507 1.219l1.475-.446zM112.441 101.687v-.325h-1.542v.325h1.542zM112.441 100.71v-.325a8.04 8.04 0 00-.04-.81l-1.534.149c.021.217.032.438.032.661v.325h1.542zM121.308 54.05v.438h1.542v-.438h-1.542zM121.308 55.802c0 .255-.013.507-.037.754l1.535.15c.029-.298.044-.6.044-.904v-.438h-1.542v.438zM120.978 58.034c-.148.485-.343.95-.579 1.39l1.359.726a9.105 9.105 0 00.695-1.67l-1.475-.446zM119.558 60.676a7.737 7.737 0 01-1.07 1.066l.979 1.187a9.258 9.258 0 001.282-1.277l-1.191-.976zM117.232 62.58c-.441.236-.908.43-1.396.577l.448 1.47a9.23 9.23 0 001.676-.692l-.728-1.355zM114.354 63.449a7.816 7.816 0 01-.757.037h-.887v1.536h.887c.306 0 .608-.015.907-.044l-.15-1.529zM110.935 63.486h-1.776v1.536h1.776v-1.537zM107.384 63.486h-1.775v1.536h1.775v-1.537zM103.834 63.486h-.887c-.261 0-.518.012-.772.037l.149 1.53c.205-.02.412-.03.623-.03h.887v-1.537zM100.659 63.822c-.499.15-.977.349-1.428.59l.728 1.354a6.328 6.328 0 011.147-.474l-.447-1.47zM97.947 65.268c-.398.326-.764.69-1.092 1.088l1.192.976c.264-.32.558-.614.88-.877l-.98-1.187zM95.996 67.635c-.242.45-.44.926-.592 1.423l1.476.446a6.26 6.26 0 01.476-1.143l-1.36-.726zM95.104 70.569c-.025.253-.037.51-.037.769h1.542c0-.21.01-.416.03-.62l-1.535-.15zM87.417 31.726a7.47 7.47 0 01-.035-.726H85.84c0 .295.014.587.043.875l1.534-.149zM88.257 34.486a7.328 7.328 0 01-.557-1.338l-1.476.445c.172.565.398 1.107.673 1.618l1.36-.725zM90.095 36.717a7.459 7.459 0 01-1.029-1.026l-1.192.975a9 9 0 001.242 1.238l.98-1.187zM92.647 38.078a7.389 7.389 0 01-1.343-.555l-.728 1.355c.514.274 1.057.5 1.624.67l.447-1.47zM94.803 38.395c-.246 0-.49-.012-.729-.036l-.15 1.53c.29.028.583.042.879.042h.77v-1.536h-.77zM98.658 38.395h-1.542v1.536h1.542v-1.536zM101.742 38.395H100.2v1.536h1.542v-1.536zM104.826 38.395h-1.542v1.536h1.542v-1.536zM107.91 38.395h-1.542v1.536h1.542v-1.536zM110.994 38.395h-1.542v1.536h1.542v-1.536zM114.078 38.395h-1.542v1.536h1.542v-1.536zM116.391 38.395h-.771v1.536h.771c.219 0 .433.014.643.042l.2-1.524a6.529 6.529 0 00-.843-.054zM120.323 39.724a6.459 6.459 0 00-1.459-.84l-.591 1.419a4.93 4.93 0 011.111.64l.939-1.218zM122.359 42.367a6.44 6.44 0 00-.844-1.455l-1.223.936c.26.337.477.71.643 1.107l1.424-.588zM122.85 44.83c0-.284-.019-.564-.055-.84l-1.529.2c.027.209.042.423.042.64h1.542z"
                fill="#C7B5B9"
            />
            <G filter="url(#filter3_d_43_846)">
                <Rect
                    x={38}
                    y={6}
                    width={69}
                    height={25}
                    rx={5}
                    fill="#fff"
                    shapeRendering="crispEdges"
                />
                <Path
                    d="M52.182 13.004a1.638 1.638 0 00-2.364 0l-3.157 3.28a1.332 1.332 0 00-.35.686 19.157 19.157 0 00-.084 6.371l.116.748c.036.237.239.411.476.411h2.207a.33.33 0 00.329-.331v-4.635h3.29v4.635a.33.33 0 00.33.331h2.206c.237 0 .44-.174.476-.41l.116-.749c.328-2.113.3-4.267-.083-6.372a1.332 1.332 0 00-.35-.684l-3.158-3.281zM66.713 23v-8.204h1.735v3.385h3.52v-3.385h1.73V23h-1.73v-3.389h-3.52V23h-1.735zm11.164.12c-.622 0-1.16-.132-1.614-.396a2.713 2.713 0 01-1.046-1.114c-.246-.478-.368-1.032-.368-1.662 0-.636.122-1.191.368-1.667.246-.478.594-.849 1.046-1.113.453-.267.992-.4 1.614-.4.622 0 1.159.133 1.61.4.454.264.804.635 1.05 1.113.245.476.368 1.031.368 1.667 0 .63-.123 1.184-.368 1.662a2.705 2.705 0 01-1.05 1.114c-.451.264-.988.396-1.61.396zm.008-1.322c.283 0 .52-.08.709-.24.19-.163.332-.385.428-.665.1-.28.149-.6.149-.957 0-.358-.05-.677-.149-.958a1.49 1.49 0 00-.428-.665 1.05 1.05 0 00-.71-.244c-.285 0-.525.082-.72.244a1.503 1.503 0 00-.437.665c-.096.28-.144.6-.144.958s.048.677.144.957c.099.28.245.502.437.665.195.16.435.24.72.24zM82.015 23v-6.153h1.626v1.086h.072c.128-.36.342-.645.641-.853.3-.209.657-.313 1.074-.313.422 0 .78.106 1.077.317.297.208.494.491.593.849h.064c.125-.353.352-.634.681-.845.331-.214.722-.32 1.174-.32.574 0 1.04.182 1.398.548.36.363.54.879.54 1.546V23h-1.702v-3.801c0-.342-.09-.599-.272-.77a.955.955 0 00-.681-.256c-.31 0-.552.099-.725.297-.174.195-.26.452-.26.773V23H85.66v-3.837c0-.302-.087-.543-.26-.721-.171-.18-.397-.269-.677-.269a.94.94 0 00-.513.144.99.99 0 00-.357.397 1.261 1.261 0 00-.132.593V23h-1.706zm13.092.12c-.633 0-1.177-.128-1.634-.384a2.634 2.634 0 01-1.05-1.098c-.245-.475-.368-1.037-.368-1.686 0-.633.123-1.189.368-1.667.246-.478.592-.85 1.038-1.117.449-.267.975-.4 1.578-.4.406 0 .784.065 1.134.195.352.129.66.322.921.581.265.26.47.585.617.978.147.39.22.846.22 1.37v.468h-5.195v-1.057h3.589c0-.246-.053-.464-.16-.653a1.147 1.147 0 00-.445-.445 1.268 1.268 0 00-.653-.164c-.259 0-.488.06-.689.18a1.264 1.264 0 00-.464.477c-.113.197-.17.418-.173.66v1.006c0 .305.056.568.169.79.114.221.276.392.484.512.209.12.456.18.741.18.19 0 .364-.026.521-.08a1.044 1.044 0 00.66-.633l1.58.105c-.08.379-.245.71-.493.993-.246.28-.564.5-.954.657-.387.155-.834.232-1.342.232z"
                    fill="#F2994A"
                />
            </G>
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M42.977 132.977a.977.977 0 10-1.954 0v2.323a10.746 10.746 0 00-9.723 9.723h-2.323a.977.977 0 000 1.954H31.3a10.746 10.746 0 009.723 9.723v2.323a.977.977 0 101.954 0V156.7a10.746 10.746 0 009.723-9.723h2.323a.977.977 0 000-1.954H52.7a10.746 10.746 0 00-9.723-9.723v-2.323zM37.117 146a4.884 4.884 0 119.767 0 4.884 4.884 0 01-9.768 0zM61.628 160.628a.628.628 0 10-1.256 0v1.493a6.91 6.91 0 00-6.25 6.251h-1.494a.628.628 0 100 1.256h1.493a6.91 6.91 0 006.251 6.251v1.493a.628.628 0 101.256 0v-1.493a6.91 6.91 0 006.25-6.251h1.494a.628.628 0 100-1.256H67.88a6.91 6.91 0 00-6.251-6.251v-1.493zM57.86 169a3.14 3.14 0 116.28 0 3.14 3.14 0 01-6.28 0z"
                fill="#C7B5B9"
            />
            <Defs></Defs>
        </Svg>
    );
};

export default GeoFacingFrame;