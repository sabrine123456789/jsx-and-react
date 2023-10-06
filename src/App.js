import logo from "./logo.svg";
import "./App.css";

import React from "react";
import Name from "./compnents/name";
import Price from "./compnents/price";
import Description from "./compnents/description";
import ImageUrl from "./compnents/imageUrl";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import product from "./product";

function App() {
  const firstName = "Sabrine ";
  return (
    <div className="App">
      <Card style={{ width: "18rem" }}>
        <Card.Img />

        <p>{`Hello, ${firstName ? firstName : "there"}!`}</p>
        {firstName && <img src={product.ImageUrl} alt="Product" />}
        <Card.Body>
          <Name />
          <Price />
          <Description />
          <ImageUrl />

          <Button variant="primary">More details </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
