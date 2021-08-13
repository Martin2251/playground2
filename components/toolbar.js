import { useRouter } from "next/router";
import styles from "../styles/Toolbar.module.css";

export const Toolbar = () => {
  const router = useRouter();

  return (
    <div className={styles.main}>
      <div onClick={() => router.push("/")}>Home</div>
      <div onClick={() => router.push("/cheese")}>Cheese</div>
      <div onClick={() => router.push("/wine")}>Wine</div>
      <div onClick={() => router.push("/beer")}>Beer</div>
    </div>
  );
};
