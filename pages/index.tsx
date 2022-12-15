import { Inter } from "@next/font/google";
import LoadingMiPata from "../components/LoadingComponent/LoadingMiPata";
import styles from "../styles/Home.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className={styles.mainContainer}>
        <LoadingMiPata />
      </main>
    </>
  );
}
