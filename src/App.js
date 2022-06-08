import React from "react";
import { useRecoilValue } from "recoil";
import { pageDisplayState } from "./atoms.js";

import Card from "./components/Card";
import Login from "./components/Login";
import MyOrders from "./components/MyOrders";
import NewOrder from "./components/NewOrder";

const App = () => {
  const page = useRecoilValue(pageDisplayState);

  const pageDisplay = () => {
    switch (page) {
      case 1:
        return <Login />;
      case 2:
        return <MyOrders />;
      case 3:
        return <NewOrder />;
    }
  };
  return <Card>{pageDisplay()}</Card>;
};

export default App;
