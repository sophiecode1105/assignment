import styled from "styled-components";

const Container = styled.div`
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  justify-content: space-around;
  align-items: center;
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
  rowData: number[];
}

const SubTableRow = ({ rowData }: SubTableRowProps) => {
  let id = rowData[0];
  let foxPrecise = rowData[1].toPrecision(5);
  let golfPrecise = rowData[2].toPrecision(5);

  return (
    <Container>
      <Content>{id}</Content>
      <Content>{foxPrecise}</Content>
      <Content>{golfPrecise}</Content>
    </Container>
  );
};
export default SubTableRow;
