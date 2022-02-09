import React from "react";
import { Form, Button } from "react-bootstrap";

function CreateIngModal() {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Ingredient Name</Form.Label>
          <Form.Control type="string" placeholder="What will you add?" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      ;
    </div>
  );
}

export default CreateIngModal;
