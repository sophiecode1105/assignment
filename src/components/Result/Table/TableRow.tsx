import styled from "styled-components";
import { UserSubData, UserSubDataList } from "../../../model/user";
import { useAppDispatch } from "../../../state/store/hook";
import { getResultByName } from "../../../utils/api/testapi";
import { updateUserSubDataList, changeClicked } from "../../../state/store/userData";
import SubTable from "./SubTable/SubTable";

const Container = styled.div`
  display: flex;
  /* border-bottom: 1px solid rgba(0, 0, 0, 0.3); */
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContentWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  font-size: 24px;
  font-weight: 700;
  min-height: 90px;
`;

const SubTableWrap = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`;
interface TableRowProps {
  rowData: [string, number, number];
  userId: string;
  called: boolean;
  clicked: boolean;
}

const TableRow = ({ rowData, userId, called, clicked }: TableRowProps) => {
  const dispatch = useAppDispatch();
  const [name, foxTrot, golf] = rowData;

  let foxPrecise = foxTrot.toPrecision(5);
  let golfPrecise = golf.toPrecision(5);

  const getSubData = async () => {
    try {
      if (!called) {
        let subApiData: number[][] = await getResultByName(name);
        let userSubDataList = subApiData.map((el) => {
          return {
            clicked: false,
            data: el,
          } as UserSubData;
        }) as UserSubDataList;
        dispatch(updateUserSubDataList({ userId, sublist: userSubDataList }));
      }
    } catch (e) {
      throw e;
    }
    dispatch(changeClicked(userId));
  };

  return (
    <Container>
      <ContentWrap onClick={getSubData}>
        <Content>{name}</Content>
        <Content>{foxPrecise}</Content>
        <Content>{golfPrecise}</Content>
      </ContentWrap>
      {clicked ? (
        <SubTableWrap>
          <SubTable userId={userId} />
        </SubTableWrap>
      ) : null}
    </Container>
  );
};

export default TableRow;
