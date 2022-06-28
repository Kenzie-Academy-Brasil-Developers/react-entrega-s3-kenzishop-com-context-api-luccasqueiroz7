import { toast } from "react-toastify";
import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const removeCart = (product) => {
    toast.error(`${product.name} removida do carrinho`);
    const filtredProducts = cart.filter((prod) => prod !== product);
    localStorage.setItem(
      "@kenzieShop/productsCart",
      JSON.stringify(filtredProducts)
    );
    setCart(filtredProducts);
  };

  const addCart = (product) => {
    const validationProduct = cart?.find((prod) => prod.name === product.name);

    const cartProducts = [...cart, product];

    if (validationProduct === undefined) {
      localStorage.setItem(
        "@kenzieShop/productsCart",
        JSON.stringify(cartProducts)
      );
      setCart(cartProducts);
      toast.success(`${product.name} adicionada com sucesso`);
    } else {
      toast.error(`${product.name} já está adicionada ao carrinho`);
    }
  };

  const cleanCart = () => {
    const namesCart = cart.map((elem) => elem.name).join(", 1 ");
    if (cart.length > 0) {
      toast.success(`Pedido finalizado com: 1 ${namesCart}.`);
    } else {
      toast.error("Não existem itens no carrinho");
    }
    localStorage.removeItem("@kenzieShop/productsCart");
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addCart, removeCart, cleanCart }}>
      {children}
    </CartContext.Provider>
  );
};
