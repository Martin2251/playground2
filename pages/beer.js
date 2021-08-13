import styled from "styled-components";
import { Toolbar } from "../components/toolbar";

export const beer = () => {
  return (
    <div className="page-container">
      <Toolbar></Toolbar>
      <Heading>Beer of the World </Heading>

      <div></div>
    </div>
  );
};

export default beer;

const Heading = styled.h1`
  font-size: 5em;
  text-align: center;
  color: red;
`;
