import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Portrait from '../assets/images/RTPortrait.png';

const Splash = () => {
  return (
    <Row className='section'>
        <Col xxl={6} xl={6} lg={6}>
            <Container>
                <h1>Welcome to my site!</h1>
            </Container>
        </Col>
        <Col xxl={6} xl={6} lg={6}>
            <Container id='portrait-outline'>
                <Image id='portrait' fluid={true} src={Portrait} />
            </Container>
        </Col>
    </Row>
  )
}

export default Splash