import Noodl from "@noodl/noodl-sdk";
import { Progress } from "./progress";

export interface ProgressProps {
  value: number;
}

export const ProgressNode = Noodl.defineReactNode({
  name: "shadcn.progress",
  displayName: "SH_Progress",
  category: "shadcn",
  initialize() {},
  getReactComponent() {
    return (props: ProgressProps) => <Progress {...props} />;
  },
  inputs: {},
  inputProps: {
    value: {
      type: "number",
      default: 0,
    },
  },
  outputProps: {},
});

Noodl.defineModule({
  reactNodes: [ProgressNode],
  nodes: [],
  setup() {},
});
