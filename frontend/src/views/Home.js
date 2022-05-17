import React from 'react';
import { Row, Col } from 'react-bootstrap';
import About from '../components/About';
import FeaturedProjects from '../components/FeaturedProjects';
import Resume from '../components/Resume';
import SiteNav from '../components/SiteNav';
import Splash from '../components/Splash';

const Home = () => {
  return (
    <>
    <Row>
      <Col lg={3} xl={3} xxl={2}>
        <SiteNav />
      </Col>
      <Col>
        <Splash id='home'/>
        <FeaturedProjects id='projects' />
        <About id='about'/>
        <Resume id='resume'/>
      </Col>
    </Row>
    </>
  )
}

export default Home