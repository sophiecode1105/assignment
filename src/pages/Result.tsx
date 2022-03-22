import { useEffect, useState } from "react";
import styled from "styled-components";
import Search from "../components/Result/Search";
import Table from "../components/Result/Table/Table";
import { getAllResults, getResultByName, DUMMY_ALL, DUMMY_BY_NAME } from "../utils/api/testapi";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  margin: 79px auto 0 auto;
`;

const Header = styled.div`
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

const Result = () => {
  const [userData, setUserData] = useState<[][]>([]);

  const sortByFoxTrot = () => {};

  const sortByGolf = () => {};

  useEffect(() => {
    (async () => {
      try {
        let userData: [][] = await getAllResults();
        console.log("data is", userData);
        if (userData.length) {
          setUserData(userData);
          // localStorage.setItem("allusers");
        }
      } catch (e) {
        setUserData([]);
      }
    })();
  }, []);
  return (
    <Container>
      <Header>
        <Title>Result</Title>
        <Search />
      </Header>
      <Table data={userData} />
    </Container>
  );
};

export default Result;
