import styled from "styled-components";
import SortButton from "../SortButton";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 59px;
  border-bottom: 1px solid #000000;
`;

const Column = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const ColumnName = styled.h2`
  font-weight: 700;
  font-size: 24px;
`;

const TableHeader = () => {
  return (
    <Container>
      <Column>
        <ColumnName>Name</ColumnName>
      </Column>
      <Column>
        <ColumnName>Foxtrot</ColumnName>
        <SortButton />
      </Column>
      <Column>
        <ColumnName>Golf</ColumnName>
        <SortButton />
      </Column>
    </Container>
  );
};
export default TableHeader;
