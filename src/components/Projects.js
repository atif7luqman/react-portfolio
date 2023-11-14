import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import img from '../assets/img.png';

function Projects() {
  return (
    <Container className='border mt-5 p-5'>
        <div >
            <h1 className="mb-4">Projects</h1>
            <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. 
                Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. 
                Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
        </div>
      <Row>
        {/* First Column */}
        <Col xs={12} md={6} lg={4}>
          <h2>Project 1</h2>
          <p>This is the content of the first project.</p>
          <Button variant="primary">View Details</Button>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <h2>Project 2</h2>
          <p>This is the content of the second project.</p>
          <Button variant="primary">View Details</Button>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <h2>Project 2</h2>
          <p>This is the content of the second project.</p>
          <Button variant="primary">View Details</Button>
        </Col>
        {/* Add more columns as needed */}
      </Row>
    </Container>
  );
}

export default Projects;
