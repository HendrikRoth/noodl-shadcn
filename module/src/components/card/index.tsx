import type { ReactNode } from "react";

import Noodl from "@noodl/noodl-sdk";
import * as Card from "./card";

export interface CardProps {
  children: ReactNode[];
}

export const CardNode = Noodl.defineReactNode({
  name: "shadcn.card",
  displayName: "SH_Card",
  category: "shadcn Card",
  initialize() {},
  getReactComponent() {
    return (props: CardProps) => {
      return <Card.Card>{props.children}</Card.Card>;
    };
  },
  allowChildren: true,
  allowChildrenWithCategory: ["shadcn Card"],
  inputs: {},
  inputProps: {},
  outputProps: {},
});

export const CardHeaderNode = Noodl.defineReactNode({
  name: "shadcn.cardHeader",
  displayName: "SH_CardHeader",
  category: "shadcn Card",
  initialize() {},
  getReactComponent() {
    return (props: CardProps) => (
      <Card.CardHeader>{props.children}</Card.CardHeader>
    );
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

export const CardTitleNode = Noodl.defineReactNode({
  name: "shadcn.cardTitle",
  displayName: "SH_CardTitle",
  category: "shadcn Card",
  initialize() {},
  getReactComponent() {
    return (props: CardProps) => (
      <Card.CardTitle>{props.children}</Card.CardTitle>
    );
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

export const CardDescriptionNode = Noodl.defineReactNode({
  name: "shadcn.cardDescription",
  displayName: "SH_CardDescription",
  category: "shadcn Card",
  initialize() {},
  getReactComponent() {
    return (props: CardProps) => (
      <Card.CardDescription>{props.children}</Card.CardDescription>
    );
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

export const CardContentNode = Noodl.defineReactNode({
  name: "shadcn.cardContent",
  displayName: "SH_CardContent",
  category: "shadcn Card",
  initialize() {},
  getReactComponent() {
    return (props: CardProps) => (
      <Card.CardContent>{props.children}</Card.CardContent>
    );
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

export const CardFooterNode = Noodl.defineReactNode({
  name: "shadcn.cardFooter",
  displayName: "SH_CardFooter",
  category: "shadcn Card",
  initialize() {},
  getReactComponent() {
    return (props: CardProps) => (
      <Card.CardFooter className="flex justify-between items-center gap-2">
        {props.children}
      </Card.CardFooter>
    );
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

Noodl.defineModule({
  reactNodes: [
    CardNode,
    CardHeaderNode,
    CardTitleNode,
    CardDescriptionNode,
    CardContentNode,
    CardFooterNode,
  ],
  nodes: [],
  setup() {},
});
