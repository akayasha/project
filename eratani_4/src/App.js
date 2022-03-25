import React,{Component} from 'react' ;
import {Table,Container} from 'react-bootstrap'
import axios from 'axios'

class App extends Component{
  constructor(){
  super();
    this.state ={
      dataApi :[ ],
      dataPost :{
        id: 0,
        name : ' ',
        email : ' ',
        Gender : ' '
      }}}
      reloadData(){
        axios.get(`https://gorest.co.in/public/v2/users`).then (res =>{
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
        axios.get(`https://gorest.co.in/public/v2/users/${e.target.value}`).then (res =>{
          this.setState({
            dataPost :res.data,
          })
        })
      }

      render(){
        let tb_data = this.state.dataApi.map((data,index) =>{
          return(
                  <tr key = {data.id}>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.gender}</td>
                  </tr>
          );
        })
        return(
          <div>
          <Container>
          <h1 style ={{textAlign :'center'}}>Data karyawan</h1>
            <Table className = 'table table-bordered'striped bordered hover>
              <thead>
                <tr>
                  <th>Nama</th>
                  <th>E-mail</th>
                  <th>Gender</th>
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

export default App;
