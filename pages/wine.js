import { Container } from "react-bootstrap";
import styled from "styled-components";
import { Toolbar } from "../components/toolbar";
import Link from "next/link";

export const wine = () => {
  return (
    <div>
      <Toolbar></Toolbar>
      <Heading>Wine of the World</Heading>
      <Link href="https://www.laithwaites.co.uk/">
        <Button>click here</Button>
      </Link>
    </div>
  );
};

export default wine;

const Heading = styled.h1`
  font-size: 5em;
  text-align: center;
  color: red;
`;
const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
