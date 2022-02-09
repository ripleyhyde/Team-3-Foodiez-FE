import React from "react";
import { Button } from "react-bootstrap";

function Buttons() {
  return (
    <div>
      <Button variant="success">Create Category</Button>{" "}
      <Button variant="primary">Add Ingredients</Button>{" "}
      <Button variant="secondary">Recipe Creation, woo!</Button>{" "}
    </div>
  );
}

export default Buttons;
