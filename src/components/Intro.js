import styled from "styled-components";
import IntroImage from "../img/woman.png";
import AnimatedShapes from "./AnimatedShapes";

function Intro() {
    return (
        <Container>
            <Left>
            <Title>
                Adventures in creative age
            </Title>
            <Description>
                We believe in designing the products and services in close partnership with our clients
                is the only way to have real impact on thier business
            </Description>
            <Info>
        <Button>
            Start A Project
        </Button>
        <Contact>
            <ContactTitle> Call us (647) 562 2143</ContactTitle>
            <ContactDesc>For any questions or concerns</ContactDesc>

        </Contact>
            </Info>
            </Left>
            <Right>
            <Image src={IntroImage}>
            </Image>
            </Right>
            <AnimatedShapes/>
        </Container>
    )
}

const Container = styled.div`
height:calc(100% - 50px);
display:flex;
`;

const Left = styled.div`
width:60%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const Title = styled.h1`
width:60%;
font-size:50px;
font-weight:bold;
`;

const Description = styled.p`
width: 60%;
font-size: 20px;
margin-top: 20px;
`;

const Info = styled.div`
width:60%;
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 50px;
`;

const Button = styled.button`
background: darkblue;
color: white;
border-radius: 10px;
border:none;
letter-spacing: 2px;
padding: 15px;
font-weight: bold;
`;

const Contact = styled.div`
display: flex;
flex-direction: column;
`;

const ContactTitle = styled.span`
color:crimson;
font-weight: bold;
`;

const ContactDesc = styled.span`
color: gray;
font-size: 14px;
margin-top: 5px;
`

const Right = styled.div`
width:40%;
`;

const Image = styled.img`
width:100%;
`;

export default Intro
