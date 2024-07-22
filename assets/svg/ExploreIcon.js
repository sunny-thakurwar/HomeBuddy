import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function ExploreSvg({ fill, ...rest }) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <G filter="url(#filter0_di_5914_30490)" clipPath="url(#clip0_5914_30490)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.949 7.316a1 1 0 00-1.265-1.265l-4.5 1.5a1 1 0 00-.633.633l-1.5 4.5a1 1 0 001.265 1.265l4.5-1.5a1 1 0 00.633-.633l1.5-4.5z"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_5914_30490">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default ExploreSvg;
