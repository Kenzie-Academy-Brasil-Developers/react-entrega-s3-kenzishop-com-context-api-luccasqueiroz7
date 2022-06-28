import { useContext } from "react";
import { CartContext } from "../../contexts/cart";

import "./styles.css";

function Cart() {
  const { cart, removeCart, cleanCart } = useContext(CartContext);

  const totalPrice = cart.reduce((acc, value) => {
    return acc + value.price;
  }, 0);

  return (
    <div className="cart">
      <ul>
        {cart?.map((prod) => (
          <li key={prod.name}>
            <img src={prod.image} alt={prod.name} />
            <h3>{prod.name}</h3>
            <div>
              <p>
                {prod.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
              <button onClick={() => removeCart(prod)}>Remover Produto</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="detailsCart">
        <h2>Resumo do pedido</h2>
        <div>
          <p>{cart.length} pedidos</p>
          <p>
            {totalPrice.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </div>
        <button onClick={cleanCart}>FINALIZAR O PEDIDO</button>
      </div>
    </div>
  );
}

export default Cart;
