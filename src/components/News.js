import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
function News() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1 className="News_header">NEWS</h1>
            <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
              <ButtonGroup className="me-2" aria-label="First group">
                <Button className="Mainbtn_scroll">1</Button> <Button variant="secondary">2</Button>{" "}
                <Button variant="secondary">3</Button> <Button variant="secondary">4</Button>
              </ButtonGroup>{" "}
            </ButtonToolbar>
          </Col>
        </Row>
      </Container>
      <Container className="w-100">
        <Row lg={4} md={1}>
          <Col className="my-2">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="https://i.imgur.com/GCcwMYu.png" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">MORE</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="my-2">
            {" "}
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="https://i.imgur.com/s7kR9j1.png" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">MORE</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="my-2">
            {" "}
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="https://i.imgur.com/U2XtWTd.png" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">MORE</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="my-2">
            {" "}
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="https://i.imgur.com/mn74imT.png" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">MORE</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col className="my-2">
            {" "}
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="https://i.imgur.com/JYuACZk.png" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">MORE</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="my-2">
            {" "}
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="https://i.imgur.com/HyN4MOY.png" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">MORE</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="my-2">
            {" "}
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="https://i.imgur.com/8XbrCqR.png" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">MORE</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="my-2">
            {" "}
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="https://i.imgur.com/xdmOwz1.png" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">MORE</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <ButtonToolbar className="my-4" aria-label="Toolbar with Button groups">
          <ButtonGroup className="me-2" aria-label="First group">
            <Button className="Mainbtn_scroll">1</Button> <Button variant="secondary">2</Button>{" "}
            <Button variant="secondary">3</Button> <Button variant="secondary">4</Button>
          </ButtonGroup>{" "}
        </ButtonToolbar>
      </Container>
    </>
  );
}

export default News;
