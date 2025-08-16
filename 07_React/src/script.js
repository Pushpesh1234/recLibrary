import { createRoot } from "react-dom/client";
import "./style.css";
import React from "react";

const root = createRoot(document.getElementById("root"));
console.log(root);
// const h1=<h1>hello react componenet again</h1>
function Card({ key, title, image, price, brand }) {
  return (
    <div className="card" key={key}>
      <img src={image}></img>
      <div>
        <h2>{brand}</h2>
        <h3>{title}</h3>
        <p>${price}</p>
      </div>
    </div>
  );
}

fetch("https://dummyjson.com/products")
  .then((response) => response.json())
  .then((data) => {
    root.render(
      <div className="container">
        {data.products.map((product) => {
          return (
            <Card
              title={product.title}
              image={product.thumbnail}
              key={product.id}
              price={product.price}
              brand={product.brand}
            />
          );
        })}
      </div>
    );
  });

// function Card2() {
//   return <h1>From the Card2</h1>;
// }

// root.render({
//   $$typeof: Symbol.for("react.element"),
  // type: "h1",
  // type:Card2,
  // type: Card,
  // ref: null,
  // props: {
  //   title: "IPhone-14",
  //   image:
  //     "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
  //   brand: "Essence",
  //   price: "9.99",
  //   key: 1,
    // Children:"Hello React Component"
//   },
// });

// root.render(
//   <Card
//     key="12"
//     title=""
//     image="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp"
//     price="$9.99"
//   />
// );

// root.render(
//   React.createElement(Card, {
//     key: 1,
//     title: "",
//     image:
//       "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
      // price:$9.99,
//       brand:"Essence"

//   })
// );
