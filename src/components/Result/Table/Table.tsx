import styled from "styled-components";
import TableHeader from "./TableHeader";
import TableContents from "./TableContents";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 48px;
  overflow-y: scroll;
  height: 50vh;
`;

const Table = ({ data }: { data: [][] }) => {
  return (
    <Container>
      <TableHeader />
      <TableContents userData={data} />
    </Container>
  );
};
export default Table;
