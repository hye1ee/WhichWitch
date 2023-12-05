import styled from "styled-components";
import Layout from "../components/Layout";
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
const labels = ["1월", "2월", "3월", "4월", "5월", "6월", "7월"];

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};
const data = {
  labels,
  datasets: [
    {
      label: "2021",
      data: [100, -100, 200, 400, 600, 100 - 2324],
      borderColor: color.blue.border,
      backgroundColor: color.blue.background,
    },
    {
      label: "2022",
      data: [100, 300, 600, -300, 100, 200, 456],
      borderColor: color.purple.border,
      backgroundColor: color.purple.background,
    },
    {
      label: "2023",
      data: [100, 324, 234, -3, 100, 2030, 456],
      borderColor: color.yellow.border,
      backgroundColor: color.yellow.background,
    },
  ],
};
const NewTopic = () => {
  return (
    <Layout
      title="2024년 떠오르는 뉴토픽"
      icon="star"
      description={"마스크 없이 다시 일상으로 복귀한 첫 해였던 2023년,"}
      black={true}
    >
      <LineWrapper>
        <Line options={options} data={data} />
      </LineWrapper>
    </Layout>
  );
};
export default NewTopic;

const LineWrapper = styled.div`
  width: 80%;
  max-width: 1000px;
`;
