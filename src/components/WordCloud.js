import React from "react";
import WordCloud from "react-wordcloud";

// 여자 워드클라우드 데이터

const colors = [
  "#f3eeff",
  "#d4bdff",
  "#B98AFF",
  "#a24dff",
  "#8200dd",
  "#540091",
  "#2a004d",
  "#D0FF8A",
  "#a0d900",
  "#80af00",
  "#628700",
  "#456100",
  "#2b3d00",
  "#121d00",
];

const fontOptions = {
  // fontFamily: "LeferiPointWhite.ttf", // 폰트 실제경로로 변경해 주시면 됩니다
  fontWeight: 700,
  fontSizes: [15, 140],
};

const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

const getRandomColorWords = (data) => {
  return data.map((word) => {
    return { ...word, color: getRandomColor() };
  });
};

// 화면 비율은 바꾸지 말아주세요 (사이즈는 변경하셔도 됩니다)
// 디폴트로 여성의 워드클라우드를 먼저 그리게 만들어 두었습니다
const WordCloudGender = (props) => {
  const randomColorWords = getRandomColorWords(props.data);
  return (
    <div style={{ width: "1130px", height: "568px" }}>
      <WordCloud words={randomColorWords} options={fontOptions} />
    </div>
  );
};

export default WordCloudGender;
