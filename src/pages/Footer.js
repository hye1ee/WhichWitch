import styled from "styled-components";
import Logo from "../components/Logo";

const contents = `
1분기 데이터를 더 깊이 파고들어보니, 사람들이 건강과 다이어트에 정말 관심이 많다는 걸 다시 한 번 확인할 수 있었어요.
샐러드, 단백질과 같은 건강한 식단에 대한 키워드, '웨이트' 트레이닝과 같이
몸매를 가꾸기 위한 운동에 대해 관심도가 엄청나게 높아요.
하지만 놓쳐서는 안 될 것이 바로 '수영'과 '런닝'이에요. 이 두 운동도 점점 더 핫하게 떠오르고 있는 트렌드거든요.
수영과 런닝은 신체 전체를 움직이는 전신 운동이라 건강 관리에 아주 좋아요.


이 시기에 여러분의 채널에서 이런 운동과 관련된 콘텐츠📺 를 많이 만들어보는 건 어떨까요?
예를 들어, 겨울철 실내 수영의 장점, 겨울 실내 수영 필수템, 초보자를 위한 런닝 팁,
또는 다가오는 봄에 맞춰 야외 런닝 코스 등을 소개하는 것도 좋겠죠.
이런 콘텐츠는 새해 결심으로 수영과 런닝을 시작하려는 사람들이 많이 찾을거에요!


그리고 겨울⛄이나 봄🌸에 딱 맞는 샐러드 레시피나 집에서 쉽게 할 수 있는 운동 방법을 소개해보세요.
몸매를 가꾸는 트랜드는 최근 몇년간 꾸준히 상승해 왔고, 2024년에도 상승할 것으로 보여요.
1분기에는 특히 새해 결심으로 건강을 챙기고 몸매를 가꾸려는 분들이 자연스럽게 많이 찾을 것이기 때문에 절대 놓쳐선 안돼요!
최신 트랜드에 발 맞추어 새로운 레시피나 운동 방법을 업데이트 해준다면 더욱 인기를 끌 수 있을거에요.
새로운 트랜드나 제품 리뷰도 잊지 마시고요!


운동을 새로 시작하려는 입문자🔥 분들이 많기 때문에
초심자를 위한 헬스 용품들과 운동복을 소개하면, 새로운 팔로워들을 타깃할 수 있을 거예요.
팔로워들과의 소통도 중요하니, 새해 목표 공유, 건강 챌린지 같은 이벤트를 통해 커뮤니티를 더 활성화시켜보세요.
여러분의 경험, 조언, 팁을 나누면서 팔로워들과 더 깊은 관계를 맺을 수 있을 거예요.


마지막으로, 계절이 바뀔 때마다 사람들의 관심사도 변하니, 계절에 맞춘 콘텐츠를 꾸준히 업데이트하는 것이 좋아요.
꾸준하고 신선한 콘텐츠를 위해 witchwhich🔮가 분기 마다 중요 트랜드를 소개하니까요!
여러분은 구독만 하세요~ 여러분의 채널은 항상 신선하고 매력적으로 유지될 거예요! 
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: "30px" }}>💌</div>
        <div style={{ lineHeight: 1.6, maxWidth: "80%" }}>{contents}</div>
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
  padding: 140px 0 220px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 140px;

  background-color: #fafafa;
`;

const NameWrapper = styled.div`
  font-size: 20px;
  line-height: 2;
`;
