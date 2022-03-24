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

const ButtonWrap = styled.div`
  display: flex;
  width: 20%;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 55px;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  min-width: 150px;
  margin: 6%;

  background-color: #ffffff;
  cursor: pointer;
`;

const CheckAllButton = styled(Button)`
  border: 1px solid #7879f1;
  color: #7879f1;
`;

const ClearButton = styled(Button)`
  border: 1px solid #ff0000;
  color: #ff0000;
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
      <ButtonWrap>
        <CheckAllButton>check all</CheckAllButton>
        <ClearButton>clear</ClearButton>
      </ButtonWrap>
      <SubTableHeader userId={userId} columDetails={columnDetails} />
      <SubTableContent userId={userId} />
    </Container>
  );
};

export default SubTable;
