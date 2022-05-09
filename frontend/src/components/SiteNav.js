import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import BrandImage from '../assets/images/GalacticSnackersTitle.png';


const SiteNav = () => {
    return (
        <Navbar id='sitenav'>
                <Navbar.Brand href="#">
                    <img
                        src={BrandImage}
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                        alt="Galactic Snackers Title"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Nav variant='pills' defaultActiveKey='#home' className='flex-column' as='ul'>
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
                        <Nav.Link href='#resume'>My Resume</Nav.Link>
                    </Nav.Item>
                </Nav> 
        </Navbar>
    )
}

export default SiteNav;