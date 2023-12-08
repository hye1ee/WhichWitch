import styled from "styled-components";
import Layout from "../components/Layout";
import WordCloudGender from "../components/WordCloud";
import { genderData } from "../assets/genderData";
import Button from "../components/Button";
import { useState } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { color } from "../components/style";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const femaleData = {
  "운동복👚": [1055.78782, 1085.4433, 1145.78245],
  "샐러드🥗": [989.3435, 970.1593, 735.53934],
  "단백질🍖": [821.06962, 626.83712, 454.34866],
  "건강음료🥃": [424.91068, 313.7359, 224.04244],
  "체성분💪": [273.71425, 236.99707, 332.10344],
};

const maleData = {
  "단백질🍖": [204.77579, 215.2306, 319.53965],
  "운동복👚": [132.32701, 141.3449, 211.67535],
  "샐러드🥗": [101.96109, 135.54093, 199.30531],
  "체성분💪": [102.35859, 100.1732, 164.32767],
  "헬스용품🔩": [47.72583, 62.20379, 124.65192],
};

const Gender = () => {
  const [female, setFemale] = useState(true);
  const [keyword, setKeyword] = useState(0);
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

  const data = (female) => {
    return {
      labels: [2021, 2022, 2023],
      datasets: [
        {
          label: Object.keys(female ? femaleData : maleData)[keyword],
          data: Object.values(female ? femaleData : maleData)[keyword],
          backgroundColor: color.orange.background,
          borderColor: color.orange.border,
          borderWidth: 1,
        },
      ],
    };
  };

  return (
    <Layout
      title="성별 초집중 키워드"
      icon="comet"
      description={"각 성별은 이번 분기에 어떤 키워드를 검색할까요?"}
    >
      <ChartWrapper>
        <Button
          items={["남자", "여자"]}
          selectedItem={female ? "여자" : "남자"}
          selectedHandler={(el) => setFemale(el === "여자")}
        />
        <WordCloudGender female={female} />
        <Bar options={options} data={data(female)} />
        <GenderTitleWrapper>
          {Object.keys(female ? femaleData : maleData).map((el, idx) => (
            <>
              <GenderTitle
                selected={keyword === idx}
                onClick={() => setKeyword(idx)}
              >
                {el}
              </GenderTitle>
              {idx < Object.keys(female ? femaleData : maleData).length - 1 && (
                <GenderLine />
              )}
            </>
          ))}
        </GenderTitleWrapper>
      </ChartWrapper>
    </Layout>
  );
};
export default Gender;

const GenderTitleWrapper = styled.div`
  width: fit-content;
  max-width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`;
const GenderLine = styled.div`
  flex: 1;
  border: 0.5px solid black;
  width: 15px;
`;

const ChartWrapper = styled.div`
  width: 500px;
  max-width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  /* position: relative;
  bottom: 150px; */
`;

const GenderTitle = styled.div`
  background-color: ${(props) => (props.selected ? "black" : "white")};
  color: ${(props) => (props.selected ? "white" : "black")};
  cursor: pointer;

  font-family: "Leferi-Special";
  box-sizing: border-box;
  border: 1px solid black;
  border-radius: 5px;
  padding: 3px 8px;
  white-space: nowrap;

  &:hover {
    opacity: 50%;
  }

  transition: all 0.3s;
`;
