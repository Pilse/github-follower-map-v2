import { IInput } from "../components/types";

export interface IuseInput extends IInput {
  input: string;
  focus: boolean;
}

export interface IuseFollowinNode {
  name: string;
  avatar: string;
  value: number;
}

export interface IuseFollowinLink {
  source: string;
  target: string;
}
