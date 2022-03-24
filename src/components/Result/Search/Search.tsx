import { useEffect, useState } from "react";
import styled from "styled-components";
import { useAppDispatch } from "../../../state/store/hook";
import { updateSearchText } from "../../../state/store/searchData";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 0.45;
`;

const SearchWrap = styled.div`
  display: flex;
  justify-content: cener;
  flex: 0.72;
`;

const SearchBar = styled.input`
  height: 55px;
  flex: 0.72;
  border: 1px solid #7879f1;
  box-sizing: border-box;
  &:focus {
    outline: none;
  }
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
  border: 1px solid #7879f1;
  color: #7879f1;
  background-color: #ffffff;
  cursor: pointer;
`;
const SearchButton = styled(Button)`
  flex: 0.28;
`;

const DownloadButton = styled(Button)`
  flex: 0.24;
`;

const Search = () => {
  const dispatch = useAppDispatch();
  const [textSearch, setTextSearch] = useState<string>("");

  const changeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextSearch(e.target.value);
  };

  useEffect(() => {
    dispatch(updateSearchText({ searchText: textSearch }));
  }, [textSearch]);

  return (
    <Container>
      <SearchWrap>
        <SearchBar type="text" onChange={changeContent} />
        <SearchButton>search</SearchButton>
      </SearchWrap>
      <DownloadButton>download</DownloadButton>
    </Container>
  );
};
export default Search;
