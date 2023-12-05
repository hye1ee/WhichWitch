import styled from "styled-components";
import Layout from "../components/Layout";
import CalendarHeatmap from "react-calendar-heatmap";
import Button from "../components/Button";
import { useEffect, useState } from "react";

import CalHeatmap from "cal-heatmap";
import Legend from "cal-heatmap/plugins/Legend";
import Tooltip from "cal-heatmap/plugins/Tooltip";
import "cal-heatmap/cal-heatmap.css";

const data = [
  { date: "2012-01-01", value: 3 },
  { date: "2012-01-02", value: 6 },
];

const Keywords = () => {
  const [gender, setGender] = useState("전체");
  const items = ["헬스용품", "탄산수", "샐러드", "런닝", "닭가슴살", "오트밀"];
  const [item, setItem] = useState(null);
  useEffect(() => {
    const cal = new CalHeatmap();
    cal.paint(
      {
        itemSelector: "#my-heatmap",
        date: { start: new Date("2012-01-01"), locale: "en" },
        range: 1,
        scale: {
          color: {
            type: "quantize",
            scheme: "Oranges",
          },
        },
        domain: {
          type: "year",
        },
        subDomain: { type: "day", radius: 2 },
        data: { source: data },
      },
      [
        [
          Tooltip,
          {
            text: function (date, value, dayjsDate) {
              return (
                (value ? value + "km/h" : "No data") +
                " on " +
                dayjsDate.format("LL")
              );
            },
          },
        ],
        [
          Legend,
          {
            tickSize: 0,
            width: 100,
            itemSelector: "#ex-wind-legend",
            label: "Seattle wind (km/h)",
          },
        ],
      ]
    );

    return () => {
      cal.destroy();
    };
  }, []);
  return (
    <Layout
      title="1분기 불타는 키워드"
      icon="fire"
      description={
        "1분기에 이걸 놓치면 땅을 치고 후회할걸요!\n성별 별로도 어떻게 다른지 알려드릴게요!"
      }
    >
      <Button
        items={["전체", "남자", "여자"]}
        selectedItem={gender}
        selectedHandler={(el) => setGender(el)}
      />
      <CalendarContainer>
        {items.map((el) => (
          <CalendarWrapper
            large={item === el}
            onClick={() => setItem((prev) => (prev === el ? null : el))}
          >
            <div id="my-heatmap"></div>
            {/* <CalendarHeatmap
              data-tooltip-id="data-tooltip"
              startDate={new Date("2022-12-01")}
              endDate={new Date("2023-04-30")}
              values={[
                { date: "2022-12-01", count: 12 },
                { date: "2023-01-01", count: 12 },
                { date: "2023-02-01", count: 12 },
                { date: "2023-03-01", count: 12 },
                { date: "2023-04-01", count: 12 },
                { date: "2023-04-30", count: 12 },
              ]}
              tooltipDataAttrs={(value) => {
                return {
                  "data-tooltip": `${new Date(value.date)
                    .toISOString()
                    .slice(0, 10)} has count: ${value.count}`,
                };
              }}
              showWeekdayLabels={true}
            />
            <Tooltip id="data-tooltip" /> */}
          </CalendarWrapper>
        ))}
      </CalendarContainer>
    </Layout>
  );
};
export default Keywords;

const CalendarWrapper = styled.div`
  width: ${(props) => (props.large ? "600px" : "300px")};

  transition: all 0.3s;
`;

const CalendarContainer = styled.div`
  width: 980px;
  height: fit-content;

  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 40px;
  flex-wrap: wrap;
`;
