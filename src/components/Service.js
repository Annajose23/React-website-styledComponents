import styled from "styled-components";
import woman from "../img/woman.png";
import Card from "./Card";

function Service() {
    return (
       <Container>
           <Left>
            <Image src={woman}></Image>
           </Left>
           <Right>
            <Wrapper>
            <Title>
                Simple process to start
            </Title>
            <Description>
                We provide digital experience services to startups and small business and looking for a partner of their digital media, design & development
            </Description>
            <CardContainer>
                <Card/>
                <Card/>
                <Card/>
            </CardContainer>
            </Wrapper>
           </Right>
       </Container>
    )
}

const Container = styled.div`
display: flex;
`;

const Left  = styled.div`
width:50%;
`

const Image = styled.img`
height: 100%;
margin-left: 100px;
`

const Right = styled.div`
width:50%;
`

const Wrapper  =styled.div`
padding: 50px;
display: flex;
flex-direction: column;
`

const Title = styled.h1`

`
const Description = styled.span`
margin-top:20px;
font-size:20px;
color:#555;
`
const CardContainer = styled.div`
display:flex;
justify-content:space-between;
margin-top:50px;
`

const Button = styled.button``;

export default Service
