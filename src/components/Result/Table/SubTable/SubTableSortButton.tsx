import styled from "styled-components";
import up from "../../../../assets/Polygon_Up.png";
import down from "../../../../assets/Polygon_Down.png";
import { useAppDispatch } from "../../../../state/store/hook";
import { ASC, DESC, SortKey } from "../../../../model/constants";
import { sortUserDataList, sortUserSubDataList } from "../../../../state/store/userData";

const Container = styled.div`
  margin-left: 10px;
`;

const Button = styled.div`
  user-select: none;
  cursor: pointer;
`;

const ButtonImg = styled.img``;

interface SortButtonProps {
  userId: string;
  sortKey: SortKey;
}

const SubTableSortButton = ({ userId, sortKey }: SortButtonProps) => {
  const dispatch = useAppDispatch();

  return (
    <Container>
      <Button>
        <ButtonImg
          onClick={() => {
            dispatch(sortUserSubDataList({ userId, sort: sortKey, direc: ASC }));
          }}
          draggable={false}
          src={up}
        ></ButtonImg>
      </Button>
      <Button>
        <ButtonImg
          onClick={() => {
            dispatch(sortUserSubDataList({ userId, sort: sortKey, direc: DESC }));
          }}
          draggable={false}
          src={down}
        ></ButtonImg>
      </Button>
    </Container>
  );
};
export default SubTableSortButton;
