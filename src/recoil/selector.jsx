import { selector } from "recoil";
import { charAtom } from "./atom";

export const charValueSelector = selector({
  key: "charValueSelector",
  get: ({ get }) => {
    const value = get(charAtom);
    return value;
  },
});
