import styled from "styled-components";

const Title = ({ title, icon, description }) => {
  return (
    <TitleWrapper>
      <HeadTitleWrapper>
        {icon && (
          <img
            src={`assets/${icon}.svg`}
            alt={icon}
            style={{ height: "40px" }}
          />
        )}
        <div style={{ fontFamily: "Leferi-Special", fontSize: "44px" }}>
          {title}
        </div>
      </HeadTitleWrapper>

      {description && <div>{description}</div>}
    </TitleWrapper>
  );
};

export default Title;

const TitleWrapper = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
`;

const HeadTitleWrapper = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  gap: 5px;
  flex-direction: column;
  align-items: center;
`;
