import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const FeaturedProjects = () => {
  return (
    <Row className='section' id='projects'>
        <Col xxl={4} xl={4} lg={4}>
            <h2>Featured Projects</h2>
            <Container>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames vitae cras sit habitasse aliquet. Massa, odio quisque interdum cras. Eget volutpat eleifend enim dignissim pellentesque amet, a. Penatibus sed nisi neque rutrum suscipit amet tortor, sodales amet.</p>
            </Container>
        </Col>
        <Col xxl={8} xl={6} lg={6} id='project-pic'>
                <div id='high-circle'>
                    <div id='low-circle'>
                        <div className='featured-project-image' />
                    </div>
                </div>
        </Col>
    </Row>
  )
}

export default FeaturedProjects