import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <Link to="/products/p1">Bike</Link>
        </li>
        <li>
          <Link to="/products/p2">Helmet</Link>
        </li>
        <li>
          <Link to="/products/p3">Handlebars</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
