import styled from "styled-components";
import logo from "../../assets/Hits_logo.png";

const Container = styled.div`
  width: 100%;
  height: 100px;
  position: fixed;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  background: #ffffff;
  filter: drop-shadow(0px 1px 4px rgba(21, 34, 50, 0.25));
`;

const Logo = styled.div`
  position: absolute;
  left: 1.04%;
  right: 85.07%;
  top: 14%;
  bottom: 13%;
  width: 30%;
  max-width: 200px;
  height: 73px;
  background-size: cover;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-position: center center;
`;

const Header = () => {
  return (
    <Container>
      <Logo />
    </Container>
  );
};

export default Header;
