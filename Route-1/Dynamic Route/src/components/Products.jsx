import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Product.css";
import { Button } from "antd";
import "antd/dist/antd.css";
export const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getProducts = () => {
    setIsLoading(true);
    axios
      //   .get("https://reqres.in/api/users")
      .get("https://fakestoreapi.com/products")

      .then((res) => {
        setProducts(res.data);
        console.log("res:", res);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("error:", err);
        setIsLoading(false);
      });
  };
  useEffect(() => {
    getProducts();
  }, []);
  return isLoading ? (
    <div>...loading</div>
  ) : (
    <div className="Product">
      {products.map((product) => (
        <div key={product.id}>
          <Link to={`/products/${product.id}`}>
            {<img src={product.image} alt="productImage" />}
          </Link>
          {`${product.title}`}
          <br />
          {`Price:${product.price}`}
          <br />
          {`Category: ${product.category}`}
          <br />
          <Button>Add to Cart</Button>
        </div>
      ))}
    </div>
  );
};
