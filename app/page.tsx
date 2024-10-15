import HeaderHero from "@/components/Hero/HeaderHero";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

const Home: React.FC = () => {
  return (
    <div id="home">
      <Navbar />
      <HeaderHero />
      {/* Komponen lainnya bisa ditambahkan di sini */}
      {/* <HeaderHero />
      <Services />
      <Teams />
      <AboutUs />
      <ContactSection />
      <Footer /> */}
    </div>
  );
};

export default Home;
