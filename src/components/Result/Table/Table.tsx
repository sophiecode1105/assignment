import styled from "styled-components";
import TableHeader from "./TableHeader";
import TableContents from "./TableContents";
import { UserDataList } from "../../../model/user";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 48px;
  overflow-y: scroll;
  height: 50vh;
`;

interface TableProps {
  data: UserDataList;
}

const Table = ({ data }: TableProps) => {
  return (
    <Container>
      <TableHeader />
      <TableContents userData={data} />
    </Container>
  );
};
export default Table;
