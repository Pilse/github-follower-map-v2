import { ChangeEvent } from "react";

export interface IButton {
  shape: string;
  size: string;
  text: string;
  icon: string;
  vertical?: boolean;
  active?: boolean;
}

export interface IIcon {
  name: string;
}

export interface IInput {
  onChangeHandler(event: ChangeEvent<HTMLInputElement>): void;
  onFocusHandler(): void;
  onBlurHandler(): void;
}

export interface IHeader {
  show?: boolean;
}

export interface ICard {
  imgUrl: string;
  homeUrl: string;
  user: string;
  bio: string;
  onCloseHandler(): void;
}
