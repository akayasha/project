import React,{Component} from 'react';
import {Image,Container,Nav,Button,Row,Col,Card} from 'react-bootstrap';
import {BrowserView, MobileView} from 'react-device-detect';
import myimage from './Gmbar/imag.jpg' //Mengimport gambar dari local storage
import asset from './Gmbar/aset2.png' //Mengimport gambar dari local storage
import asset2 from './Gmbar/aset3.png' //Mengimport gambar dari local storage
import asset3 from './Gmbar/aset4.png' //Mengimport gambar dari local storage
import asset4 from './Gmbar/aset5.png' //Mengimport gambar dari local storage
import asset5 from './Gmbar/aset6.png'
import asset6 from './Gmbar/aset7.png'
import './list.css' //Style pada List & Card


class About extends Component {
  render(){
    return(
      <>
      <BrowserView>
      <div >
      <Container style ={{marginTop : '30px'}}>
          <Nav  fill defaultActiveKey='About.js' >
            <Image src ="https://images.glints.com/unsafe/180x0/glints-dashboard.s3.amazonaws.com/company-logo/93c1b6ce4b8ddd80e65862d5b4788ac8.png"
            style = {{height : "30px",width :"auto"}}/>
            <Nav.Item><Nav.Link href ='#Home' >Beranda</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href ='About.js'><b>Tentang Kami</b></Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href ='#Home' >Tips & Berita Pertanian</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href ='#Home'>Kegiatan</Nav.Link></Nav.Item>
            <Nav.Item><Button variant ='warning' >Mitra Petani</Button></Nav.Item>
          </Nav>
        </Container>
      <Image src ={myimage} alt="Mitra " style = {{ height : "auto",width:"auto",marginTop : '15px'}}/>
      <Container  style={{marginTop : "35px"}}>
        <h1 style={{textAlign : 'center' ,color :'#0E9749'}}>Tentang Kami</h1>
        <Image src ={asset} style={{height : '540px',display :'flex',float :'left',marginRight : '20px',marginTop : '20px'}} alt='kegiatan bersama' />
        <p class = 'intro' style ={{marginTop : '25px',textAlign : 'justify',letterSpacing : '2.5px'}}>Eratani adalah perusahaan Agri-tech yang didirikan oleh anak bangsa.Berangkat dari mimpi dan semangat yang besar,Eratani
        memiliki misi untuk menyejahterakan petani nusantara dengan mempermudah jalannya proses pertanian dari hulu sampai hilir.Melalui digitalisasi proses hulu
        (distribusi dan penyaluran hasil panen),Eratani berfokus membangun ekosistem pertanian yang kuat dan berusaha memberikan kemudahan akses kepada petani dengan
        teknologi untuk meningkatkan produktivitas dan kesejahteraan ekosistem pertanian.</p>

        <h1 style={{textAlign : 'center' ,color :'#0E9749',marginTop : '150px'}}>Visi Eratani</h1>
        <p class = 'intro' style ={{marginTop : '25px',textAlign : 'center',letterSpacing : '2.5px'}}>
        Menjadi platform Agri-Tech no.1 di Indonesia dengan membangun ekosistem pertanian yang kuat dari hulu ke hilir,mulai dari pembiayaan ,
        pengadaan barang,edukasi sampai distribusi hasil panen dan memberikan kemudahan bagi petani untuk mendapatkan akses dengan dukungan
        teknologi untuk mensejahterakan kehidupan petani Indonesia kedepannya
        </p>

        <h1 style={{textAlign : 'center' ,color :'#0E9749',marginTop : '150px'}}>Misi Eratani</h1>
        <ul >
          <li>Membangun dan memajukan ekosistem pertanian dengan digitalisasi di setiap prosesnya.</li>
          <li>Menjadi platform danmitra bagi petani dalam mendukung segala proses pertanian.</li>
          <li>Menjadi mitra bagi para kreditor,supplier,dan distributor guna meningkatkan knierja rantai pasok di dunia pertanian.</li>
          <li>Berkolaborasi dengan badan pangan guna meningkatkan ketahanan pangan nasional.</li>
          <li>Memberikan dampak sosial yang positif dan membangun bagi ekosistem pertanian di Indonesia.</li>
        </ul>

        <h1 style={{textAlign : 'center' ,color :'#0E9749',marginTop : '150px'}}>Tim Kami</h1>
        <Row className="justify-content-md-center" style ={{marginTop : "20px"}} >
          <Col md='auto'>
            <Card  borderRadius={5} style={{ width: '18rem',textAlign :'center' }}>
              <Card.Img variant ='top' src={asset2} />
              <Card.Body class="card bg-warning " >
                <Card.Title>Andrew Soeherman</Card.Title>
                <Card.Text>CEO Of Eratani</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md='auto'>
            <Card style={{ width: '18rem',textAlign :'center' }}>
              <Card.Img variant ='top' src={asset3} />
              <Card.Body class="card bg-warning ">
                <Card.Title>Kevin Juan</Card.Title>
                <Card.Text>SVP Bussiness & Operation</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md='auto'>
            <Card style={{ width: '18rem',textAlign :'center' }}>
              <Card.Img variant ='top' src={asset4} />
              <Card.Body class="card bg-warning ">
                <Card.Title>Angles Gani</Card.Title>
                <Card.Text>SVP Sales</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="justify-content-md-center" style ={{marginTop : "20px"}}>
          <Col md='auto'>
              <Card style={{ width: '18rem',textAlign :'center' }}>
                <Card.Img variant ='top' src={asset5} />
                <Card.Body class="card bg-warning ">
                  <Card.Title>Bharat Ongso</Card.Title>
                  <Card.Text>Advisor</Card.Text>
                </Card.Body>
              </Card>
          </Col>
          <Col  md='auto'>
              <Card style={{ width: '18rem',textAlign :'center' }}>
                <Card.Img variant ='top' src={asset6} />
                <Card.Body class="card bg-warning ">
                  <Card.Title>Riswanto</Card.Title>
                  <Card.Text>Advisor</Card.Text>
                </Card.Body>
              </Card>
          </Col>
        </Row>
      </Container>

      </div>
      </BrowserView>

      <MobileView>
      <p>hap nih bos</p>
      </MobileView >
      </>
    );

  };
}

export default About;
