import styled from "styled-components";
import { FOX, GOLF, SortKey } from "../../../model/constants";
import TableSortButton from "./TableSortButton";

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

interface TableHeaderProps {
  columnDetails: { name: string; sortKey: SortKey }[];
}

const TableHeader = ({ columnDetails }: TableHeaderProps) => {
  return (
    <Container>
      {columnDetails.map((c) => (
        <Column>
          <ColumnName>{c.name}</ColumnName>
          {c.sortKey ? <TableSortButton sortKey={c.sortKey} /> : null}
        </Column>
      ))}
    </Container>
  );
};
export default TableHeader;
