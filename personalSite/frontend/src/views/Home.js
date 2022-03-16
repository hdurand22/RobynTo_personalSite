import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import About from '../components/About';
import FeaturedProjects from '../components/FeaturedProjects';
import Resume from '../components/Resume';
import SiteNav from '../components/SiteNav';
import Splash from '../components/Splash';

const Home = () => {
  return (
    <>
    <Row>
      <Col lg={3} xl={3} xxl={3}>
        <SiteNav />
      </Col>
      <Col>
        <Splash />
        <FeaturedProjects />
        <About />
        <Resume />
      </Col>
    </Row>
    </>
  )
}

export default Home