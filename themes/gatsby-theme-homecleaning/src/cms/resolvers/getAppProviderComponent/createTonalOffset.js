/* eslint-disable @typescript-eslint/explicit-function-return-type */

import removeEmpty from "../../utils/removeEmpty";

export default function createTonalOffset(cmsTonalOffsetData) {
  const cmsTonalOffset = removeEmpty(cmsTonalOffsetData);
  const defaultTonalOffset = {
    light: 0.8,
    dark: 0.5
  };
  return { ...defaultTonalOffset, ...cmsTonalOffset };
}
