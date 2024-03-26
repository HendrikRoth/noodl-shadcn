import { useState } from "react";
import Noodl from "@noodl/noodl-sdk";
import { Calendar } from "./calendar";

export interface CalendarProps {
  date: Date;
  mode: "single" | "multiple";
}

export const CalendarNode = Noodl.defineReactNode({
  name: "shadcn.calendar",
  displayName: "SH_Calendar",
  category: "shadcn",
  initialize() {},
  getReactComponent() {
    return (props: CalendarProps) => {
      const [date, setDate] = useState<Date | undefined>(new Date(props.date));

      return <Calendar mode="single" selected={date} onSelect={setDate} />;
    };
  },
  inputs: {},
  inputProps: {
    date: {
      type: "date",
    },
  },
  outputProps: {},
});

Noodl.defineModule({
  reactNodes: [CalendarNode],
  nodes: [],
  setup() {},
});
