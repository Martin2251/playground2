import styled from "styled-components";
import { Toolbar } from "../components/toolbar";
import Image from "next/image";
import styles from "../styles/Beer.module.css";

export const beer = () => {
  return (
    <>
      <Toolbar></Toolbar>
      <Heading>Beer of the World </Heading>
      <section className="products">
        <div className="product-card">
          <div className="product-image">
            <image src="../public/stella.jpg"></image>
          </div>
          <div className="product-info">
            <h5>Stella</h5>
            <h6>£6.00</h6>
          </div>
        </div>
      </section>
    </>
  );
};

export default beer;

const Heading = styled.h1`
  font-size: 5em;
  text-align: center;
  color: red;
`;
