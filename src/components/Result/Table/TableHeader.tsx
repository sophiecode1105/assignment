import styled from "styled-components";
import { FOX, GOLF, SortKey } from "../../../model/constants";
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

interface TableHeaderProps {
  columConfigs: { name: string; sortKey: SortKey }[];
}

const TableHeader = ({ columConfigs }: TableHeaderProps) => {
  return (
    <Container>
      {columConfigs.map((cc) => (
        <Column>
          <ColumnName>{cc.name}</ColumnName>
          {cc.sortKey ? <SortButton sortKey={cc.sortKey} /> : null}
        </Column>
      ))}
    </Container>
  );
};
export default TableHeader;
