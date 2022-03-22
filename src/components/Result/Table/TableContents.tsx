import styled from "styled-components";
import { UserDataList } from "../../../model/user";
import TableRow from "./TableRow";

const Container = styled.div``;

interface TableContentsProps {
  userData: UserDataList;
}

const TableContents = ({ userData }: TableContentsProps) => {
  return (
    <Container>
      {userData.map((user) => {
        return <TableRow rowData={user} />;
      })}
    </Container>
  );
};

export default TableContents;
