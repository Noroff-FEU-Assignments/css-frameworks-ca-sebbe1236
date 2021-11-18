import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <>
      <div className="main-footer">
        <Container fluid>
          <Row md={1} xs={1} lg={3}>
            <Col className="text-lg-left text-md-center">1 of 3</Col>
            <Col className="text-lg-center text-md-center">2 of 3</Col>
            <Col className="text-lg-right text-md-center">3 of 3</Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
export default Footer;
