import styled from "styled-components";
import Layout from "../components/Layout";
import Button from "../components/Button";
import { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { color } from "../components/style";
import { pieData } from "../assets/genderData";
import Items from "../components/Items";

ChartJS.register(ArcElement, Tooltip, Legend);

const Ratio = () => {
  const [focus, setFocus] = useState(false);
  const [keyword, setKeyword] = useState(0);

  useEffect(() => {
    console.log("hey", keyword);
  }, [keyword]);

  const data = {
    labels: ["여자", "남자"],
    datasets: [
      {
        label: "검색량 비율",
        data: focus
          ? Object.values(pieData)[keyword].focus.data
          : Object.values(pieData)[keyword].total.data,
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
      <Items
        items={["헬스용품", "런닝", "닭가슴살", "샐러드"]}
        selected={keyword}
        selectedHandler={(el) => setKeyword(el)}
      />
      <Button
        items={["전체", "고점 중심"]}
        selectedItem={focus ? "고점 중심" : "전체"}
        selectedHandler={(el) => setFocus(el === "고점 중심")}
      />
      <PieWrapper>
        {" "}
        <Pie data={data} />
        <DescriptionWrapper>
          {focus
            ? Object.values(pieData)[keyword].focus.description
            : Object.values(pieData)[keyword].total.description}
        </DescriptionWrapper>
      </PieWrapper>
    </Layout>
  );
};
export default Ratio;

const PieWrapper = styled.div`
  width: 600px;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 30px;
`;
const DescriptionWrapper = styled.div`
  width: 90%;
  text-align: left;
  white-space: normal;
`;
