import type { ReactNode } from "react";

import Noodl from "@noodl/noodl-sdk";
import * as Alert from "./alert";

export interface AlertProps {
  title?: string;
  description?: string;
  variant: "default" | "destructive";
  children: ReactNode[];
}

export const AlertNode = Noodl.defineReactNode({
  name: "shadcn.alert",
  displayName: "SH_Alert",
  category: "shadcn",
  initialize() {},
  getReactComponent() {
    return (props: AlertProps) => (
      <Alert.Alert variant={props.variant}>
        <Alert.AlertTitle>{props.title}</Alert.AlertTitle>
        <Alert.AlertDescription>{props.description}</Alert.AlertDescription>
        {props.children}
      </Alert.Alert>
    );
  },
  inputs: {},
  inputProps: {
    title: {
      type: "string",
    },
    description: {
      type: "string",
    },
    variant: {
      displayName: "Variant",
      default: "default",
      type: {
        name: "enum",
        enums: ["default", "destructive"].map((e) => ({ label: e, value: e })),
      },
    },
  },
  outputProps: {},
});

Noodl.defineModule({
  reactNodes: [AlertNode],
  nodes: [],
  setup() {},
});
