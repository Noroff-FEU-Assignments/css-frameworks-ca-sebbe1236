import React, { useState } from "react";

import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

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
            <Carousel.Caption></Carousel.Caption>
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
          <p>
            Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a rutrum justo eros pretium libero.
            Nullam vel enim id mauris eleifend finibus et ac orci. Aliquam metus massa, aliquam quis arcu sit amet,
            consectetur faucibus urna. Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna. Donec
            mi orci, sollicitudin in luctus a, varius eget massa.
          </p>
        </div>
      </Container>
      <Container>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
          <Tab eventKey="home" title="Home">
            <img src="https://i.imgur.com/HPdPog5.png" alt="tv product" />
            <p>
              Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam
              non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum
              mattis rhoncus.{" "}
            </p>
          </Tab>
          <Tab eventKey="profile" title="Profile">
            <p>Test</p>
          </Tab>
          <Tab eventKey="contact" title="Contact"></Tab>
        </Tabs>
      </Container>
    </>
  );
}

export default Homecontent;
