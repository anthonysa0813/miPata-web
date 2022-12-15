import { Inter } from "@next/font/google";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import LoadingMiPata from "../components/LoadingComponent/LoadingMiPata";
import OurAppComponent from "../components/OurApp";
import ServicesMiPata from "../components/ServicesMiPata";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [loadingStatus, setLoadingStatus] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoadingStatus(false);
    }, 1250);
  }, []);

  return (
    <>
      <main className="mainContainer">
        {loadingStatus && <LoadingMiPata />}
      </main>
      {!loadingStatus && (
        <>
          <Header />
          <Hero />
          <OurAppComponent />
          <ServicesMiPata />
          <Footer />
        </>
      )}
    </>
  );
}
