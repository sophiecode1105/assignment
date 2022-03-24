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
  userId: string;
}

const SubTableContent = ({ userId }: SubTableContentProps) => {
  const subList: UserSubDataList = useSelector(
    (state: RootState) => state.userData.value.filter((userData) => userData.id === userId)[0].subDataList
  );
  return (
    <Container>
      {subList.map((subData, i) => (
        <SubTableRow key={`str-${i}`} userId={userId} rowData={subData.data} clicked={subData.clicked} />
      ))}
    </Container>
  );
};
export default SubTableContent;
