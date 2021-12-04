import styled from "styled-components";

function Card() {
    return (
        <Container>
        
           <Text>
               Lorem ipsum Lorem ipsum Lorem ipsum Lorem 
           </Text>
        </Container>
    )
}

const Container = styled.div`
width:100px;
padding: 20px;
display: flex;
flex-direction:column;
`;

const Text = styled.span`
`

export default Card
