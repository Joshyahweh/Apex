import React from "react";
import Categories from "./Categories";
import Stats from "./Stats";
import Tradelog from "./Tradelog";

const MainScreen = () => {
  return (
    <div>
      <Categories />
      <Stats />
      <Tradelog />
    </div>
  );
};

export default MainScreen;
