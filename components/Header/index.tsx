import React, { useCallback, useEffect, useState } from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { SlSocialFacebook } from "react-icons/sl";
import styles from "../../styles/Header/Header.module.scss";

const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  const onScroll = useCallback((event: any) => {
    const { pageYOffset, scrollY } = window;
    console.log("yOffset", pageYOffset, "scrollY", scrollY);
    setScrollY(window.pageYOffset);
  }, []);

  useEffect(() => {
    //add eventlistener to window
    window.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <header
      className={`${styles.header} ${scrollY ? styles.backgroundWhite : ""}`}
    >
      <div className="wrapper">
        <div className={styles.headerContainer}>
          <h1 className={`${scrollY ? styles.textOrange : styles.textWhite}`}>
            miPata
          </h1>
          <div className={styles.menuSections}>
            <ul>
              <li
                className={`${scrollY ? styles.textOrange : styles.textWhite}`}
              >
                Web App
              </li>
              <li
                className={`${scrollY ? styles.textOrange : styles.textWhite}`}
              >
                About Us
              </li>
            </ul>
          </div>
          <div className={styles.menuSocialsIcons}>
            <ul>
              <li
                className={`${scrollY ? styles.textOrange : styles.textWhite}`}
              >
                <AiOutlineInstagram />
              </li>
              <li
                className={`${scrollY ? styles.textOrange : styles.textWhite}`}
              >
                <SlSocialFacebook />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
