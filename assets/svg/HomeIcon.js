import Svg, { G, Path, Defs } from "react-native-svg";

function HomeSvg({ fill, ...rest }) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <G filter="url(#filter0_i_5914_30493)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.729 7.828l-5.386-4.453a4.814 4.814 0 00-6.186 0L3.771 7.828c-.97.803-1.521 2.019-1.521 3.288v6.945c0 2.255 1.734 4.189 4 4.189h2a2 2 0 002-2v-3.252c0-1.268.952-2.19 2-2.19s2 .922 2 2.19v3.252a2 2 0 002 2h2c2.266 0 4-1.934 4-4.19v-6.944c0-1.269-.55-2.485-1.521-3.288z"
        />
      </G>
      <Defs></Defs>
    </Svg>
  );
}

export default HomeSvg;
