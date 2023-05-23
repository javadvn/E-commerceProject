import React, { createContext, useState } from "react";

export const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  const addProductToBasket = (product) => {
    setBasket([...basket, product]);
  };

  const removeProductFromBasket = (product) => {
    setBasket(basket.filter((item) => item.id !== product.id));
  };

  const isExist = (product) => {
    return basket.some((item) => item.id === product.id);
  };

  return (
    <BasketContext.Provider
      value={{ basket, addProductToBasket, removeProductFromBasket, isExist }}
    >
      {children}
    </BasketContext.Provider>
  );
};
