import styled from "styled-components";
import Title from "./Title";

const Layout = (props) => {
  return (
    <LayoutWrapper black={props.black}>
      <Title
        title={props.title}
        icon={props.icon}
        description={props.description}
      />
      {props.children}
    </LayoutWrapper>
  );
};

export default Layout;

const LayoutWrapper = styled.div`
  width: 100%;
  height: fit-content;

  box-sizing: border-box;
  padding: 150px 0px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  background-color: ${(props) => (props.black === true ? "black" : "white")};
  color: ${(props) => (props.black === true ? "white" : "black")};
`;
