import styled from "styled-components";
import up from "../../assets/Polygon_Up.png";
import down from "../../assets/Polygon_Down.png";

const Container = styled.div`
  margin-left: 10px;
`;

const Button = styled.div`
  user-select: none;
  cursor: pointer;
`;

const ButtonImg = styled.img``;

const SortButton = () => {
  return (
    <Container>
      <Button>
        <ButtonImg draggable={false} src={up}></ButtonImg>
      </Button>
      <Button>
        <ButtonImg draggable={false} src={down}></ButtonImg>
      </Button>
    </Container>
  );
};

export default SortButton;
