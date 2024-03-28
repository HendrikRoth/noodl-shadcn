import type { ReactNode } from "react";

import Noodl from "@noodl/noodl-sdk";
import * as Resizable from "./resizable";

export interface ResizablePanelGroupProps {
  direction: "horizontal" | "vertical";
  children: ReactNode[];
}

export const ResizablePanelGroupNode = Noodl.defineReactNode({
  name: "shadcn.resizable.panelGroup",
  displayName: "SH_ResizablePanelGroup",
  category: "shadcn Resizable",
  initialize() {},
  getReactComponent() {
    return (props: ResizablePanelGroupProps) => {
      return (
        <Resizable.ResizablePanelGroup direction={props.direction}>
          {props.children}
        </Resizable.ResizablePanelGroup>
      );
    };
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

export interface ResizablePanelProps {
  defaultSize?: number;
  children: ReactNode[];
}

export const ResizablePanelNode = Noodl.defineReactNode({
  name: "shadcn.resizable.panel",
  displayName: "SH_ResizablePanel",
  category: "shadcn Resizable",
  initialize() {},
  getReactComponent() {
    return (props: ResizablePanelProps) => {
      return (
        <Resizable.ResizablePanel defaultSize={props.defaultSize}>
          {props.children}
        </Resizable.ResizablePanel>
      );
    };
  },
  inputs: {},
  inputProps: {
    defaultSize: {
      type: "number",
    },
  },
  outputProps: {},
});

export const ResizableHandleNode = Noodl.defineReactNode({
  name: "shadcn.resizable.handle",
  displayName: "SH_ResizableHandle",
  category: "shadcn Resizable",
  initialize() {},
  getReactComponent() {
    return () => {
      return <Resizable.ResizableHandle />;
    };
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

Noodl.defineModule({
  reactNodes: [
    ResizablePanelGroupNode,
    ResizablePanelNode,
    ResizableHandleNode,
  ],
  nodes: [],
  setup() {},
});
