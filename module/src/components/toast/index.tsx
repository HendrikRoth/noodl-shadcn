import type { ReactNode } from "react";

import Noodl from "@noodl/noodl-sdk";
import { Toaster } from "./toaster";
import { ToastAction } from "./toast";
import { toast } from "./use-toast";

export interface ScrollAreaProps {
  children: ReactNode[];
}

export const ToasterNode = Noodl.defineReactNode({
  name: "shadcn.toast.toaster",
  displayName: "SH_Toaster",
  initialize() {},
  getReactComponent() {
    return () => <Toaster />;
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

export const ToastFunctionNode = Noodl.defineNode({
  name: "shadcn.toast.toast",
  displayName: "SH_FN_Toast",
  color: "purple",
  initialize() {},
  inputs: {
    title: {
      type: "string",
    },
    description: {
      type: "string",
    },
    variant: {
      type: {
        name: "enum",
        enums: [
          { label: "default", value: "" },
          { label: "destructive", value: "destructive" },
        ],
      },
      default: "",
    },
    duration: {
      type: "number",
      default: 5000,
    },
  },
  signals: {
    Action() {
      const duration = this.inputs.duration || 5000;
      toast({
        title: this.inputs.title,
        description: this.inputs.description,
        variant: this.inputs.variant,
        duration,
      });
    },
  },
  inputProps: {},
  outputProps: {},
});

Noodl.defineModule({
  reactNodes: [ToasterNode],
  nodes: [ToastFunctionNode],
  setup() {},
});
