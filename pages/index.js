import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Toolbar } from "../components/toolbar";

export default function Home() {
  return (
    <div>
      <Toolbar></Toolbar>

      <h1>The SHop</h1>
    </div>
  );
}
