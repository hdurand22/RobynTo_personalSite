import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <Row className='section'>
        <Col xxl={6} xl={6} lg={6}>
            <h2>About Me</h2>
            <Container>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames vitae cras sit habitasse aliquet. Massa, odio quisque interdum cras. Eget volutpat eleifend enim dignissim pellentesque amet, a. Penatibus sed nisi neque rutrum suscipit amet tortor, sodales amet.</p>
            </Container>
        </Col>
        <Col xxl={6} xl={6} lg={6}>
            
        </Col>

    </Row>
  )
}

export default About