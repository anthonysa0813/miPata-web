import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCreative, Autoplay } from "swiper";
import "swiper/css";
import styles from "../../styles/OurApp/OurApp.module.scss";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import Image from "next/image";
import ButtonPrimary from "../Button/ButtonWithIcon";
import { GrApple } from "react-icons/gr";

const OurAppComponent = () => {
  return (
    <div className={styles.OurAppContainer}>
      <div className={styles.textInfo}>
        <h2>Nuestra Aplicación</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
          consequuntur? Facilis velit recusandae illo explicabo ut, ratione a
          ipsam unde labore error vitae nobis eaque quos iure quam magni
          veritatis.
        </p>
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
            <Image
              src="/images/app.png"
              alt="Logo de Mi pata"
              width={250}
              height={500}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/apphome.jpg"
              alt="Logo de Mi pata"
              width={250}
              height={500}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/apphome_store.jpg"
              alt="Logo de Mi pata"
              width={250}
              height={500}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/appMap.jpg"
              alt="Logo de Mi pata"
              width={250}
              height={500}
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={styles.socialButtons}>
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
  );
};

export default OurAppComponent;
