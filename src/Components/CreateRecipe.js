import React from "react";
import { Form, Button } from "react-bootstrap";

function CreateRecipe() {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Recipe Name</Form.Label>
          <Form.Control
            type="string"
            placeholder="What cuisine type do you want?"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Food Image</Form.Label>
          <Form.Control type="string" placeholder="Image URL" />
        </Form.Group>
        <Form.Select aria-label="Default select example">
          <option>Select Category</option>
          <option value="Japanese">One</option>
          <option value="Italian">Two</option>
          <option value="Chinese">Three</option>
          <option value="Mexican">Three</option>
        </Form.Select>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default CreateRecipe;
