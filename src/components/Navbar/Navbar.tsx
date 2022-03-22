import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  /* border: 1px solid black; */
  display: flex;
  align-items: center;
  width: 95%;
  height: 78px;
  margin: 123px auto 0px auto;
  background-color: #fcfefe;
  border-radius: 16px;
  filter: drop-shadow(1px 4px 4px rgba(0, 0, 0, 0.25));
`;

const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60%;
  height: 40px;
`;

const NavTitle = styled.div`
  width: 12.25%;
  text-align: center;
  font-size: 20px;
  font-family: Lato;
  font-weight: 500;
  cursor: pointer;
`;

const ProjectNameWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 1.7%;
  width: 40%;
  height: 40px;
`;

const ProjectName = styled.div`
  color: #0d9991;
  font-weight: 700;
  text-align: center;
`;

const Navbar = () => {
  const navigate = useNavigate();
  const Titles = ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Result"];

  return (
    <Container>
      <TitleWrap>
        {Titles.map((title, idx) => {
          return <NavTitle onClick={() => navigate(`/${title.toLowerCase()}`)}>{title}</NavTitle>;
        })}
      </TitleWrap>
      <ProjectNameWrap>
        <ProjectName>project name</ProjectName>
      </ProjectNameWrap>
    </Container>
  );
};
export default Navbar;
