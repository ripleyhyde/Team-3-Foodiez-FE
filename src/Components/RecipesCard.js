import { Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

function RecipesCard({ recipes }) {
  //   console.log(recipes);

  const ingredientsList = recipes.ingredients.map((ingredients) => (
    <ListGroup.Item>{ingredients}</ListGroup.Item>
  ));

  //   console.log(recipes.ingredients);

  return (
    <div>
      <Card className="cardClass my-4 p-3 rounded h-60 text-center">
        <Link to="/">
          <Card.Img
            className="card-image"
            style={{ objectFit: "contain" }}
            variant="top"
            src={recipes.image}
          />
        </Link>
        <Card.Body>
          <Card.Title>{recipes.name}</Card.Title>
          <Card.Text>Owner: {recipes.owner}</Card.Text>
          <Card.Text>Description: {recipes.description}</Card.Text>
          <div>Ingredients: {ingredientsList}</div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default RecipesCard;
