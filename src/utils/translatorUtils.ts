import dictionary from "constants/dictionary";
import { LanguageEnum } from "types/generalTypes";

export const translator = (word: string) => {
  return (dictionary[LanguageEnum.fa] as any)[word];
};
