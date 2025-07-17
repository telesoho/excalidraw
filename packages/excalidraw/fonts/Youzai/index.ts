import { type ExcalidrawFontFaceDescriptor } from "../Fonts";

import YouzaiLight from "./Yozai-Light.woff2";
import YouzaiRegular from "./Yozai-Regular.woff2";
import YouzaiMedium from "./Yozai-Medium.woff2";

export const YouzaiFontFaces: ExcalidrawFontFaceDescriptor[] = [
  {
    uri: YouzaiLight,
    descriptors: { weight: "300" },
  },
  {
    uri: YouzaiRegular,
    descriptors: { weight: "400" },
  },
  {
    uri: YouzaiMedium,
    descriptors: { weight: "500" },
  },
];
