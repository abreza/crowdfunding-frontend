import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DirectionEnum, LanguageEnum } from "types/generalTypes";

type localSliceStateType = {
  language: LanguageEnum;
  direction: DirectionEnum;
};

const defineLanguage: () => LanguageEnum = () => {
  return LanguageEnum.fa;
};

const defineDirection: () => DirectionEnum = () => {
  return DirectionEnum.rtl;
};

const initialState: localSliceStateType = {
  language: defineLanguage(),
  direction: defineDirection(),
};

const translatorSlice = createSlice({
  name: "translator",
  initialState,
  reducers: {
    setLocal: (_, { payload }: PayloadAction<LanguageEnum>) => {
      return {
        language: payload,
        direction: payload === "fa" ? "rtl" : "ltr",
      } as localSliceStateType;
    },
  },
});

export const { setLocal: setLocalAction } = translatorSlice.actions;

export const { reducer: translatorReducer } = translatorSlice;
