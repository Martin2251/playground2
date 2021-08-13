import { Container } from "react-bootstrap";
import styled from "styled-components";

export const wine = () => {
  return (
    <Container>
      <Wrapper>
        <Title> Cheese of the World</Title>
      </Wrapper>
      <div>
        <h3>Brie</h3>
      </div>
      <div>
        <h3>Cheddar</h3>
      </div>
      <div>
        <h3>Red Lecister</h3>
      </div>
    </Container>
  );
};

export default wine;
const Container = styled.div`
  padding-left: 3rem;
  padding-right: 3rem;
  background-color: #219ebc;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
