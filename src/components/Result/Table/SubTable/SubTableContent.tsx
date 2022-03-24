import { useSelector } from "react-redux";
import styled from "styled-components";
import { UserSubDataList } from "../../../../model/user";
import { RootState } from "../../../../state/store/store";
import SubTableRow from "./SubTableRow";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

interface SubTableContentProps {
  userName: string;
}

const SubTableContent = ({ userName }: SubTableContentProps) => {
  const subList: UserSubDataList = useSelector(
    (state: RootState) => state.userData.value.filter((userData) => userData.data[0] === userName)[0].subDataList
  );
  return (
    <Container>
      {subList.map((subData) => (
        <SubTableRow userName={userName} rowData={subData.data} clicked={subData.clicked} />
      ))}
    </Container>
  );
};
export default SubTableContent;
