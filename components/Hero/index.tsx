import Image from "next/image";
import React from "react";
import styles from "../../styles/Hero/Hero.module.scss";
import ButtonPrimary from "../Button/ButtonWithIcon";
import { GrApple } from "react-icons/gr";

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className="wrapper">
        <div className={styles.hero}>
          <div className={styles.imageContainer}>
            <Image
              src="/images/app.png"
              alt="imagén de la aplicación de miPata"
              width={600}
              height={400}
            />
          </div>
          <div className={styles.infoHero}>
            <h1>La comunidad más grande de mascotas y quienes los amamos.</h1>
            <p>
              <span>
                Ayudemos a encontrar su regreso a casa o encontrar una nueva
              </span>{" "}
              si nunca tuvo una. Además,<span> administra a tu mascota</span> ,
              encuentra los mejores <span>lugares pet friendly</span> y{" "}
              <span> mucho más </span>, <br /> pruebalo gratis:
            </p>
            <div className={styles.buttonSocials}>
              <ButtonPrimary>
                <GrApple />
                <p
                  className={styles.buttonText}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    margin: ".25rem",
                  }}
                >
                  {/* <span>Disponible en el </span> */}
                  <span className={styles.text}>App Store</span>
                </p>
              </ButtonPrimary>
              <ButtonPrimary>
                {/* <AiFillAndroid /> */}
                <Image
                  src="/images/googleplay.png"
                  alt="Logo de apple store"
                  width={20}
                  height={20}
                />
                <p
                  className={styles.buttonText}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    margin: ".25rem",
                  }}
                >
                  <span className={styles.text}>Play Store</span>
                </p>
              </ButtonPrimary>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
