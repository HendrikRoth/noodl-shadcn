import type { ReactNode } from "react";

import Noodl from "@noodl/noodl-sdk";
import * as Carousel from "./carousel";

export interface CarouselProps {
  axis: "x" | "y";
  breakpoints: any;
  direction: "ltr" | "rtl";
  loop: boolean;
  children: ReactNode[];
}

export const CarouselNode = Noodl.defineReactNode({
  name: "shadcn.carousel",
  displayName: "SH_Carousel",
  category: "shadcn Carousel",
  initialize() {},
  getReactComponent() {
    return (props: CarouselProps) => {
      const opts = (({ children, ...o }) => o)(props);
      return (
        <Carousel.Carousel opts={opts}>{props.children}</Carousel.Carousel>
      );
    };
  },
  inputs: {},
  inputProps: {
    axis: {
      default: "x",
      type: {
        name: "enum",
        enums: ["x", "y"].map((e) => ({ label: e, value: e })),
      },
    },
    breakpoints: {
      default: "",
      type: "string",
    },
    direction: {
      default: "ltr",
      type: {
        name: "enum",
        enums: ["ltr", "rtl"].map((e) => ({ label: e, value: e })),
      },
    },
    loop: {
      default: true,
      type: "boolean",
    },
  },
  outputProps: {},
});

export interface CarouselContentProps {
  children: ReactNode[];
}

export const CarouselContentNode = Noodl.defineReactNode({
  name: "shadcn.carouselContent",
  displayName: "SH_CarouselContent",
  category: "shadcn Carousel",
  initialize() {},
  getReactComponent() {
    return (props: CarouselContentProps) => (
      <Carousel.CarouselContent>{props.children}</Carousel.CarouselContent>
    );
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

export interface CarouselItemProps {
  children: ReactNode[];
}

export const CarouselItemNode = Noodl.defineReactNode({
  name: "shadcn.carouselItem",
  displayName: "SH_CarouselItem",
  category: "shadcn Carousel",
  initialize() {},
  getReactComponent() {
    return (props: CarouselItemProps) => (
      <Carousel.CarouselItem>{props.children}</Carousel.CarouselItem>
    );
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

export const CarouselPreviousNode = Noodl.defineReactNode({
  name: "shadcn.carouselPrevious",
  displayName: "SH_CarouselPrevious",
  category: "shadcn Carousel",
  initialize() {},
  getReactComponent() {
    return () => <Carousel.CarouselPrevious />;
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

export const CarouselNextNode = Noodl.defineReactNode({
  name: "shadcn.carouselNext",
  displayName: "SH_CarouselNext",
  category: "shadcn Carousel",
  initialize() {},
  getReactComponent() {
    return () => <Carousel.CarouselNext />;
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

Noodl.defineModule({
  reactNodes: [
    CarouselNode,
    CarouselContentNode,
    CarouselItemNode,
    CarouselPreviousNode,
    CarouselNextNode,
  ],
  nodes: [],
  setup() {},
});
