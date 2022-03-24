import styled from "styled-components";
import FallbackImg from "../assets/404.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Img = styled.img`
  width: 70%;
`;

const Content = styled.h1``;

const SubContent = styled.p`
  word-break: break-all;
  word-wrap: normal;
  font-size: 1.6em;
  white-space: pre-line;
  text-align: center;
  font-weight: bold;
`;

const Fallback = () => {
  return (
    <Container>
      <Img src={FallbackImg} />
      <Content>페이지를 찾을 수 없습니다.</Content>
      <SubContent>
        {"페이지가 존재하지 않거나, 사용할 수 없는 페이지입니다.\n입력하신 주소가 정확한지 다시 한 번 확인해주세요."}
      </SubContent>
    </Container>
  );
};

export default Fallback;
