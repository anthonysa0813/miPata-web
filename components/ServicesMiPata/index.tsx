import React from "react";
import styles from "../../styles/ServicesMiPata/ServicesMiPata.module.scss";
import { MdPets, MdOutlineRecommend, MdPlace } from "react-icons/md";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Image from "next/image";

const ServicesMiPata = () => {
  return (
    <AnimationOnScroll initiallyVisible>
      <div className="wrapper">
        <div className={styles.title}>
          <h2>!Nuesta aplicación mobile tiene todo lo que necesitas¡</h2>
        </div>
        <div className={styles.services}>
          <div className={styles.servicesItem}>
            <div className={styles.imageContainer}>
              <Image
                src="/images/icons/gps.png"
                alt="Logo de Mi pata"
                width={150}
                height={150}
              />
            </div>
            <div className={styles.servicesInfo}>
              <h3>Rastrea a tu mascota</h3>
            </div>
          </div>
          <div className={styles.servicesItem}>
            <div className={styles.imageContainer}>
              <Image
                src="/images/icons/recognition-facial.png"
                alt="ícono de reconocimiento facial"
                width={150}
                height={150}
              />
            </div>
            <div className={styles.servicesInfo}>
              <h3>Reconocimiento facial</h3>
            </div>
          </div>{" "}
          <div className={styles.servicesItem}>
            <div className={styles.imageContainer}>
              <Image
                src="/images/icons/community.png"
                alt="ícono de comunidad miPata"
                width={150}
                height={150}
              />
            </div>
            <div className={styles.servicesInfo}>
              <h3>Conéctate con otros dueños</h3>
            </div>
          </div>{" "}
          <div className={styles.servicesItem}>
            <div className={styles.imageContainer}>
              <Image
                src="/images/icons/calendar.png"
                alt="ícono de calendario"
                width={150}
                height={150}
              />
            </div>
            <div className={styles.servicesInfo}>
              <h3>Calendario y recordatorios</h3>
            </div>
          </div>{" "}
          <div className={styles.servicesItem}>
            <div className={styles.imageContainer}>
              <Image
                src="/images/icons/ranking.png"
                alt="ícono de ranking"
                width={150}
                height={150}
              />
            </div>
            <div className={styles.servicesInfo}>
              <h3>Recomendaciones de lugares petfriendly</h3>
            </div>
          </div>
          <div className={styles.servicesItem}>
            <div className={styles.imageContainer}>
              <Image
                src="/images/icons/marketplace.png"
                alt="ícono de marketplaces"
                width={150}
                height={150}
              />
            </div>
            <div className={styles.servicesInfo}>
              <h3>Market place y promociones</h3>
            </div>
          </div>{" "}
        </div>
      </div>
    </AnimationOnScroll>
  );
};

export default ServicesMiPata;
