import { useSelector } from "react-redux";
import styled from "styled-components";
import { UserDataList } from "../../../model/user";
import { RootState } from "../../../state/store/store";

const Container = styled.div`
  width: 100%;
  border: 1px solid red;
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
          <div key={`p-${i}`}>
            {el.clicked.map((il, j) => (
              <div key={`p-i-${i}-${j}`}>{`${el.name}-${il}`}</div>
            ))}
          </div>
        );
      })}
    </Container>
  );
};
export default Print;
