import styled from "styled-components";
import Layout from "../components/Layout";
import WordCloudGender from "../components/WordCloud";
import { genderData } from "../assets/genderData";
import Button from "../components/Button";
import { useState } from "react";

const Gender = () => {
  const [female, setFemale] = useState(true);
  console.log(genderData[female ? "female" : "male"]);

  return (
    <Layout
      title="성별 초집중 키워드"
      icon="comet"
      description={"각 성별은 이번 분기에 어떤 키워드를 검색할까요?"}
    >
      <Button
        items={["남자", "여자"]}
        selectedItem={female ? "여자" : "남자"}
        selectedHandler={(el) => setFemale(el === "여자")}
      />
      <WordCloudGender data={genderData[female ? "female" : "male"]} />
    </Layout>
  );
};
export default Gender;
