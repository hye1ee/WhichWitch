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
import { violinData } from "../assets/keywordData";

const data = (dataKeys) => {
  const result = [
    {
      x: violinData[dataKeys[0]],
      type: "violin",
      name: dataKeys[0],
      box: {
        visible: false,
      },
      line: {
        color: color.redPurple.border,
      },
      fillcolor: color.redPurple.background,
    },
    {
      x: violinData[dataKeys[1]],
      type: "violin",
      name: dataKeys[1],
      box: {
        visible: false,
      },
      line: {
        color: color.purple.border,
      },
      fillcolor: color.purple.background,
    },

    {
      x: violinData[dataKeys[2]],
      type: "violin",
      name: dataKeys[2],
      box: {
        visible: false,
      },
      line: {
        color: color.blue.border,
      },
      fillcolor: color.blue.background,
    },
  ];

  if (dataKeys.length > 3) {
    result.push({
      x: violinData[dataKeys[3]],
      type: "violin",
      name: dataKeys[3],
      box: {
        visible: false,
      },
      line: {
        color: color.lightBlue.border,
      },
      fillcolor: color.lightBlue.background,
    });
  }

  return result;
};

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
          data={data(
            diet
              ? ["단백질", "샐러드", "제로 음료"]
              : ["운동복", "웨이트", "체성분", "런닝"]
          )}
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
