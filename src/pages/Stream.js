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

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);
const data = {
  labels: ["1", "2", "3", "4", "5", "6"],
  datasets: [
    {
      label: "여자",
      data: [2, 9, 3, 5, 2, 3],
      backgroundColor: color.purple.background,
      borderColor: color.purple.border,
      borderWidth: 1,
    },
    {
      label: "남자",
      data: [2, 3, 4, 5, 6, 2],
      backgroundColor: color.yellow.background,
      borderColor: color.yellow.border,
      borderWidth: 1,
    },
  ],
};
const Stream = () => {
  return (
    <Layout
      title="남녀의 방향성도 두들겨봐요"
      icon="wand"
      description={
        "각자 다른 특성을 가지고 있는 키워드들을 모아봤어요.\n남자와 여자가 가지고 있는 방향성을 비교해보아요."
      }
    >
      <RadarWrapepr>
        <Radar data={data} options={{ responsive: true }} />
      </RadarWrapepr>
    </Layout>
  );
};
export default Stream;
const RadarWrapepr = styled.div`
  width: 60%;
  max-width: 1000px;
`;
