import React from "react";
import styles from "../../styles/ServicesMiPata/ServicesMiPata.module.scss";
import { MdPets, MdOutlineRecommend, MdPlace } from "react-icons/md";

const ServicesMiPata = () => {
  return (
    <div className={styles.services}>
      <div className={styles.serviceItem}>
        <div className={styles.content}>
          <div className={styles.boxIcon}>
            <i className="icon-pets"></i>
          </div>
        </div>
        <div className={styles.infoServices}>
          <h4>¡Reconocimiento facial!</h4>
          <p>
            {" "}
            Si se pierde te ayudaremos a recuperarla (mediante tecnología QR y
            reconocimiento facial) avisando a todos los usuarios e instituciones
            relacionadas…
          </p>
          <p>Colaboración con Globant</p>
        </div>
      </div>
      <div className={styles.serviceItem}>
        <div className={styles.content}>
          <div className={styles.boxIcon}>
            <i className="icon-logo"></i>
          </div>
        </div>
        <div className={styles.infoServices}>
          <h4>Adopción de mascotas</h4>
          <p>Adopta una mascota de manera responsable</p>
        </div>
      </div>{" "}
      <div className={styles.serviceItem}>
        <div className={styles.content}>
          <div className={styles.boxIcon}>
            <MdOutlineRecommend />
          </div>
        </div>
        <div className={styles.infoServices}>
          <h4>¡Comunidad miPata!</h4>
          <p>
            Encuentra las mejores recomendaciones en{" "}
            <span>
              salud, baños, vacunas, alimentación, eventos y muchos tips más.
            </span>
          </p>
        </div>
      </div>{" "}
      <div className={styles.serviceItem}>
        <div className={styles.content}>
          <div className={styles.boxIcon}>
            <MdPlace />
          </div>
        </div>
        <div className={styles.infoServices}>
          <h4>¡Lugares PetFriendly!</h4>
          <span>
            {" "}
            Encuentra los mejores lugares para visitar o pasear con ell@s y
            mucho más...
          </span>
        </div>
      </div>
    </div>
  );
};

export default ServicesMiPata;
