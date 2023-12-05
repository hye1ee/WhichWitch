import styled from "styled-components";
import Layout from "../components/Layout";
import { useState } from "react";

import DietColorImg from "../assets/diet_icon_color.png";
import DietGrayImg from "../assets/diet_icon_gray.png";

import WorkColorImg from "../assets/work_icon_color.png";
import WorkGrayImg from "../assets/work_icon_gray.png";

import Plot from "react-plotly.js";
import Button from "../components/Button";

const data = [
  {
    // x: ["October", "November", "December", "January", "February", "March"],
    // y: [10, 20, 30, 40, 30, 20],
    x: [30, 30, 40, 40, 40, 40, 50, 50, 60, 70, 70, 70, 70, 70, 80],
    type: "violin",
    name: "Keyword 3",
    box: {
      visible: false,
    },
    line: {
      color: "orange",
    },
  },
  {
    // x: ["October", "November", "December", "January", "February", "March"],
    // y: [10, 20, 30, 40, 30, 20],
    x: [20, 20, 20, 30, 30, 30, 30, 30, 30, 40, 40, 40, 50, 50, 60],
    type: "violin",
    name: "Keyword 2",
    box: {
      visible: false,
    },
    line: {
      color: "yellow",
    },
  },
  {
    // x: ["October", "November", "December", "January", "February", "March"],
    // y: [10, 20, 30, 40, 30, 20],
    x: [10, 10, 10, 20, 20, 20, 20, 20, 30, 30, 30, 40, 40, 40, 40],
    type: "violin",
    name: "Keyword 1",
    box: {
      visible: false,
    },
    line: {
      color: "blue",
    },
  },
];

const layout = {
  // title: "Violin Plot of Keywords Over Time",
  xaxis: {
    showticklabels: true,
    tickmode: "array",
    tickvals: [10, 20, 30, 40, 50, 60, 70, 80],
    ticktext: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월"],
    zeroline: false,
  },
  violingap: 0,
  hovermode: false,
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
      {/* <DietIconWrapper>
        <DietIcon
          src={diet ? DietColorImg : DietGrayImg}
          onClick={() => onDiet(true)}
          selected={diet}
        />
        <DietIcon
          src={diet ? WorkGrayImg : WorkColorImg}
          onClick={() => onDiet(false)}
          selected={!diet}
        />
      </DietIconWrapper> */}
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
        config={{ displayModeBar: false, staticPlot: true }}
      />
    </Layout>
  );
};
export default Trends;

const DietIcon = styled.img`
  height: ${(props) => (props.selected ? "160px" : "80px")};
  transition: all 0.3s;
  &:hover {
    opacity: 50%;
  }
  cursor: pointer;
`;
const DietIconWrapper = styled.div`
  height: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
