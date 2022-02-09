import { Nav } from "react-bootstrap";

function NavBar() {
  return (
    <div>
      <Nav fill variant="tabs" defaultActiveKey="/home" className="navbar">
        <Nav.Item>
          <Nav.Link href="/home" style={{ color: "white" }}></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/recipes" style={{ color: "white" }}></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="/ingredients"
            style={{ color: "white" }}
          ></Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default NavBar;
