import styled from "styled-components";
import Logo from "../components/Logo";

const Header = () => {
  console.log(window.innerWidth, window.outerWidth);
  return (
    <HeaderWrapper>
      <HeaderText>2024년 1분기</HeaderText>
      <Logo size={window.innerWidth < 800 ? 80 : 120} />
      {/* <HeaderNumber>24-1</HeaderNumber> */}
      {/* <div
        style={{
          height: "1px",
          backgroundColor: "gray",
          width: "80%",
          maxWidth: "1000px",
        }}
      /> */}
      <div style={{ lineHeight: 1.6, maxWidth: "80%" }}>
        {
          "2024년 1분기를 위해 위치위치가 준비한 인사이트가 도착했어요! 💌\n다가오는 이번 분기에는 어떤 바디케어 💪 트렌드가 몰아칠까요?\n위치위치의 1분기 which에 주목해주세요!"
        }
      </div>
    </HeaderWrapper>
  );
};
export default Header;

const HeaderWrapper = styled.div`
  width: 100%;
  height: fit-content;

  box-sizing: border-box;
  padding: 200px 0;

  display: flex;
  flex-direction: column;

  gap: 30px;
  align-items: center;

  background-color: #fafafa;
`;

const HeaderNumber = styled.div`
  position: absolute;
  right: 50%;
  transform: translate(calc(50% + 210px), 0) rotate(-15deg);
  top: 350px;
  opacity: 80%;

  box-sizing: border-box;
  border-radius: 500px;
  border: 3px solid white;

  padding: 0px 20px;
  padding-bottom: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: black;

  font-family: "Gord";
  font-size: 40px;
  color: white;
`;

const HeaderText = styled.div`
  position: absolute;
  left: 40px;
  top: 30px;
  font-size: 13px;
`;
