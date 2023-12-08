import styled from "styled-components";
import Layout from "../components/Layout";
import { useState } from "react";

import Button from "../components/Button";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { keywordData } from "../assets/keywordData";
import { color } from "../components/style";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
  scales: {
    y: {
      title: {
        display: true,
        text: "검색 관심도 ( 상대값 )",
      },
    },
  },
};

const data = (diet) => {
  const category = diet ? "식단" : "운동";
  const dataSet = Object.values(keywordData[category]);
  const labelSet = Object.keys(keywordData[category]);
  const fill = false;

  return {
    labels: ["10월", "11월", "12월", "1월", "2월", "3월"],
    datasets: [
      {
        fill,
        label: labelSet[0],
        data: dataSet[0],
        borderColor: color.blue.border,
        backgroundColor: color.blue.background,
      },
      {
        fill,
        label: labelSet[1],
        data: dataSet[1],
        borderColor: color.yellow.border,
        backgroundColor: color.yellow.background,
      },
      {
        fill,
        label: labelSet[2],
        data: dataSet[2],
        borderColor: color.orange.border,
        backgroundColor: color.orange.background,
      },
      {
        fill,
        label: labelSet[3],
        data: dataSet[3],
        borderColor: color.purple.border,
        backgroundColor: color.purple.background,
      },
      {
        fill,
        label: labelSet[4],
        data: dataSet[4],
        borderColor: color.redPurple.border,
        backgroundColor: color.redPurple.background,
      },
    ],
  };
};

const Trends = () => {
  const [diet, onDiet] = useState(false);

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
        <Line options={options} data={data(diet)} />
        <DescriptionWrapper>
          {keywordData[diet ? "식단" : "운동"].description}
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
  @media screen and (max-width: 800px) {
    width: 90%;
  }
  text-align: left;
  white-space: normal;
`;
