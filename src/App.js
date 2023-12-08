import { useEffect, useState } from "react";
import styled from "styled-components";
import Trends from "./pages/Trends";
import NewTopic from "./pages/NewTopic";
import Keywords from "./pages/Keywords";
import Gender from "./pages/Gender";
import Ratio from "./pages/Ratio";
import Stream from "./pages/Stream";
import Footer from "./pages/Footer";
import Header from "./pages/Header";

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

  const getColor = (val) => {
    // return "rgb(255,255,255)";

    if (val > 300) return "rgb(255,255,255)";
    else {
      return "rgb(255,255,255)";
    }
  };

  return (
    <AppWrapper color={getColor(scroll)}>
      <Header />
      <Trends />
      <NewTopic />
      <Keywords />

      <Gender />
      <Ratio />
      <Stream />
      <Footer />
    </AppWrapper>
  );
};

export default App;
const AppWrapper = styled.div`
  width: 100%;
  height: fit-content;

  background-color: ${(props) => props.color};

  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  gap: 50px;
  overflow: auto;
  overflow-x: hidden;
`;
