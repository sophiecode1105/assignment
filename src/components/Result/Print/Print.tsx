import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../../state/store/store";

const Container = styled.div`
  width: 100%;
`;

const PrintNameWithIdWrap = styled.div`
  background-color: #9ed6d3;
`;
const PrintNameWithId = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-top: 1%;
  padding: 1%;
`;

const Print = () => {
  const checkedDataByName: { name: string; clicked: number[] }[] = useSelector((state: RootState) =>
    state.userData.value.map((userData) => {
      return {
        name: userData.data[0],
        clicked: userData.clicked,
      };
    })
  );
  return (
    <Container>
      {checkedDataByName.map((el, i) => {
        return (
          <PrintNameWithIdWrap key={`p-${i}`}>
            {el.clicked.map((il, j) => (
              <PrintNameWithId key={`p-i-${i}-${j}`}>{`${el.name}-${il}`}</PrintNameWithId>
            ))}
          </PrintNameWithIdWrap>
        );
      })}
    </Container>
  );
};
export default Print;
