import styled from "styled-components";
import Layout from "../components/Layout";
import Button from "../components/Button";
import { useEffect, useState } from "react";

import { hitmapData } from "../assets/hitmapData";
import Heatmap from "../components/Heatmap";

const Keywords = () => {
  const [gender, setGender] = useState("전체");
  const items = [
    "닭가슴살🐔",
    "샐러드🥗",
    "오트밀🌾",
    "탄산수🫧",
    "런닝🏃‍♂️",
    "헬스용품🏋‍♂️",
  ];
  const [item, setItem] = useState("헬스용품🏋‍♂️");

  return (
    <Layout
      title="1분기 불타는 키워드"
      icon="fire"
      description={
        "1분기에 이걸 놓치면 땅을 치고 후회할걸요!\n성별 별로도 어떻게 다른지 알려드릴게요!"
      }
    >
      <Button
        items={["전체", "남자", "여자"]}
        selectedItem={gender}
        selectedHandler={(el) => setGender(el)}
      />
      <CalendarContainer>
        {items.map((el, idx) => (
          <Heatmap
            data={
              Object.values(hitmapData)[idx][
                gender === "전체" ? "total" : gender === "남자" ? "m" : "f"
              ]
            }
            keyword={el}
            idx={idx}
            selected={el === item}
            selectedHandler={(el) => setItem(el)}
            description={Object.values(hitmapData)[idx].description}
          />
          // <CalendarWrapper
          //   large={item === el}
          //   onClick={() => setItem((prev) => (prev === el ? null : el))}
          // ></CalendarWrapper>
        ))}
      </CalendarContainer>
    </Layout>
  );
};
export default Keywords;

const CalendarWrapper = styled.div`
  width: ${(props) => (props.large ? "600px" : "300px")};

  transition: all 0.3s;
`;

const CalendarContainer = styled.div`
  width: 980px;
  max-width: 90%;
  height: fit-content;

  @media screen and (max-width: 800px) {
    justify-content: center;
  }

  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 40px;
  flex-wrap: wrap;
`;
