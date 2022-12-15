import Image from "next/image";
import React from "react";
import styles from "../../styles/LoadingMiPata/LoadingMiPata.module.scss";

const LoadingMiPata = () => {
  return (
    <div className={styles.container}>
      <Image
        alt="Logo de miPata"
        src="/images/logoBlanco.png"
        width={100}
        height={100}
      />
    </div>
  );
};

export default LoadingMiPata;
