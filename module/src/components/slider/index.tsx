import Noodl from "@noodl/noodl-sdk";
import { Slider } from "./slider";

export interface SliderProps {
  defaultValue: number[];
  max: number;
  step: number;
}

export const SliderNode = Noodl.defineReactNode({
  name: "shadcn.slider",
  displayName: "SH_Slider",
  category: "shadcn",
  initialize() {},
  getReactComponent() {
    return (props: SliderProps) => <Slider {...props} />;
  },
  inputs: {},
  inputProps: {
    defaultValue: {
      type: "array",
    },
    max: {
      type: "number",
      default: "100",
    },
    step: {
      type: "number",
      default: "1",
    },
  },
  outputProps: {},
});

Noodl.defineModule({
  reactNodes: [SliderNode],
  nodes: [],
  setup() {},
});
