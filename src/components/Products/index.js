import { useContext } from "react";
import "react-toastify/dist/ReactToastify.css";

import { ProductsContext } from "../../contexts/products";
import { CartContext } from "../../contexts/cart";

import "./styles.css";

function Products() {
  const { listProducts } = useContext(ProductsContext);
  const { addCart } = useContext(CartContext);

  return (
    <div className="products">
      <ul>
        {listProducts?.map((product) => (
          <li className="product" key={product.name}>
            <img
              className="productImg"
              src={product.image}
              alt={product.name}
            />
            <h3>{product.name}</h3>
            <p>
              {product.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
            <button onClick={() => addCart(product)}>
              Adicionar ao carrinho
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
