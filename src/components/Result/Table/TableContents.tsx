import styled from "styled-components";
import { UserDataList, UserData } from "../../../model/user";
import TableRow from "./TableRow";
import { useSelector } from "react-redux";
import { RootState } from "../../../state/store/store";

const Container = styled.div``;

const TableContents = () => {
  const userData: UserDataList = useSelector((state: RootState) => state.userData.value);

  return (
    <Container>
      {userData.map((user: UserData, i: number) => {
        return <TableRow key={`tbr-${i}`} rowData={user.data} />;
      })}
    </Container>
  );
};

export default TableContents;
