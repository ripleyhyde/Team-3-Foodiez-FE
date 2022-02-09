import React from "react";
import { Form, Button } from "react-bootstrap";

function CreateCat() {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Category Name</Form.Label>
          <Form.Control
            type="string"
            placeholder="What cuisine type do you want?"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Category Image</Form.Label>
          <Form.Control type="string" placeholder="Image URL" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default CreateCat;
