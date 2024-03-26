import Noodl from "@noodl/noodl-sdk";
import { Badge } from "./badge";

export interface BadgeProps {
  label: string;
  variant: "default" | "destructive" | "secondary";
}

export const BadgeNode = Noodl.defineReactNode({
  name: "shadcn.badge",
  displayName: "SH_Badge",
  category: "shadcn",
  initialize() {},
  getReactComponent() {
    return (props: BadgeProps) => (
      <Badge variant={props.variant}>{props.label}</Badge>
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
        enums: ["default", "destructive", "outline", "secondary"].map((e) => ({
          label: e,
          value: e,
        })),
      },
    },
  },
  outputProps: {},
});

Noodl.defineModule({
  reactNodes: [BadgeNode],
  nodes: [],
  setup() {},
});
