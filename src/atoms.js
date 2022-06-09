import { atom } from "recoil";

export const pageDisplayState = atom({
  key: "pageDisplayState",
  default: 2,
});

export const csvContentState = atom({
  key: "csvContentState",
  default: [],
});

export const uniqueBrandsState = atom({
  key: "uniqueBrandsState",
  default: [],
});

export const selectedBrandState = atom({
  key: "selectedBrandState",
  default: [],
});

export const availableModelsState = atom({
  key: "availableModelsState",
  default: [],
});
