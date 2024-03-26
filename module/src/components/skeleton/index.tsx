import Noodl from "@noodl/noodl-sdk";
import { Skeleton } from "./skeleton";

export interface SkeletonProps {}

export const SkeletonNode = Noodl.defineReactNode({
  name: "shadcn.skeleton",
  displayName: "SH_Skeleton",
  category: "shadcn",
  initialize() {},
  getReactComponent() {
    return (props: SkeletonProps) => <Skeleton />;
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

Noodl.defineModule({
  reactNodes: [SkeletonNode],
  nodes: [],
  setup() {},
});
