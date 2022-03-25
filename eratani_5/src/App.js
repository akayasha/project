import React,{Component} from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment,Checkbox } from 'semantic-ui-react'
import axios from 'axios';

class App extends Component {
  constructor(){
  super();
    this.state ={
      dataApi :[ ],
      dataPost :{
        id: 0,
        name : '',
        email : '',
        gender : '',
        status : ''
      },
      edit : false
    }
    this.reloadData =this.reloadData.bind(this);
    this.Submit = this.Submit.bind(this);
    this.SimpanData = this.SimpanData.bind(this);

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
   clear(){
     let newdata ={...this.state.dataPost};
     newdata['id']=' '
     newdata['name']=' '
     newdata['email']=' '
     newdata['gender']=' '
     newdata['status']=' '

     this.setState({
       dataPost : newdata
     })
   }

   Submit(){
     if(this.state.edit === false ){
     axios.post(`  http://localhost:3020/data`,  this.state.dataPost)
       .then((res) =>{
         this.reloadData();
         this.clear();
     });
   }else{
     axios.put(`  http://localhost:3020/data/${this.state.dataPost.id}`
       ,this.state.dataPost).then(()=> {
         this.reloadData();
         this.clear();
       })
   }}
   reloadData(){
     axios.get(`http://localhost:8010/data`).then (res =>{
       this.setState({
         dataApi : res.data,
         edit :false
       })
     });
   }
   getDataid = e =>{
     axios.get(`http://localhost:3020/data/${e.target.value}`).then (res =>{
       this.setState({
         dataPost :res.data,
         edit : true
       })
     })
   }

  render(){
    return(

  <Grid textAlign='center' style={{ height: '80vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        New Member
      </Header>
      <Form size='large'>
        <Segment stacked>
                <label>Name</label>
                <Form.Input
                 fluid
                 value={this.state.dataPost.name}
                  onChange={this.SimpanData}
                  icon='user'
                  iconPosition='left'
                  name='name'
                  placeholder='Name'
                 type='text' />
                <label>E-mail</label>
                <Form.Input
                  fluid
                  onChange={this.SimpanData}
                  value={this.state.dataPost.email}
                  icon='mail'
                  name='email'
                  iconPosition='left'
                  placeholder='E-mail address'
                  type='email'
                />
                <label>Gender</label>
                <Form.Input fluid type='text' name='gender' value={this.state.dataPost.gender} onChange={this.SimpanData}icon='universal access' iconPosition='left' placeholder = 'Gender'  />
                <label>Status</label>
                <Form.Input  fluid type='text' name='status'icon='tag' value={this.state.dataPost.status} onChange={this.SimpanData} iconPosition='left' placeholder = 'Status' />
                <Form.Field>
             <Checkbox label='I agree to the Terms and Conditions' />
           </Form.Field>
          <Button color='teal' fluid size='large' onClick={this.Submit}>
            Register
          </Button>
        </Segment>

      </Form>

    </Grid.Column>
  </Grid>
);
  }
}
export default App
