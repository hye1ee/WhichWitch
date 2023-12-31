import styled from "styled-components";
import Layout from "../components/Layout";

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import { color } from "../components/style";
import { radarData } from "../assets/genderData";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);
const data = {
  labels: radarData.contents,
  datasets: [
    {
      label: "여자",
      data: radarData.female_data,
      backgroundColor: color.purple.background,
      borderColor: color.purple.border,
      borderWidth: 1,
    },
    {
      label: "남자",
      data: radarData.male_data,
      backgroundColor: color.yellow.background,
      borderColor: color.yellow.border,
      borderWidth: 1,
    },
  ],
};
const Stream = () => {
  return (
    <Layout
      title="키워드 방향성 비교"
      icon="wand"
      description={
        "각자 다른 특성을 가지고 있는 키워드들을 모아봤어요.\n남자와 여자가 가지고 있는 방향성을 비교해보아요."
      }
    >
      <RadarWrapepr>
        <Radar data={data} options={{ responsive: true }} />
        <DescriptionWrapper>{radarData.description}</DescriptionWrapper>
      </RadarWrapepr>
    </Layout>
  );
};
export default Stream;
const RadarWrapepr = styled.div`
  width: 750px;
  max-width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const DescriptionWrapper = styled.div`
  width: 90%;
  text-align: left;
  white-space: normal;
  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;
