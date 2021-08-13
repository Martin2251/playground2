import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Toolbar } from "../components/toolbar";
import styled from "styled-components";

export default function Home() {
  return (
    <div>
      <Toolbar></Toolbar>
      <MainHeader>The SHop</MainHeader>

      <Section>
        <p>
          Welcome to the local shop we are very posh, we sell high quality
          cheese,wine and Beer
        </p>
      </Section>
    </div>
  );
}

const MainHeader = styled.h1`
  font-size: 5em;
  text-align: center;
  color: red;
`;
const Section = styled.p`
  font-size: 2em;
  text-align: center;
  color: red;
`;
