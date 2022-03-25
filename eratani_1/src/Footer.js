import React,{Component} from 'react';
import {Figure,Container,Nav,Row,Col,Navbar,Stack} from 'react-bootstrap';
import { FaWhatsapp,FaInstagram,FaTiktok,FaLinkedin,FaYoutube } from 'react-icons/fa';
import {FiGlobe} from 'react-icons/fi';
import {IoIosArrowDropupCircle} from 'react-icons/io';
import { IconContext } from "react-icons";
import logo from './Gmbar/footerLogo.png'
import './footer.css'

class Footer extends Component{
  render(){
    return(
      <div class = 'Footer'>
        <Container>
          <Row>
          <Stack direction="horizontal" gap={3} style ={{position : 'relative',marginTop : '30px'}}>
            <div ></div>
            <div className="black ms-auto">
              <a href="#top" data-smooth-scroll="true" data-aos="fade-up" data-aos-offset="1000" data-aos-mirror="true" data-aos-once="false">
                 <IconContext.Provider value={{ color: "#FFCC00", className: "global-class-name" }}>
                 <IoIosArrowDropupCircle size = '5em' />
                 </IconContext.Provider>
            </a></div>
          </Stack>
            <Col md={3}>
              <Figure style ={{marginRight : '25px'}}>
                <Figure.Image src = {logo} />
                <Figure.Caption style ={{color : 'white'}}>
                  Jl.Casablanca Raya Kav.88,Kel.Menteng Dalam,Kec.Tebet,Gedung
                  Pakuwon Tower Lt.26 Unit J, Jakarta Selatan, DKI Jakarta 12870,<br />
                  Indonesia
                  <br /><br/>
                  Email : info.eratani@eratani.co.<br />
                  Telepon : +62 811 952 2577
                </Figure.Caption>
              </Figure>
            </Col>
          <Col md={3} >
          <Navbar style={{marginTop : '130px'}}>
            <Nav className="flex-column">
              <Nav.Item>Menu</Nav.Item>
              <br />
              <Nav.Item>Tim Kami</Nav.Item>
              <Nav.Item>Mitra Eratani</Nav.Item>
              <Nav.Item>Tips & Berita Pertanian</Nav.Item>
              <Nav.Item>Karir</Nav.Item>
            </Nav>
          </Navbar>
          </Col>
          <Col>
          </Col>
          <Col md={3} style={{marginTop : '130px'}} >
           <div class="topnav">
              <Nav  defaultActiveKey='IN' className="justify-content-center" stye={{ borderBottom: '5px'}}>
              <Nav.Link style={{color:'white'}}><FiGlobe size = '1.5em' /></Nav.Link>
              <Nav.Link  className ='active' href='IN' style={{color:'white'}}>IN</Nav.Link>
              <Nav.Link style={{color:'white'}}>EN</Nav.Link>
              </Nav>
            </div>
            <br/> <br/><br/><br/>
            <Nav className="justify-content-center">
            <Nav.Link style={{color:'white'}}><FaTiktok size = '1.5em'  /></Nav.Link>
            <Nav.Link style={{color:'white'}}><FaInstagram  size = '1.5em'  /></Nav.Link>
            <Nav.Link style={{color:'white'}}><FaLinkedin size ='1.5em'  /></Nav.Link>
            <Nav.Link style={{color:'white'}}><FaYoutube size = '1.5em'  /></Nav.Link>
            <Nav.Link style={{color:'white'}}><FaWhatsapp size = '1.5em'  /></Nav.Link>
            </Nav>
            </Col>
          </Row>
          <p style = {{textAlign : 'center',marginTop : '10px'}}>Copyright &copy; 2021 by PT.Eratani Teknologi Nusantara</p>
        </Container>
      </div>
    )
  };
}

export default Footer
