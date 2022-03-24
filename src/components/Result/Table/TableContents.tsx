import styled from "styled-components";
import { UserDataList, UserData } from "../../../model/user";
import TableRow from "./TableRow";
import { useSelector } from "react-redux";
import { RootState } from "../../../state/store/store";

const Container = styled.div``;

const TableContents = () => {
  const userData: UserDataList = useSelector((state: RootState) => state.userData.value);
  const searchText: string = useSelector((state: RootState) => state.searchData.value);

  return (
    <Container>
      {userData.map((user: UserData, i: number) => {
        if (user.data[0].toLowerCase().startsWith(searchText.toLowerCase())) {
          return (
            <TableRow
              key={`tbr-${i}`}
              rowData={user.data}
              userId={user.id}
              called={user.subDataList.length > 0}
              clicked={user.clicked}
            />
          );
        }
      })}
    </Container>
  );
};

export default TableContents;
