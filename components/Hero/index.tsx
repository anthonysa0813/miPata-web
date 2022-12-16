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
              <button>
                <Image
                  src="/images/appstore.png"
                  alt="Logo de apple store"
                  width={100}
                  height={50}
                />
              </button>
              <button>
                <Image
                  src="/images/googleplayButton.png"
                  alt="Logo de apple store"
                  width={100}
                  height={30}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
