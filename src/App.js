import { useEffect, useState } from "react";
import styled from "styled-components";

const App = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    console.log(scroll);
  }, [scroll]);

  return (
    <AppWrapper>
      <Box />
      <Box />
      <Box />
      <Box />
    </AppWrapper>
  );
};

export default App;
const AppWrapper = styled.div`
  width: 100%;
  height: 5000px;

  box-sizing: border-box;
  padding: 200px 150px;

  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  gap: 50px;
  overflow: auto;
`;

const Box = styled.div`
  width: 100%;
  height: 500px;

  background-color: gray;
`;
