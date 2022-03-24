import styled from "styled-components";
import { FOX, GOLF } from "../../../../model/constants";
import SubTableCheckAllAndClear from "./SubTableCheckAllAndClear";
import SubTableCheckAndDelete from "./SubTableCheckAllAndClear";
import SubTableContent from "./SubTableContent";
import SubTableHeader from "./SubTableHeader";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1%;
`;

interface SubTableProps {
  userId: string;
}

const SubTable = ({ userId }: SubTableProps) => {
  let columnDetails = [
    { name: "id", sortKey: 0 },
    { name: "Foxtrot", sortKey: FOX },
    { name: "Golf", sortKey: GOLF },
  ];

  return (
    <Container>
      <SubTableCheckAllAndClear userId={userId} />
      <SubTableHeader userId={userId} columDetails={columnDetails} />
      <SubTableContent userId={userId} />
    </Container>
  );
};

export default SubTable;
