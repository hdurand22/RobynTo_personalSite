import React from 'react';
import Scrollspy from 'react-scrollspy';
import { Navbar, Nav } from 'react-bootstrap';
import BrandImage from '../assets/images/mochi-crunch1.png';


const SiteNav = () => {
    return (
        <Navbar id='sitenav'>
                <Navbar.Brand href="#">
                    <img
                        src={BrandImage}
                        width="55px"
                        height="55px"
                        className="d-inline-block align-top"
                        alt="Galactic Snackers Title"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Nav variant='pills' defaultActiveKey='#home' className='flex-column' as='ul'>
                    {/* <Scrollspy items={ ['home', 'projects', 'about', 'resume']} currentClassName='isCurrent'> */}
                        <Nav.Item as='li'>
                            <Nav.Link href='#home'>Home</Nav.Link>    
                        </Nav.Item>
                        <Nav.Item as='li'>
                            <Nav.Link href='#projects'>Featured Projects</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as='li'>
                            <Nav.Link href='#about'>About Me</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as='li'>
                            <Nav.Link href='#resume'>Gameography</Nav.Link>
                        </Nav.Item>
                    {/* </Scrollspy> */}
                </Nav> 
        </Navbar>
    )
}

export default SiteNav;