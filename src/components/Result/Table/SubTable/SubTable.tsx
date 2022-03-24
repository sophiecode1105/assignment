import styled from "styled-components";
import { FOX, GOLF } from "../../../../model/constants";
import SubTableContent from "./SubTableContent";
import SubTableHeader from "./SubTableHeader";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 48px;
`;

interface SubTableProps {
  userName: string;
}

const SubTable = ({ userName }: SubTableProps) => {
  let columnDetails = [
    { name: "id", sortKey: 0 },
    { name: "Foxtrot", sortKey: FOX },
    { name: "Golf", sortKey: GOLF },
  ];

  return (
    <Container>
      <SubTableHeader userName={userName} columDetails={columnDetails} />
      <SubTableContent userName={userName} />
    </Container>
  );
};

export default SubTable;
