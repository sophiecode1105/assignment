import styled from "styled-components";
import TableHeader from "./TableHeader";

const Container = styled.div`
  display: flex;
  width: 100%;
  margin-top: 48px;
`;

const Table = () => {
  return (
    <Container>
      <TableHeader />
    </Container>
  );
};
export default Table;
