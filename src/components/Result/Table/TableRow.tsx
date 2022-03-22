import styled from "styled-components";
import { UserData } from "../../../model/user";

const Container = styled.div`
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
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
interface TableRowProps {
  rowData: UserData;
}

const TableRow = ({ rowData }: TableRowProps) => {
  let [name, foxTrot, golf] = rowData;
  let foxPrecise = foxTrot.toPrecision(5);
  let golfPrecise = golf.toPrecision(5);

  return (
    <Container>
      <Content>{name}</Content>
      <Content>{foxPrecise}</Content>
      <Content>{golfPrecise}</Content>
    </Container>
  );
};

export default TableRow;
