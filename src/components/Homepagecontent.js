import React, { useState } from "react";

import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Homecontent() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Container fluid>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img className="d-block w-100" src="https://i.imgur.com/UsBfME6.png" alt="First slide" />
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src="https://i.imgur.com/AVTalpU.png" alt="Second slide" />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="https://i.imgur.com/jeKg7ok.png" alt="Third slide" />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
      <Container>
        <div className="Frontpage_article">
          <h1 className="Article_header">We do YAY things</h1>
          <p variant="dark">
            Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a rutrum justo eros pretium libero.
            Nullam vel enim id mauris eleifend finibus et ac orci. Aliquam metus massa, aliquam quis arcu sit amet,
            consectetur faucibus urna. Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna. Donec
            mi orci, sollicitudin in luctus a, varius eget massa.
          </p>
        </div>
        <div className="Tab_container">
          <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
            {" "}
            <Tab eventKey="home" title="Home" md={{ order: 3 }}>
              <Col>
                <div>
                  <img src="https://i.imgur.com/HPdPog5.png" alt="tv product" />
                </div>{" "}
              </Col>
              <Col className="Containertabs_content">
                <p>
                  Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a.
                  Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
                  condimentum mattis rhoncus.
                </p>
                <div className="ml-3 Container_icons">
                  <p className="ml-3 d-md-block">SHARE </p>
                  <p>
                    <svg
                      className="ml-3"
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      class="bi bi-facebook"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                    <svg
                      className="mt-3"
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      class="bi bi-twitter"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                    </svg>
                  </p>
                </div>{" "}
              </Col>
            </Tab>
            <Tab eventKey="profile" title="Profile" md={{ order: 2 }}></Tab>
            <Tab eventKey="contact" title="Contact" md={{ order: 1 }}></Tab>
          </Tabs>
        </div>
      </Container>
    </>
  );
}

export default Homecontent;
