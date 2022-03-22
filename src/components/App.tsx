import Routers from "./Routers";
import styled from "styled-components";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";

const Container = styled.div`
  position: relative;
  width: 100vw;
`;

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Navbar />
        <Routers />
      </Container>
    </BrowserRouter>
  );
};

export default App;
