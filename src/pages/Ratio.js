import styled from "styled-components";
import Layout from "../components/Layout";
import Button from "../components/Button";
import { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { color } from "../components/style";

ChartJS.register(ArcElement, Tooltip, Legend);

const Ratio = () => {
  const [high, setHigh] = useState(false);

  const data = {
    labels: ["여자", "남자"],
    datasets: [
      {
        label: "검색량 비율",
        data: [49.5, 50.5],
        backgroundColor: [color.purple.background, color.yellow.background],
        borderColor: [color.purple.border, color.yellow.border],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Layout
      title="성별 흐름이 다른 키워드"
      icon="milky"
      description={
        "키워드마다 성차가 있을 수 있어요!\n지난 3년 간 남자와 여자의 평균 검색비율을 비교해보세요.\n3년 중 가장 검색량이 많았던 기간에서의 성별 비율도 보여드릴게요."
      }
    >
      <Button
        items={["전체", "고점 중심"]}
        selectedItem={high ? "고점 중심" : "전체"}
        selectedHandler={(el) => setHigh(el === "고점 중심")}
      />
      <PieWrapper>
        {" "}
        <Pie data={data} />
      </PieWrapper>
    </Layout>
  );
};
export default Ratio;

const PieWrapper = styled.div`
  width: 500px;
`;
