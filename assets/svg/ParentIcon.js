import * as React from "react";
import Svg, { G, Path, Defs } from "react-native-svg";

function ParentSvg({ fill, ...rest }) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <G>
        <G filter="url(#filter0_i_5916_4446)">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2a5 5 0 100 10 5 5 0 000-10z"
          />
        </G>
        <G filter="url(#filter1_i_5916_4446)">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9 13c-1.663 0-3.262.758-4.199 1.9-.475.58-.81 1.297-.839 2.092-.03.812.263 1.604.868 2.295C6.302 20.972 8.653 22 12 22s5.698-1.028 7.17-2.713c.605-.691.898-1.483.868-2.295-.03-.795-.364-1.512-.84-2.092C18.263 13.758 16.664 13 15 13H9z"
          />
        </G>
      </G>
      <Defs></Defs>
    </Svg>
  );
}

export default ParentSvg;
