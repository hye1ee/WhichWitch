import styled from "styled-components";

const Button = (props) => {
  return (
    <ButtonWrapper>
      {props.items.map((el) => (
        <ButtonElement
          selected={el === props.selectedItem}
          onClick={() => props.selectedHandler(el)}
        >
          {el}
        </ButtonElement>
      ))}
    </ButtonWrapper>
  );
};
export default Button;

const ButtonWrapper = styled.div`
  height: fit-content;
  width: fit-content;

  border-radius: 10px;
  overflow: hidden;

  box-sizing: border-box;
  border: 1px solid black;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const ButtonElement = styled.div`
  width: 80px;
  height: 36px;

  font-size: 13px;
  font-weight: 600;

  display: flex;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;

  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    box-shadow: inset 0 0 10px 0 rgb(200, 200, 200);
  }

  background-color: ${(props) => (props.selected ? "black" : "white")};
  color: ${(props) => (props.selected ? "white" : "black")};
`;
