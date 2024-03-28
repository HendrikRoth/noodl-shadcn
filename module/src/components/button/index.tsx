import Noodl from "@noodl/noodl-sdk";
import { Button } from "./button";

export interface ButtonProps {
  label: string;
  variant: "default" | "destructive" | "secondary" | "ghost" | "link";
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

export const ButtonNode = Noodl.defineReactNode({
  name: "shadcn.button",
  displayName: "SH_Button",
  category: "shadcn",
  initialize() {},
  getReactComponent() {
    return (props: ButtonProps) => (
      <Button variant={props.variant} onClick={props.onClick}>
        {props.label}
      </Button>
    );
  },
  inputs: {},
  inputProps: {
    label: {
      displayName: "Label",
      type: "string",
      default: "Label",
    },
    variant: {
      displayName: "Variant",
      default: "default",
      type: {
        name: "enum",
        enums: [
          "default",
          "destructive",
          "outline",
          "secondary",
          "ghost",
          "link",
        ].map((e) => ({ label: e, value: e })),
      },
    },
  },
  outputProps: {
    onClick: {
      type: "signal",
      group: "Events",
      displayName: "Click",
    },
  },
});

Noodl.defineModule({
  reactNodes: [ButtonNode],
  nodes: [],
  setup() {},
});
