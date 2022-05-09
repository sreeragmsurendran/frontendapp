import { Navbar } from "./components/Navbar";
import styled from 'styled-components'
import { Menu } from "./components/Menu";
import { Content } from "./components/Content";

function App() {
  return (
    <Container >
      <Navbar/>
      <Menu/>
      <Content/>
    </Container>
  );
}
const Container =styled.div`
align-items: center;
justify-content: center;
height: 100vh;

`

export default App;
