import React from "react";
import styles from "../styles/secondary/AnotherPage.module.scss";
import { AiOutlineInstagram } from "react-icons/ai";
import { SlSocialFacebook } from "react-icons/sl";
import OurAppComponent from "../components/OurApp";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCreative, Autoplay } from "swiper";
import "swiper/css";
import Image from "next/image";
import ButtonLinkDownload from "../components/Button/ButtonLinkDownload";
import { MdOutlineRecommend, MdPlace } from "react-icons/md";
import Footer from "../components/Footer";

const secondar = () => {
  return (
    <>
      <div className={styles.gridContainer}>
        <div className={styles.aside}>
          <div className={styles.headAside}>
            <h1>miPata</h1>
            <div className={styles.imageLogo}>
              <Image
                src="/images/logo-blanco.png"
                alt="Logo de Mi pata"
                width={50}
                height={50}
              />
            </div>
          </div>
          <div className={styles.title}>
            <h1 className={styles.titleText}>
              La comunidad más grande de mascotas y quienes los amamos.
            </h1>
            <div className={styles.buttonSocials}>
              <div className={styles.textWhite}>
                <AiOutlineInstagram />
                <p>Instagram</p>
              </div>
              <div className={styles.textWhite}>
                <SlSocialFacebook />
                <p>Facebook</p>
              </div>
            </div>
          </div>
          <div className={styles.gridItem}>
            <Swiper
              effect={"creative"}
              grabCursor={true}
              style={{ width: 250 }}
              slidePrevClass={"2"}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              creativeEffect={{
                prev: {
                  shadow: true,
                  translate: [0, 0, -400],
                },
                next: {
                  translate: ["100%", 0, 0],
                },
              }}
              modules={[Autoplay, EffectCreative, Pagination]}
              // autoplay={{ disableOnInteraction: true }}
              pagination={true}
              // modules={[EffectCube, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className={styles.imageContainer}>
                  <Image
                    src="/images/pets/home.png"
                    alt="Logo de Mi pata"
                    width={250}
                    height={500}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.imageContainer}>
                  <Image
                    src="/images/pets/recoc_facial.png"
                    alt="Logo de Mi pata"
                    width={250}
                    height={500}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.imageContainer}>
                  <Image
                    src="/images/pets/adopcion.png"
                    alt="Logo de Mi pata"
                    width={250}
                    height={500}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.imageContainer}>
                  <Image
                    src="/images/pets/ciudad.png"
                    alt="Logo de Mi pata"
                    width={250}
                    height={500}
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className={styles.banner}>
          <div className={styles.subMenu}>
            <nav>
              <ul>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </nav>
          </div>
          <div className={styles.hero}>
            <div className={styles.imageWithForms}>
              <Image
                src="/images/pets/hero1.png"
                alt="Logo de Mi pata"
                width={150}
                height={500}
              />
            </div>
            <div className={styles.text}>
              <p>
                <span>
                  Ayudemos a encontrar su regreso a casa o encontrar una nueva{" "}
                </span>
                si nunca tuvo una. Además, <span>administra</span> a tu mascota
                , encuentra los mejores <span> lugares pet friendly</span> y
                mucho más.
              </p>
              <div className={styles.buttonGrid}>
                <ButtonLinkDownload url="" platform="ios" title="App Store" />
                <ButtonLinkDownload
                  url=""
                  platform="android"
                  title="Google Play"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.services}>
          {/* <div className={styles.titleContent}>
          <h3 style={{ textAlign: "center" }}>
            ¡Nuestra aplicación móvil tiene todo lo que necesitas!
          </h3>
        </div> */}
          <div className={styles.imageContainerServices}>
            <div className={styles.image}>
              <Image
                src="/images/pets/reconocimiento.jpeg"
                width={150}
                height={150}
                alt="Logo de Mi pata"
              />
            </div>
          </div>
          <div className={styles.swipperServices}>
            <Swiper
              effect={"creative"}
              grabCursor={true}
              style={{ width: 350 }}
              slidePrevClass={"2"}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              creativeEffect={{
                prev: {
                  shadow: true,
                  translate: [0, 0, -400],
                },
                next: {
                  translate: ["100%", 0, 0],
                },
              }}
              modules={[Autoplay, EffectCreative, Pagination]}
              // autoplay={{ disableOnInteraction: true }}
              pagination={true}
              // modules={[EffectCube, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className={styles.serviceItem}>
                  <div
                    className={`${styles.serviceItem} animate__animated  animate__bounceInLeft`}
                  >
                    <div className={styles.content}>
                      <div className={styles.boxIcon}>
                        <i className="icon-pets"></i>
                      </div>
                    </div>
                    <div className={styles.infoServices}>
                      <h4>¡Reconocimiento facial!</h4>
                      <p>
                        {" "}
                        Si se pierde te ayudaremos a recuperarla (mediante
                        tecnología QR y reconocimiento facial) avisando a todos
                        los usuarios e instituciones relacionadas…
                      </p>
                      <p>
                        Colaboración con <strong>Globant</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.servicesItem}>
                  <div
                    className={`${styles.serviceItem} animate__animated  animate__fadeInRight `}
                  >
                    <div className={styles.content}>
                      <div className={styles.boxIcon}>
                        <i className="icon-logo"></i>
                      </div>
                    </div>
                    <div className={styles.infoServices}>
                      <h4>Adopción de mascotas</h4>
                      <p>Adopta una mascota de manera responsable</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className={`${styles.serviceItem} animate__animated  animate__bounceInLeft`}
                >
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
                        salud, baños, vacunas, alimentación, eventos y muchos
                        tips más.
                      </span>
                    </p>
                  </div>
                </div>
              </SwiperSlide>{" "}
              <SwiperSlide>
                <div
                  className={`${styles.serviceItem} animate__animated   animate__fadeInRight`}
                >
                  <div className={styles.content}>
                    <div className={styles.boxIcon}>
                      <MdPlace />
                    </div>
                  </div>
                  <div className={styles.infoServices}>
                    <h4>¡Lugares PetFriendly!</h4>
                    <span>
                      {" "}
                      Encuentra los mejores lugares para visitar o pasear con
                      ell@s y mucho más...
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default secondar;
