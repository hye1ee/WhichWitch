import styled from "styled-components";

const Logo = ({ size }) => {
  return (
    <div
      style={{
        fontFamily: "Gord",
        fontSize: `${size}px`,
        position: "relative",
        lineHeight: 0.8,
      }}
    >
      <div>Witch</div>
      <div
        style={{
          fontFamily: "Blogh",
          fontSize: `${size * 1.3}px`,
          rotate: "15deg",
          position: "absolute",
          left: "calc(95%)",
          bottom: "20%",
        }}
      >
        ?
      </div>
      <div>Which</div>
    </div>
  );
};
export default Logo;
