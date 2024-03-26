import type { ReactNode } from "react";

import Noodl from "@noodl/noodl-sdk";
import * as Accordion from "./accordion";
import { v4 as uuid } from "uuid";

export interface AccordionProps {
  type: "single" | "multiple";
  children: (typeof AccordionItemNode)[];
}

export const AccordionNode = Noodl.defineReactNode({
  name: "shadcn.accordion",
  displayName: "SH_Accordion",
  category: "shadcn",
  initialize() {},
  getReactComponent() {
    return (props: AccordionProps) => {
      return (
        <Accordion.Accordion {...props}>{props.children}</Accordion.Accordion>
      );
    };
  },
  allowChildrenWithCategory: ["shadcn Accordion"],
  inputs: {},
  inputProps: {
    type: {
      displayName: "Type",
      default: "single",
      type: {
        name: "enum",
        enums: ["single", "multiple"],
      },
    },
  },
  outputProps: {},
});

export interface AccordionItemProps {
  title: string;
  children: ReactNode[];
}

export const AccordionItemNode = Noodl.defineReactNode({
  name: "shadcn.accordionItem",
  displayName: "SH_AccordionItem",
  category: "shadcn Accordion",
  initialize() {},
  getReactComponent() {
    return (props: AccordionItemProps) => {
      const value = uuid();
      return (
        <Accordion.AccordionItem value={value}>
          <Accordion.AccordionTrigger>{props.title}</Accordion.AccordionTrigger>
          <Accordion.AccordionContent>
            {props.children}
          </Accordion.AccordionContent>
        </Accordion.AccordionItem>
      );
    };
  },
  inputs: {},
  inputProps: {
    title: {
      type: "string",
      default: "Title",
    },
  },
  outputProps: {},
});

Noodl.defineModule({
  reactNodes: [AccordionNode, AccordionItemNode],
  nodes: [],
  setup() {},
});
