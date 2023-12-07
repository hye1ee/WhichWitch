import styled from "styled-components";

import CalHeatmap from "cal-heatmap";
import Legend from "cal-heatmap/plugins/Legend";
import Tooltip from "cal-heatmap/plugins/Tooltip";
import "cal-heatmap/cal-heatmap.css";
import { useEffect, useState } from "react";
import { Item } from "./Items";

const Heatmap = (props) => {
  const [cal, setCal] = useState(null);

  useEffect(() => {
    if (cal) cal.fill(props.data);
  }, [props.data, props.selected]);

  useEffect(() => {
    const id = "heatmap-" + props.idx;
    let newCal;
    if (cal) {
      newCal = cal;
    } else {
      newCal = new CalHeatmap();
      setCal(newCal);
    }
    newCal.paint(
      {
        itemSelector: "#" + id,
        date: { start: new Date("2022-12-01") },
        range: 5,
        scale: {
          color: {
            type: "linear",
            scheme: "PuOr",
            domain: [0, 100],
          },
        },
        domain: {
          type: "month",
        },
        subDomain: { type: "day", radius: 4 },
        data: { source: props.data, x: "date", y: "value" },
      },
      [
        [
          Tooltip,
          {
            text: function (date, value, dayjsDate) {
              return "관심도 " + value + " / " + dayjsDate.format("LL");
            },
          },
        ],
        [
          Legend,
          {
            tickSize: 0,
            width: 100,
            itemSelector: "#" + id,
            label: "검색 관심도 (상대값)",
          },
        ],
      ]
    );
    return () => {
      newCal.destroy();
    };
  }, [props.selected]);

  return (
    <HeatmapWrapper large={props.selected}>
      <HeatmapTitle onClick={() => props.selectedHandler(props.keyword)}>
        {props.keyword}
      </HeatmapTitle>
      <div id={"heatmap-" + props.idx}></div>
    </HeatmapWrapper>
  );
};

export default Heatmap;

const HeatmapWrapper = styled.div`
  width: ${(props) => (props.large ? "600px" : "300px")};

  transition: all 0.3s;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const HeatmapTitle = styled.div`
  background-color: black;
  color: white;
  cursor: pointer;
`;
