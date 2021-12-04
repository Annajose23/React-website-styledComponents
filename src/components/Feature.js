import styled from "styled-components";
import phone from "../img/phone.png";
import AnimatedShapes from "./AnimatedShapes";

function Feature() {
  return (
    <Container>
      <Left>
        <Image src={phone}></Image>
      </Left>
      <Right>
        <Title>
          <b>good</b> design
          <br />
          <b>good</b> business
        </Title>
        <SubTitle>We know that good design means good business</SubTitle>
        <Description>
          We help our clients succeed by creating brand identities, digital
          experience, and print material that communicate clearly, achieve
          marketing goals and look fantastic.
        </Description>
        <Description>
          We car e your business and guarentee you to achieve marketing goals
        </Description>
        <Button>Learn More</Button>
      </Right>
      <AnimatedShapes/>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  width: 50%;
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
 
`;

const Title = styled.span`
font-size:70px;
`;

const SubTitle = styled.span`
font-size:24px;
font-style:italic;
color:#333;
margin-top: 30px;
`;

const Description = styled.p`
font-size: 20px;
margin-top: 30px;
color:#777;
`;

const Button = styled.button`
width:150px;
padding:10px 20px;
background-color:darkblue;
color:white;
border:none;
font-size:20px;
border-radius:10px;
margin-top:10px;
cursor: pointer;
`;

const Image = styled.img``;

export default Feature;
