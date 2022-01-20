import {
  forceSimulation,
  forceManyBody,
  forceCollide,
  select,
  forceCenter,
  forceLink,
} from "d3";

import { IuseFollowingNode, IuseFollowingLink } from "../hooks/types";

class Network {
  private svg;

  private nodes;

  private links;

  private width;

  private height = 600;

  constructor(
    svgElement: SVGSVGElement,
    mapObject: {
      nodes: IuseFollowingNode[];
      links: IuseFollowingLink[];
    }
  ) {
    this.svg = select(svgElement);
    this.nodes = mapObject.nodes;
    this.links = mapObject.links;
    this.width = svgElement?.getBoundingClientRect()!.width;

    this.svg.attr("viewBox", [0, 0, this.width, this.height]);
  }

  forceNetwork(onClickHandler: Function) {
    const forceLinks: any = JSON.parse(JSON.stringify(this.links));

    const radius = Math.min(
      10 + (this.width * 600) / Math.pow(this.nodes.length, 3),
      40
    );

    const _simulation = forceSimulation<IuseFollowingNode>(this.nodes)
      .force(
        "collide",
        forceCollide((node) => radius + node.value - 27)
      )
      .force(
        "link",
        forceLink<IuseFollowingNode, IuseFollowingLink>(forceLinks).id(
          (node) => node.name
        )
      )
      .force("charge", forceManyBody().strength(-1))
      .force("center", forceCenter(this.width / 2, this.height / 2))
      .on("tick", () => {
        this.nodes.forEach((node) => {
          node.x = this.validate(
            node.x!,
            radius + node.value - 20,
            this.width - (radius + node.value - 20)
          );

          node.y = this.validate(
            node.y!,
            radius + node.value - 20,
            this.height - (radius + node.value - 20)
          );
        });

        this.svg
          .selectAll(".link")
          .data(forceLinks)
          .join("line")
          .attr("class", "link")
          .attr("stroke-width", (link: any) =>
            this.strokeWidth(link.source.value!)
          )
          .attr("x1", (link: any) => link.source.x!)
          .attr("y1", (link: any) => link.source.y!)
          .attr("x2", (link: any) => link.target.x!)
          .attr("y2", (link: any) => link.target.y!);

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

export default Network;
