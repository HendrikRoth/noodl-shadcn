import Noodl from "@noodl/noodl-sdk";
import { Switch } from "./switch";

export interface SwitchProps {
  id: string;
  checked: boolean;
  disabled?: boolean;
}

export const SwitchNode = Noodl.defineReactNode({
  name: "shadcn.switch",
  displayName: "SH_Switch",
  category: "shadcn",
  initialize() {},
  getReactComponent() {
    return (props: SwitchProps) => <Switch {...props} />;
  },
  inputs: {},
  inputProps: {
    id: {
      type: "string",
      required: true,
    },
    checked: {
      type: "boolean",
      default: false,
    },
    disabled: {
      type: "boolean",
      default: false,
    },
  },
  outputProps: {},
});

Noodl.defineModule({
  reactNodes: [SwitchNode],
  nodes: [],
  setup() {},
});
