import { products } from "../../services/api";

import { createContext, useState } from "react";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [listProducts, setListProducts] = useState(products);

  return (
    <ProductsContext.Provider value={{ listProducts, setListProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};
