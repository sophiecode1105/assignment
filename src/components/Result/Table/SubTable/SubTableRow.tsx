import styled from "styled-components";
import { useAppDispatch } from "../../../../state/store/hook";
import { changeSubItemCheck } from "../../../../state/store/userData";

type ClickedProp = {
  clicked: boolean;
};
const Container = styled.div<ClickedProp>`
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => (props.clicked ? "#C4C4C4" : "#fffff")};
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  font-size: 24px;
  font-weight: 700;
  min-height: 90px;
`;

interface SubTableRowProps {
  userId: string;
  clicked: boolean;
  rowData: number[];
}

const SubTableRow = ({ userId, clicked, rowData }: SubTableRowProps) => {
  const dispatch = useAppDispatch();

  let id = rowData[0];
  let foxPrecise = rowData[1].toPrecision(5);
  let golfPrecise = rowData[2].toPrecision(5);

  return (
    <Container
      clicked={clicked}
      onClick={() => {
        dispatch(changeSubItemCheck({ userId, id: id }));
      }}
    >
      <Content>{id}</Content>
      <Content>{foxPrecise}</Content>
      <Content>{golfPrecise}</Content>
    </Container>
  );
};
export default SubTableRow;
