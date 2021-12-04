import styled, { css } from "styled-components";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Feature from "./components/Feature";
import Service from "./components/Service";

function App() {
  return (
    <>
    <Container> 
      <Navbar/>
      <Intro/>
      <IntroShape/>
    </Container>
    <Container>
      <Feature/>
      <FeatureShape/>
    </Container>
    <Container>
     <Service/>
     <ServiceShape/>
    </Container>
    </>
  );
}

const Container  = styled.div`
height: 100vh;
overflow: hidden;
position: relative;
`;

const Shape = css`
position: absolute;
width: 100%;
height: 100%;
top:0;
z-index:-1;
left:0;
`

const IntroShape = styled.div`
${Shape}
clip-path: polygon(63% 0, 100% 0, 100% 100%, 45% 100%);
background-color: crimson;
`
const FeatureShape = styled.div`
${Shape}
clip-path: polygon(0 0, 44% 0, 26% 100%, 0% 100%);
background-color: pink;
`
const ServiceShape = styled.div`
${Shape}
clip-path: polygon(0 0, 33% 0, 33% 100%, 0% 100%);
background-color: #f88497;
`

export default App;
