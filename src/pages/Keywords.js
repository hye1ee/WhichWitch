import styled from "styled-components";
import Layout from "../components/Layout";
import CalendarHeatmap from "react-calendar-heatmap";
import Button from "../components/Button";
import { useState } from "react";

const Keywords = () => {
  const [gender, setGender] = useState("전체");

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
      <CalendarWrapper>
        <CalendarHeatmap
          startDate={new Date("2016-01-01")}
          endDate={new Date("2016-04-01")}
          values={[
            { date: "2016-01-01", count: 12 },
            { date: "2016-01-22", count: 122 },
            { date: "2016-01-30", count: 38 },
          ]}
        />
      </CalendarWrapper>
    </Layout>
  );
};
export default Keywords;

const CalendarWrapper = styled.div`
  width: 300px;
`;
