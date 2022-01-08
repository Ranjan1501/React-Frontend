import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Product.css";
import { Button } from "antd";
import "antd/dist/antd.css";

// import { Link } from "react-router-dom";
export const ProductsPage = () => {
  const { id } = useParams();
  const [product, setProductData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const productDetails = () => {
    setIsLoading(true);
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProductData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("error:", err);
      });
  };
  useEffect(() => {
    productDetails();
  }, []);

  return isLoading ? (
    <div>..loading</div>
  ) : (
    <div className="Product">
      <div>
        {<img src={product.image} alt="ProductImage" />}
        <br />
        {`${product.title}`}
        <br />
        {`Price:${product.price}`}
        <br />
        {`Category: ${product.category}`}
        <br />
        <Button>Buy Now </Button>
      </div>
    </div>
  );
};
