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
import { useState } from "react";
import Items from "../components/Items";

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
      position: "bottom",
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
      tension: 0.3,
    },
    {
      label: "2022",
      data: [100, 300, 600, -300, 100, 200, 456],
      borderColor: color.purple.border,
      backgroundColor: color.purple.background,
      tension: 0.3,
    },
    {
      label: "2023",
      data: [100, 324, 234, -3, 100, 2030, 456],
      borderColor: color.yellow.border,
      backgroundColor: color.yellow.background,
      tension: 0.3,
    },
  ],
};
const NewTopic = () => {
  const items = ["수영🏊‍♀️", "헬스 용품🔩", "현미밥🍚", "근육💪"];
  const [item, setItem] = useState(0);

  return (
    <Layout
      title="2024년 떠오르는 뉴토픽"
      icon="star"
      description={
        "마스크 없이 다시 일상으로 복귀한 첫 해였던 2023년,\n이전과는 어떻게 달라졌을까요?"
      }
      black={true}
    >
      <LineWrapper>
        <TextWrapper>
          {" "}
          <div>{"다가오는 분기에 주목해야 할 키워드는"}</div>
          <Items
            items={items}
            selected={item}
            selectedHandler={(el) => setItem(el)}
            text={"이에요."}
          />
          <div>{"키워드를 클릭하여 최근 3년간의 동향을 파악해보세요!"}</div>
        </TextWrapper>
        <Line options={options} data={data} />
      </LineWrapper>
    </Layout>
  );
};
export default NewTopic;

const LineWrapper = styled.div`
  width: 80%;
  max-width: 1000px;

  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 30px 0px;
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`;
