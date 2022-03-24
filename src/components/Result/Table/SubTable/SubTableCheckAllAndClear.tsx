import styled from "styled-components";
import { useAppDispatch } from "../../../../state/store/hook";
import { checkAllSubItem, clearSubItem } from "../../../../state/store/userData";

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

interface SubTableCheckProps {
  userId: string;
}

const SubTableCheckAllAndClear = ({ userId }: SubTableCheckProps) => {
  const dispatch = useAppDispatch();

  return (
    <ButtonWrap>
      <CheckAllButton
        onClick={() => {
          dispatch(checkAllSubItem({ userId }));
        }}
      >
        check all
      </CheckAllButton>
      <ClearButton
        onClick={() => {
          dispatch(clearSubItem({ userId }));
        }}
      >
        clear
      </ClearButton>
    </ButtonWrap>
  );
};
export default SubTableCheckAllAndClear;
