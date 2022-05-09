import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Portrait from '../assets/images/RTPortrait.png';

const Splash = () => {
  return (
    <Row className='section' id='home'>
        <Col xxl={4} xl={4} lg={4}>
            <Container>
                <h1>Welcome to my site!</h1>
            </Container>
        </Col>
        <Col xxl={8} xl={8} lg={8}>
            <Container id='portrait-outline'>
                <Image id='portrait' fluid={true} src={Portrait} />
            </Container>
        </Col>
    </Row>
  )
}

export default Splash