import Noodl from "@noodl/noodl-sdk";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";

import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

import "react-big-calendar/lib/css/react-big-calendar.css";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

const DnDCalendar = withDragAndDrop(Calendar);

const localizer = dayjsLocalizer(dayjs);

export interface CalendarEvent {
  start: Date;
  end: Date;
  title: string;
}

export interface CalendarRessource {
  title: string;
}

export interface CalendarProps {
  events: {
    start: string;
    end: string;
    title: string;
  }[];
  dateFormat: string;
}

const CalendarReactNode = (props: CalendarProps) => {
  let events: CalendarEvent[] = [];
  if (props.events && props.dateFormat) {
    events = props.events.map((e) => ({
      start: dayjs(e.start, props.dateFormat).toDate(),
      end: dayjs(e.end, props.dateFormat).toDate(),
      title: e.title,
    }));
  }

  return (
    <div>
      <DnDCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

const CalendarNode = Noodl.defineReactNode({
  name: "care.huber.ui.calendar",
  displayName: "Calendar",
  category: "Huber UI",
  initialize() {},
  getReactComponent() {
    return CalendarReactNode;
  },
  inputs: {},
  inputProps: {
    dateFormat: {
      displayName: "Date Format",
      type: "string",
      default: "YYYY-MM-DDTHH:mm",
    },
    events: {
      displayName: "Events",
      type: "array",
    },
    ressources: {
      displayName: "Ressources",
      type: "array",
    },
  },
  outputProps: {},
});

Noodl.defineModule({
  reactNodes: [CalendarNode],
  nodes: [],
  setup() {},
});
