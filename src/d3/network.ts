import {
  forceSimulation,
  forceManyBody,
  forceCollide,
  select,
  forceCenter,
  D3DragEvent,
  drag,
  SimulationNodeDatum,
  forceLink,
} from "d3";

import { IuseFollowingNode, IuseFollowinLink } from "../hooks/types";

class Network {
  private svg;

  private nodes;

  private links;

  private width;

  private height = 500;

  private simulation: any;

  constructor(
    svgElement: SVGSVGElement,
    mapObject: {
      nodes: IuseFollowingNode[];
      links: IuseFollowinLink[];
    }
  ) {
    this.svg = select(svgElement);
    this.nodes = mapObject.nodes;
    this.links = mapObject.links;
    this.width = svgElement?.getBoundingClientRect()!.width;

    this.svg.attr("viewBox", [0, 0, this.width, this.height]);
  }

  forceNetwork(onClickHandler: Function) {
    const _links: any = this.links;
    const radius = 10 + (this.width * 500) / Math.pow(this.nodes.length, 3);

    this.simulation = forceSimulation<IuseFollowingNode>(this.nodes)
      .force(
        "collide",
        forceCollide((node) => radius + node.value - 30)
      )
      .force(
        "link",
        forceLink<IuseFollowingNode, IuseFollowinLink>(_links).id(
          (node) => node.name
        )
      )
      .force("charge", forceManyBody().strength(-10))
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
          .selectAll(".link")
          .data(_links)
          .join("line")
          .attr("class", "link")
          .attr(
            "stroke-width",
            (link: any) =>
              (link.source.value - Number(process.env.REACT_APP_MIN_VALUE)) /
                Number(process.env.REACT_APP_VALUE_DECAY) +
              1
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
        // .call(this.draggable());
      });
  }

  draggable() {
    const dragstarted = (
      event: D3DragEvent<
        SVGImageElement,
        IuseFollowingNode,
        SimulationNodeDatum
      >
    ) => {
      if (!event.active) this.simulation.alphaTarget(0.3).restart();
      event.subject.fx = this.validate(event.subject.x!, 0, this.width - 20);
      event.subject.fy = this.validate(event.subject.y!, 0, this.height - 20);
    };

    const dragged = (
      event: D3DragEvent<
        SVGImageElement,
        IuseFollowingNode,
        SimulationNodeDatum
      >
    ) => {
      event.subject.fx = this.validate(event.x, 0, this.width - 20);
      event.subject.fy = this.validate(event.y, 0, this.height - 20);
    };

    const dragended = (
      event: D3DragEvent<
        SVGImageElement,
        IuseFollowingNode,
        SimulationNodeDatum
      >
    ) => {
      if (!event.active) this.simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    };

    return drag<SVGImageElement, IuseFollowingNode>()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended);
  }

  validate(pos: number, min: number, max: number): number {
    if (pos < min) pos = min;
    else if (pos > max) pos = max;
    return pos;
  }
}

export default Network;
