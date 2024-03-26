import type { ReactNode } from "react";

import Noodl from "@noodl/noodl-sdk";
import * as AlertDialog from "./alert-dialog";

export interface AlertDialogElementProps {
  children: ReactNode[];
}

export interface AlertDialogContentProps {
  text: string;
  children: ReactNode[];
}

export const AlertDialogNode = Noodl.defineReactNode({
  name: "shadcn.alertDialog",
  displayName: "SH_AlertDialog",
  category: "shadcn Alert Dialog",
  initialize() {},
  getReactComponent() {
    return (props: AlertDialogElementProps) => (
      <AlertDialog.AlertDialog>{props.children}</AlertDialog.AlertDialog>
    );
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

export const AlertDialogTriggerNode = Noodl.defineReactNode({
  name: "shadcn.alertDialogTrigger",
  displayName: "SH_AlertDialogTrigger",
  category: "shadcn Alert Dialog",
  initialize() {},
  getReactComponent() {
    return (props: AlertDialogElementProps) => (
      <AlertDialog.AlertDialogTrigger>
        {props.children}
      </AlertDialog.AlertDialogTrigger>
    );
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

export const AlertDialogContentNode = Noodl.defineReactNode({
  name: "shadcn.alertDialogContent",
  displayName: "SH_AlertDialogContent",
  category: "shadcn Alert Dialog",
  initialize() {},
  getReactComponent() {
    return (props: AlertDialogElementProps) => (
      <AlertDialog.AlertDialogContent>
        {props.children}
      </AlertDialog.AlertDialogContent>
    );
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

export const AlertDialogHeaderNode = Noodl.defineReactNode({
  name: "shadcn.alertDialogHeader",
  displayName: "SH_AlertDialogHeader",
  category: "shadcn Alert Dialog",
  initialize() {},
  getReactComponent() {
    return (props: AlertDialogElementProps) => (
      <AlertDialog.AlertDialogHeader>
        {props.children}
      </AlertDialog.AlertDialogHeader>
    );
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

export const AlertDialogTitleNode = Noodl.defineReactNode({
  name: "shadcn.alertDialogTitle",
  displayName: "SH_AlertDialogTitle",
  category: "shadcn Alert Dialog",
  initialize() {},
  getReactComponent() {
    return (props: AlertDialogElementProps) => (
      <AlertDialog.AlertDialogTitle>
        {props.children}
      </AlertDialog.AlertDialogTitle>
    );
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

export const AlertDialogDescriptionNode = Noodl.defineReactNode({
  name: "shadcn.alertDialogDescription",
  displayName: "SH_AlertDialogDescription",
  category: "shadcn Alert Dialog",
  initialize() {},
  getReactComponent() {
    return (props: AlertDialogElementProps) => (
      <AlertDialog.AlertDialogDescription>
        {props.children}
      </AlertDialog.AlertDialogDescription>
    );
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

export const AlertDialogFooterNode = Noodl.defineReactNode({
  name: "shadcn.alertDialogFooter",
  displayName: "SH_AlertDialogFooter",
  category: "shadcn Alert Dialog",
  initialize() {},
  getReactComponent() {
    return (props: AlertDialogElementProps) => (
      <AlertDialog.AlertDialogFooter>
        {props.children}
      </AlertDialog.AlertDialogFooter>
    );
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

export const AlertDialogCancelNode = Noodl.defineReactNode({
  name: "shadcn.alertDialogCancel",
  displayName: "SH_AlertDialogCancel",
  category: "shadcn Alert Dialog",
  initialize() {},
  getReactComponent() {
    return (props: AlertDialogElementProps) => (
      <AlertDialog.AlertDialogCancel>
        {props.children}
      </AlertDialog.AlertDialogCancel>
    );
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

export const AlertDialogActionNode = Noodl.defineReactNode({
  name: "shadcn.alertDialogAction",
  displayName: "SH_AlertDialogAction",
  category: "shadcn Alert Dialog",
  initialize() {},
  getReactComponent() {
    return (props: AlertDialogElementProps) => (
      <AlertDialog.AlertDialogAction>
        {props.children}
      </AlertDialog.AlertDialogAction>
    );
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

Noodl.defineModule({
  reactNodes: [
    AlertDialogNode,
    AlertDialogTriggerNode,
    AlertDialogContentNode,
    AlertDialogHeaderNode,
    AlertDialogTitleNode,
    AlertDialogDescriptionNode,
    AlertDialogFooterNode,
    AlertDialogCancelNode,
    AlertDialogActionNode,
  ],
  nodes: [],
  setup() {},
});
