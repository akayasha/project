import React,{Component,useState} from 'react';
import {Button,Container,Table,FormControl} from 'react-bootstrap'
import axios from 'axios';


class Tables extends Component{
  constructor(){
  super();
    this.state ={
      dataApi :[ ],
      dataPost :{
        id: 0,
        first_name : '',
        email : '',
        gender : ''
      },
      edit : false
        }

    this.reloadData =this.reloadData.bind(this);
    this.hapus = this.hapus.bind(this);
    this.SimpanData = this.SimpanData.bind(this);
    this.Submit = this.Submit.bind(this);
    this.Cari = this.Cari.bind(this);

   }




  SimpanData(e){
    let newdata ={ ...this.state.dataPost};
    if (this.state.edit ===false){
    newdata['id'] = new Date().getTime();}
    newdata[e.target.name] = e.target.value;
    this.setState({
      dataPost :newdata
    })
  }
  Submit(){
    if(this.state.edit === false ){
    axios.post(`http://localhost:8010/data`,  this.state.dataPost)
      .then((res) =>{
        this.reloadData();
        this.clear();
    });
  }else{
    axios.put(`http://localhost:8010/data/${this.state.dataPost.id}`
      ,this.state.dataPost).then(()=> {
        this.reloadData();
        this.clear();
      })
  }}
  hapus(e){
    fetch(`http://localhost:8010/data/${e.target.value}`,
      {method : 'DELETE'}).then (res => {
        this.reloadData();
        this.clear();
      })
  }

  clear(){
    let newdata ={...this.state.dataPost};
    newdata['id']=' '
    newdata['first_name']=' '
    newdata['email']=' '
    newdata['gender']=' '

    this.setState({
      dataPost : newdata
    })
  }
  reloadData(){
    axios.get(`http://localhost:8010/data`).then (res =>{
      this.setState({
        dataApi : res.data,
        edit :false
      })
    });
  }

  componentDidMount(){
      this.reloadData()
    }


  getDataid = e =>{
    axios.get(`http://localhost:8010/data/${e.target.value}`).then (res =>{
      this.setState({
        dataPost :res.data,
        edit : true
      })
    })
  }

  Cari(e){
    this.setState({filter : e.target.value});
  }
  render(){

    let tb_data = this.state.dataApi.map((data,index) =>{
      return(
              <tr key = {data.id}>
                <td>{data.first_name}</td>
                <td>{data.email}</td>
                <td>{data.gender}</td>
                <td style={{textAlign :'center'}}><Button className='btn btn-danger' value={data.id} style={{width :'150px'}} onClick = {this.hapus} > Hapus </Button></td>
                <td style={{textAlign :'center'}}><Button variant ='info'  value={data.id} style={{width :'150px'}} onClick={this.getDataid}>Edit</Button></td>
              </tr>
      );
    })

    return(
      <div>
      <Container>
      <h1 style ={{textAlign :'center'}}>Data karyawan</h1>
        <FormControl type='text' value={this.state.dataPost.first_name} onChange={this.SimpanData} placeholder ='Nama Depan' name='first_name' style ={{width : '450px',margin : '20px'}} />
        <FormControl type='email' value={this.state.dataPost.email} onChange={this.SimpanData} placeholder ='E-mail' name='email' style ={{width : '450px',margin : '20px'}} />
        <FormControl type='text' value={this.state.dataPost.gender} onChange={this.SimpanData} placeholder ='Gender' name='gender' style ={{width : '450px',margin : '20px'}} />
        <Button type='submit' variant = 'primary' style ={{width : '250px',margin : '20px'}} onClick={this.Submit}>Simpan Data</Button>
        <Button variant='danger' value={this.state.dataPost.id} style={{width :'150px'}} onClick={this.hapus}>Delete</Button>
        <Search />


        <Table className = 'table table-bordered'striped bordered hover>
          <thead>
            <tr>
              <th>Nama</th>
              <th>E-mail</th>
              <th>Gender</th>
              <th>Hapus</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {tb_data}
          </tbody>
        </Table>

      </Container>
      </div>

    )
  }
}

export default Tables;
