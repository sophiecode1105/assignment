import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../../state/store/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch } from "../../../state/store/hook";
import { changeSubItemCheck } from "../../../state/store/userData";

const Container = styled.div`
  width: 100%;
  margin-top: 1%;
`;

const ItemContainer = styled.div`
  background-color: #9ed6d3;
`;
const ItemKey = styled.div`
  display: flex;
  font-size: 24px;
  font-weight: 700;
  padding: 1%;
  min-width: 100px;
  align-items: center;
  justify-content: flex-start;
`;

const Item = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const IconWrap = styled.div`
  display: flex;
  margin: 0 5%;
  font-size: 1.5em;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;

const Print = () => {
  const dispatch = useAppDispatch();

  const checkedDataByName: { userId: string; name: string; clicked: number[] }[] = useSelector((state: RootState) =>
    state.userData.value.map((userData) => {
      return {
        userId: userData.id,
        name: userData.data[0],
        clicked: userData.subDataClicked,
      };
    })
  );
  return (
    <Container>
      {checkedDataByName.map((el, i) => {
        return (
          <ItemContainer key={`p-${i}`}>
            {el.clicked.map((il, j) => (
              <Item key={`p-i-${i}-${j}`}>
                <ItemKey>{`${el.name}-${il}`}</ItemKey>
                <IconWrap
                  onClick={() => {
                    dispatch(changeSubItemCheck({ userId: el.userId, id: il }));
                  }}
                >
                  <FontAwesomeIcon icon={faXmark} />
                </IconWrap>
              </Item>
            ))}
          </ItemContainer>
        );
      })}
    </Container>
  );
};
export default Print;
