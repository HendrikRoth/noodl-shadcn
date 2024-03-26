import type { ReactNode } from "react";
import { useState } from "react";

import Noodl from "@noodl/noodl-sdk";
import * as Collapsible from "./collapsible";

export interface CollapsibleTriggerProps {
  children: ReactNode[];
}

export const CollapsibleTriggerNode = Noodl.defineReactNode({
  name: "shadcn.collapsibleTrigger",
  displayName: "SH_CollapsibleTrigger",
  category: "shadcn Collapsible",
  initialize() {},
  getReactComponent() {
    return (props: CollapsibleTriggerProps) => (
      <Collapsible.CollapsibleTrigger>
        {props.children}
      </Collapsible.CollapsibleTrigger>
    );
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

export interface CollapsibleContentProps {
  children: ReactNode[];
}

export const CollapsibleContentNode = Noodl.defineReactNode({
  name: "shadcn.collapsibleContent",
  displayName: "SH_CollapsibleContent",
  category: "shadcn Collapsible",
  initialize() {},
  getReactComponent() {
    return (props: CollapsibleContentProps) => (
      <Collapsible.CollapsibleContent>
        {props.children}
      </Collapsible.CollapsibleContent>
    );
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

export interface CollapsibleProps {
  isOpen: boolean;
  children: ReactNode[];
}

export const CollapsibleNode = Noodl.defineReactNode({
  name: "shadcn.collapsible",
  displayName: "SH_Collapsible",
  category: "shadcn Collapsible",
  initialize() {},
  getReactComponent() {
    return (props: CollapsibleProps) => {
      const [isOpen, setIsOpen] = useState(props.isOpen);

      return (
        <Collapsible.Collapsible open={isOpen} onOpenChange={setIsOpen}>
          {props.children}
        </Collapsible.Collapsible>
      );
    };
  },
  inputs: {},
  inputProps: {
    isOpen: {
      type: "boolean",
    },
  },
  outputProps: {},
});

Noodl.defineModule({
  reactNodes: [CollapsibleNode, CollapsibleTriggerNode, CollapsibleContentNode],
  nodes: [],
  setup() {},
});
