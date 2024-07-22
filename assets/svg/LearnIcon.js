import * as React from "react";
import Svg, { G, Path, Defs } from "react-native-svg";

function LearnSvg({ fill, ...rest }) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <G filter="url(#filter0_i_5914_30491)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2.5a.5.5 0 00-.5-.5H8a4 4 0 00-4 4v12a4 4 0 004 4h8a4 4 0 004-4v-7.5a.5.5 0 00-.5-.5H17a5 5 0 01-5-5V2.5zM19.22 8c.332 0 .57-.321.411-.613a3 3 0 00-.51-.68L15.293 2.88a2.999 2.999 0 00-.68-.51c-.292-.16-.613.079-.613.412V5a3 3 0 003 3h2.22zM9 9a1 1 0 000 2h1a1 1 0 100-2H9zm-1 5a1 1 0 011-1h6a1 1 0 110 2H9a1 1 0 01-1-1zm0 4a1 1 0 011-1h6a1 1 0 110 2H9a1 1 0 01-1-1z"
        />
      </G>
      <Defs></Defs>
    </Svg>
  );
}

export default LearnSvg;
