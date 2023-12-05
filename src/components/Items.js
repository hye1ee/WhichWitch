import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";

/**
 * props = {
 *  items : ["수영", "헬스용품"]
 *  selected : 2
 *  selectedHandler : (el) => {}
 * }
 */
const Items = (props) => {
  return (
    <ItemsWrapper>
      {props.items.map((el, idx) => (
        <Item
          item={el}
          selected={props.selected === idx}
          onClick={() => props.selectedHandler(idx)}
        />
      ))}
      <div>{props.text}</div>
    </ItemsWrapper>
  );
};
export default Items;

const ItemsWrapper = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  flex-direction: row;

  align-items: flex-end;
  justify-content: center;
`;

const variants = {
  start: {
    rotate: [-5, 0, 5, 0],
    transition: {
      delay: 0,
      repeat: Infinity,
      duration: 0.2,
    },
  },
  reset: {
    rotate: 0,
  },
};

export const Item = (props) => {
  const controls = useAnimation();
  const onHover = () => {
    controls.start("start");
  };
  const stopHover = () => {
    controls.stop();
    controls.set("reset");
  };

  return (
    <ItemWrapper
      animate={controls}
      variants={variants}
      onPointerEnter={onHover}
      onPointerLeave={stopHover}
      onClick={props.onClick}
      selected={props.selected}
    >
      {props.item}
    </ItemWrapper>
  );
};

const ItemWrapper = styled(motion.div)`
  box-sizing: border-box;
  padding: 0px 7px;

  background-color: ${(props) => (props.selected ? "#A24DFF" : "none")};

  cursor: pointer;
  font-size: 19px;
  /* text-decoration: underline 1px; */
  font-weight: 600;

  &:hover {
    font-weight: 800;
    /* text-decoration: underline wavy 1px; */
    opacity: 50%;
  }
`;
