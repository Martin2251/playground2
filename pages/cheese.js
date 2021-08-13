import styled from "styled-components";
import { Toolbar } from "../components/toolbar";
import styles from "../styles/Home.module.css";

export const cheese = () => {
  return (
    <div className="page-container">
      <Toolbar></Toolbar>
      <Heading>Cheese of the World </Heading>
      <div>
        <Yellow>Brie</Yellow>
      </div>
      <div>
        <Orange>Cheddar</Orange>
      </div>
      <div>
        <Red>Red Lecister</Red>
      </div>
    </div>
  );
};

export default cheese;

const Heading = styled.h1`
  font-size: 5em;
  text-align: center;
  color: red;
`;
const Yellow = styled.h3`
  font-size: 2em;
  text-align: center;
  color: yellow;
`;
const Orange = styled.h3`
  font-size: 2em;
  text-align: center;
  color: orange;
`;
const Red = styled.h3`
  font-size: 2em;
  text-align: center;
  color: red;
`;
