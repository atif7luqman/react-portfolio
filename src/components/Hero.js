import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import img from '../assets/img.png';

function Hero() {
  return (
    <Container className='border'>
      <Row>
        {/* First Column */}
        <Col xs={12} md={6} className="d-flex align-items-center p-5">
          <div>
            <p>Hello!</p>
            <p><b>I'm a professional Web Designer &</b></p>
            <p><b>WordPress Developer</b></p>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            <Button variant="success" className='p-2 m-2'>Hire me</Button>
            <Button variant="info" className='p-2 m-2'>Download CV</Button>
          </div>
        </Col>

        {/* Second Column */}
        <Col xs={12} md={6}>
          <Image src={img} rounded />
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;
