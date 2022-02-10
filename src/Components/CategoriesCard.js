import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function CategoriesCard({ categories }) {
  return (
    <div>
      <Card className="cardClass2 my-4 p-3 rounded h-60 text-center">
        <Link to={"/recipes"}>
          <Card.Img
            className="cardImage"
            variant="top"
            src={categories.image}
          />
        </Link>
        <Card.Body>
          <Card.Title>{categories.name}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CategoriesCard;
