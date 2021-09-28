import { ChangeEvent } from 'react';

export type indexType = string | number;

export enum LanguageEnum {
  'fa' = 'fa',
  'en' = 'en',
}

export type reduxAction = {
  type: string;
  payload: any;
};

export enum DirectionEnum {
  'rtl' = 'rtl',
  'ltr' = 'ltr',
}

export type inputEventType = ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>;

export type onChangeFuncType = (e: inputEventType) => void;
