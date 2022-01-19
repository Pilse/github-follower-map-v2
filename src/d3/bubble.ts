import {
  forceSimulation,
  forceManyBody,
  forceCollide,
  select,
  forceCenter,
} from "d3";

import { IuseFollowingNode } from "../hooks/types";

class Bubble {
  private svg;

  private nodes;

  private width;

  private height = 500;

  constructor(svgElement: SVGSVGElement, nodes: IuseFollowingNode[]) {
    this.svg = select(svgElement);
    this.nodes = nodes;
    this.width = svgElement?.getBoundingClientRect()!.width;

    this.svg.attr("viewBox", [0, 0, this.width, this.height]);
  }

  forceBubble(onClickHandler: Function) {
    const radius = Math.min(
      10 + (this.width * 500) / Math.pow(this.nodes.length, 3),
      40
    );

    const _simulation = forceSimulation<IuseFollowingNode>(this.nodes)
      .force(
        "collide",
        forceCollide((node) => (radius + node.value - 20) / 2)
      )
      .force("charge", forceManyBody().strength(150))
      .force("center", forceCenter(this.width / 2, this.height / 2))
      .on("tick", () => {
        this.nodes.forEach((node) => {
          node.x = this.validate(
            node.x!,
            radius + node.value,
            this.width - (radius + node.value)
          );

          node.y = this.validate(
            node.y!,
            radius + node.value,
            this.height - (radius + node.value)
          );
        });

        this.svg
          .selectAll<SVGImageElement, IuseFollowingNode>("image")
          .data<IuseFollowingNode>(this.nodes)
          .join("image")
          .attr("href", (node) => node.avatar)
          .attr("x", (node) => node.x! - (radius + node.value - 20) / 2)
          .attr("y", (node) => node.y! - (radius + node.value - 20) / 2)
          .attr("width", (node) => radius + node.value - 20)
          .attr("height", (node) => radius + node.value - 20)
          .on("click", (_, node) => onClickHandler(() => node.name));
      });
  }

  validate(pos: number, min: number, max: number): number {
    if (pos < min) pos = min;
    else if (pos > max) pos = max;
    return pos;
  }

  strokeWidth(value: number) {
    const minValue = Number(process.env.REACT_APP_MIN_VALUE);
    const valueDecay = Number(process.env.REACT_APP_VALUE_DECAY);

    return (value - minValue) / valueDecay + 1;
  }
}

export default Bubble;
