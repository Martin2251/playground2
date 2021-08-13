import styles from "../styles/Home.module.css";
import styled from "styled-components";

export const cheese = () => {
  return (
    <div className="page-container">
      <div>
        <Title>Cheese of the World </Title>
      </div>
      <div>
        <h3>Brie</h3>
      </div>
      <div>
        <h3>Cheddar</h3>
      </div>
      <div>
        <h3>Red Lecister</h3>
      </div>
    </div>
  );
};

export default cheese;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
