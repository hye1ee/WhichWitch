import styled from "styled-components";
import Logo from "../components/Logo";

const Footer = () => {
  return (
    <FooterWrapper>
      <div style={{ lineHeight: 1.6 }}>
        {
          "2024년 1분기를 위해 위치위치가 준비한 인사이트가 도착했어요! 💌\n다가오는 이번 분기에는 어떤 바디케어 💪 트렌드가 몰아칠까요?\n위치위치의 1분기 which에 주목해주세요!"
        }
      </div>
      {/* <NameWrapper>{"윤서진\n이혜원\n정선우\n정여현"}</NameWrapper> */}
      <Logo size={60} />
    </FooterWrapper>
  );
};
export default Footer;

const FooterWrapper = styled.div`
  width: 100%;
  height: fit-content;

  box-sizing: border-box;
  padding: 100px 0 200px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;

  background-color: #fafafa;
`;

const NameWrapper = styled.div`
  font-size: 20px;
  line-height: 2;
`;
