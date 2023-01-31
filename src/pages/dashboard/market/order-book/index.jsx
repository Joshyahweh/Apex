import Header from "@/components/Header";
import Menu from "@/components/Menu";
import React from "react";
import MarketSubmenu from "@/components/MarketSubmenu";
import MainScreen from "@/components/mainScreen/MainScreen";
import Footer from "@/components/Footer";

const index = () => {
  return (
    <div>
      <Header />
      <div className="flex">
        <Menu />
        <MarketSubmenu />
        <MainScreen/>
      </div>
      <Footer/>
    </div>
  );
};

export default index;
