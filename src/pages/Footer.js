import styled from "styled-components";
import Logo from "../components/Logo";

const Footer = () => {
  return (
    <FooterWrapper>
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
  padding: 200px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  background-color: #fafafa;
`;

const NameWrapper = styled.div`
  font-size: 20px;
  line-height: 2;
`;
