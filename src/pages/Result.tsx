import { useEffect, useState } from "react";
import styled from "styled-components";
import Search from "../components/Result/Search/Search";
import Table from "../components/Result/Table/Table";
import { UserData, UserDataList } from "../model/user";
import { useAppDispatch } from "../state/store/hook";
import { updateUserDataList } from "../state/store/userData";
import { getAllResults } from "../utils/api/testapi";
import { v4 as uuidv4 } from "uuid";
import Loading from "../components/Loading/Loading";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  margin: 79px auto 0 auto;
  justify-content: center;
  align-items: center;
`;

const Header = styled.div`
  position: sticky;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 103px;
  border-bottom: 1px solid #0d9991;
`;

const Title = styled.h1`
  flex: 0.5;
  height: 100%;
  margin: 0;
  font-family: Lato;
  font-size: 32px;
  text-align: left;
`;

const LoadingWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 30%;
  margin-top: 20%;
`;

const Result = () => {
  const dispatch = useAppDispatch();
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        let apiData: [string, number, number][] = await getAllResults();
        let userDataList = apiData.map((el) => {
          return {
            id: uuidv4(),
            data: el,
            subDataList: [],
            subDataClicked: [],
            clicked: false,
          } as UserData;
        }) as UserDataList;
        if (userDataList.length) {
          dispatch(updateUserDataList(userDataList));
          setLoaded(true);
        }
      } catch (e) {
        dispatch(updateUserDataList([]));
      }
    })();
  }, []);

  return (
    <Container>
      <Header>
        <Title>Result</Title>
        <Search />
      </Header>
      {loaded ? (
        <Table />
      ) : (
        <LoadingWrap>
          <Loading />
        </LoadingWrap>
      )}
    </Container>
  );
};

export default Result;
