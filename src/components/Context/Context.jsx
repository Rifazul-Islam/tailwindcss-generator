"use client";

import { createContext, useContext, useState } from "react";

const GlobalContext = createContext(null);

export const Context = ({ children }) => {
  const [cardbgColor, setCardbgColor] = useState("#a664e8");
  const [cardTitleColor, setCardTitleColor] = useState("#557edd");
  const [cardContentColor, setCardContentColor] = useState("#e89569");
  const [buttonTextColor, setButtonTextColor] = useState("#212702");
  const [buttonBgColor, setButtonBgColor] = useState("#3F00E7");
  const [rangeValue, setRangeValue] = useState(5);
  const [count, setCount] = useState(0);

  const leftAllState = {
    cardbgColor,
    setCardbgColor,
    cardTitleColor,
    setCardTitleColor,
    cardContentColor,
    setCardContentColor,
    buttonTextColor,
    setButtonTextColor,
    buttonBgColor,
    setButtonBgColor,
    rangeValue,
    setRangeValue,
    count,
    setCount,
  };

  return (
    <GlobalContext.Provider value={leftAllState}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
