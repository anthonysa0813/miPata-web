import Image from "next/image";
import React from "react";
import styles from "../../styles/Hero/Hero.module.scss";
import { AiOutlineInstagram } from "react-icons/ai";
import { SlSocialFacebook } from "react-icons/sl";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Hero = () => {
  return (
    <AnimationOnScroll initiallyVisible>
      <div className={styles.heroContainer}>
        <div className="wrapper">
          <div className={styles.hero}>
            <div className={`${styles.imageContainer} animate__animated `}>
              <Image
                src="/images/app.png"
                alt="imagén de la aplicación de miPata"
                width={600}
                height={400}
              />
            </div>
            <div
              className={`${styles.infoHero} animate__animated  animate__bounceInRight`}
            >
              <h1>La comunidad más grande de mascotas y quienes los amamos.</h1>
              <p>
                <span>
                  Ayudemos a encontrar su regreso a casa o encontrar una nueva
                </span>{" "}
                si nunca tuvo una. Además,<span> administra a tu mascota</span>{" "}
                , encuentra los mejores <span>lugares pet friendly</span> y{" "}
                <span> mucho más. </span>
              </p>
              <div className={styles.buttonSocials}>
                <ul>
                  <li
                    className={`${
                      scrollY ? styles.textOrange : styles.textWhite
                    }`}
                  >
                    <AiOutlineInstagram />
                    <p>Instagram</p>
                  </li>
                  <li
                    className={`${
                      scrollY ? styles.textOrange : styles.textWhite
                    }`}
                  >
                    <SlSocialFacebook />
                    <p>Facebook</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimationOnScroll>
  );
};

export default Hero;
