import styled from "styled-components";
import { Toolbar } from "../components/toolbar";
import styles from "../styles/Home.module.css";

export const cheese = () => {
  return (
    <div className="page-container">
      <Toolbar></Toolbar>
      <Heading>Cheese of the World </Heading>
      <div>
        <h3>Brie</h3>
      </div>
      <div>
        <h3>Cheddar</h3>
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
const Red = styled.h3`
  font-size: 2em;
  text-align: center;
  color: red;
`;
