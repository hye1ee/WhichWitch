// import React, { useRef, useEffect } from "react";
// import WordCloud from "react-wordcloud";

// const colors = [
//   "#f3eeff",
//   "#d4bdff",
//   "#B98AFF",
//   "#a24dff",
//   "#8200dd",
//   "#540091",
//   "#2a004d",
//   "#D0FF8A",
//   "#a0d900",
//   "#80af00",
//   "#628700",
//   "#456100",
//   "#2b3d00",
//   "#121d00",
// ];

// const fontOptions = {
//   // fontFamily: "LeferiPointWhite.ttf", // 폰트 실제경로로 변경해 주시면 됩니다
//   fontWeight: 700,
//   fontSizes: [15, 140],
// };

// const getColorForValue = (value, minValue, maxValue) => {
//   const startColor = [208, 255, 138];
//   const endColor = [138, 93, 254];

//   const normalizedValue = (value - minValue) / (maxValue - minValue);

//   const interpolatedColor = startColor.map((start, index) => {
//     const end = endColor[index];
//     const delta = end - start;
//     return Math.round(start + delta * normalizedValue);
//   });

//   return `rgb(${interpolatedColor.join(",")})`;
// };

// const WorldCloudGender = (props) => {
//   const values = props.data.map((word) => word.value);
//   const minValue = Math.min(...values);
//   const maxValue = Math.max(...values);

//   const words = props.data.map((word) => ({
//     ...word,
//     color: getColorForValue(word.value, minValue, maxValue),
//   }));
//   const options = {
//     rotations: 0,
//     rotationAngles: [0, 90],
//     scale: "sqrt",
//     spiral: "rectangular",
//     enableTooltip: false,
//     deterministic: true,
//     fontSizes: [10, 60],
//   };

//   return (
//     <div>
//       <img src="./assets/wordcloud_male.png" alt="Male Word Cloud" />
//       <img src="./assets/wordcloud_female.png" alt="Female Word Cloud" />
//       <div style={{ width: "1130px", height: "568px" }}>
//         <WordCloud words={words} options={options} />
//       </div>
//     </div>
//   );
// };

// export default WorldCloudGender;


import React from "react";

const WorldCloudGender = () => {
  return (
    <div>
      <img src="../../assets/wordcloud_male.png" alt="Male Word Cloud" />
      <img src="../../assets/wordcloud_female.png" alt="Female Word Cloud" />
        <div style={{ width: "1130px", height: "568px" }}>
          <WordCloud words={words} options={options} />
        </div>
    </div>
  );
};

export default WorldCloudGender;
