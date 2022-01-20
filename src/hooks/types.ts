import { IInput } from "../components/types";
import { SimulationLinkDatum, SimulationNodeDatum } from "d3";

export interface IuseInput extends IInput {
  input: string;
  focus: boolean;
}

export interface IuseFollowingNode extends SimulationNodeDatum {
  name: string;
  avatar: string;
  value: number;
}

export interface IuseFollowingLink
  extends SimulationLinkDatum<IuseFollowingNode> {
  source: string;
  target: string;
}
