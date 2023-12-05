import styled from "styled-components";
import Layout from "../components/Layout";
import { useState } from "react";

import DietColorImg from "../assets/diet_icon_color.png";
import DietGrayImg from "../assets/diet_icon_gray.png";

import WorkColorImg from "../assets/work_icon_color.png";
import WorkGrayImg from "../assets/work_icon_gray.png";

import Plot from "react-plotly.js";
import Button from "../components/Button";
import { color } from "../components/style";

const data = [
  {
    x: [
      14, 12, 11, 15, 10, 11, 14, 13, 14, 13, 14, 13, 14, 13, 14, 13, 14, 13,
      14, 13, 14, 13, 14, 13, 14, 13, 14, 13, 14, 13, 14, 13, 10, 15, 13, 12,
      14, 12, 11, 13, 15, 10, 15,
    ],
    type: "violin",
    name: "Keyword 0",
    box: {
      visible: false,
    },
    line: {
      color: color.redPurple.border,
    },
    fillcolor: color.redPurple.background,
  },
  {
    x: [
      12, 10, 11, 10, 11, 10, 11, 10, 11, 10, 11, 10, 11, 10, 11, 10, 11, 10,
      11, 10, 11, 14, 13, 15, 11, 14, 13, 12, 10, 14, 15, 13, 12, 11, 15, 14,
      10, 13, 12, 11, 15,
    ],
    type: "violin",
    name: "Keyword 1",
    box: {
      visible: false,
    },
    line: {
      color: color.purple.border,
    },
    fillcolor: color.purple.background,
  },

  {
    x: [
      14, 13, 12, 10, 11, 15, 14, 15, 12, 11, 13, 14, 10, 15, 11, 12, 10, 15,
      11, 12, 10, 15, 11, 12, 10, 15, 11, 12, 10, 15, 11, 12, 10, 15, 11, 12,
      10, 15, 11, 12, 10, 15, 13, 11,
    ],
    type: "violin",
    name: "Keyword 2",
    box: {
      visible: false,
    },
    line: {
      color: color.blue.border,
    },
    fillcolor: color.blue.background,
  },
  {
    x: [
      12, 15, 14, 13, 10, 11, 14, 13, 12, 11, 10, 15, 14, 15, 13, 11, 10, 15,
      12, 13, 11, 14, 12, 13,
    ],
    type: "violin",
    name: "Keyword 3",
    box: {
      visible: false,
    },
    line: {
      color: color.lightBlue.border,
    },
    fillcolor: color.lightBlue.background,
  },
];

const layout = {
  // title: "Violin Plot of Keywords Over Time",
  width: 800,
  autosize: true,
  margin: {
    b: 25,
    t: 0,
    pad: 0,
  },
  xaxis: {
    showticklabels: true,
    tickmode: "array",
    tickvals: [10, 11, 12, 13, 14, 15],
    ticktext: ["10월", "11월", "12월", "1월", "2월", "3월"],
    zeroline: false,
  },
  violingap: 0,
  hovermode: true,
  showlegend: false,
};

const Trends = () => {
  const [diet, onDiet] = useState(true);

  return (
    <Layout
      title="1분기 트렌드 한눈에 보기"
      icon="ball"
      description={
        "1분기에는 어떤 키워드가 떠오르고 저물까요?\n지난 3년간의 관심도를 통해 다가오는 1분기를 예측해보아요."
      }
    >
      <PlotWrapper>
        <Button
          items={["식단", "운동"]}
          selectedItem={diet ? "식단" : "운동"}
          selectedHandler={(el) => {
            onDiet(el === "식단");
          }}
        />
        <Plot
          data={data}
          layout={layout}
          config={{ displayModeBar: false, staticPlot: false }}
        />
        <DescriptionWrapper>
          {
            "설명을 적어주세요. 설명을 적어주세요. 설명을 적어주세요 .설명을 적어주세요 설명을 적어주세요 .설명을 적어주세요 설명을 적어주세요 .설명을 적어주세요 설명을 적어주세요 .설명을 적어주세요 설명을 적어주세요 .설명을 적어주세요 설명을 적어주세요 .설명을 적어주세요 설명을 적어주세요 .설명을 적어주세요 설명을 적어주세요 .설명을 적어주세요 설명을 적어주세요 설명을 적어주세요 설명을 적어주세요 설명을 적어주세요설명을 적어주세요설명을 적어주세요"
          }
        </DescriptionWrapper>
      </PlotWrapper>
    </Layout>
  );
};
export default Trends;

const PlotWrapper = styled.div`
  width: 80%;
  max-width: 1000px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 50px 0px;
`;
const DescriptionWrapper = styled.div`
  width: 80%;
  text-align: left;
  white-space: normal;
`;
