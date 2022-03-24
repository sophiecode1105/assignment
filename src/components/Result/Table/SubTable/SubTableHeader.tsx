import styled from "styled-components";
import { SortKey } from "../../../../model/constants";
import SubTableSortButton from "./SubTableSortButton";

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

interface SubTableHeaderProps {
  userId: string;
  columDetails: { name: string; sortKey: SortKey }[];
}

const SubTableHeader = ({ userId, columDetails }: SubTableHeaderProps) => {
  return (
    <Container>
      {columDetails.map((c, i) => (
        <Column key={`stc-${i}`}>
          <ColumnName>{c.name}</ColumnName>
          {c.sortKey ? <SubTableSortButton userId={userId} sortKey={c.sortKey} /> : null}
        </Column>
      ))}
    </Container>
  );
};
export default SubTableHeader;
