import { Button } from "antd";
import { Nav } from "react-bootstrap";

function NavBar() {
  return (
    <div>
      <Nav fill variant="tabs" defaultActiveKey="/home" className="navbar">
        <Nav.Item>
          <Nav.Link href="/home" style={{ color: "#DAA520", fontSize: "20px" }}>
            <strong>Home</strong>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="/recipes"
            style={{ color: "#DAA520", fontSize: "20px" }}
          >
            <strong>Recipes</strong>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="/ingredients"
            style={{ color: "#DAA520", fontSize: "20px" }}
          >
            <strong>Ingredients</strong>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="btn">
          <Button>
            <span class="shadow"></span>
            <span class="edge"></span>
            <span class="front text"> Login</span>
          </Button>
          <Button>
            <span class="shadow"></span>
            <span class="edge"></span>
            <span class="front text"> Logout</span>
          </Button>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default NavBar;
