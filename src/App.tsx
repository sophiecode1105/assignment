import Routers from "./components/Routers";
import styled from "styled-components";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";

const Container = styled.div`
  position: relative;
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
