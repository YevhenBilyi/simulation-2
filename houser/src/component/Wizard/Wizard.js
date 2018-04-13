import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


class Wizard extends Component {
  constructor(){
    super();
    this.state={
      name:'',
      address:'',
      city:'',
      state:'',
      zipcode:0
    }
    this.handleName=this.handleName.bind(this);
    this.handleAddress=this.handleAddress.bind(this);
    this.handleCity=this.handleCity.bind(this);
    this.handleState=this.handleState.bind(this);
    this.handleZipcode=this.handleZipcode.bind(this);
    this.addHouse=this.addHouse.bind(this);
    this.clearInputs=this.clearInputs.bind(this)
  }
  handleName(e){
    this.setState({name:e})
  }
  handleAddress(e){
    this.setState({address:e})
  }
  handleCity(e){
    this.setState({city:e})
  }
  handleState(e){
    this.setState({state:e})
  }
  handleZipcode(e){
    this.setState({zipcode:e})
  }
  clearInputs(){
    this.setState({
      name:'',
      address:'',
      city:'',
      state:'',
      zipcode:0
    })
  }
  addHouse(){
    let house={
      name: this.state.name,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip
    };
    axios.post('/api/house', house).then(res=>{
      this.clearInputs()
    }).catch((err)=>console.log("cannot post"+err))
  }
  render() {
    return (
      <div className="Wizard">
        Wizard
        <input placeholder='name' value={this.state.name} onChange={e=>this.handleName(e.target.value)} type='text'/>
        <input placeholder='address' value={this.state.address} onChange={e=>this.handleAddress(e.target.value)} type='text'/>
        <input placeholder='city' value={this.state.city} onChange={e=>this.handleCity(e.target.value)} type='text'/>
        <input placeholder='state' value={this.state.state} onChange={e=>this.handleState(e.target.value)} type='text'/>
        <input placeholder='zipcode' value={this.state.zipcode} onChange={e=>this.handleZipcode(e.target.value)} type='number'/>
        <Link to='/'><button onClick={this.addHouse}> Complete</button></Link>


        <Link to='/'><button>Cancel  </button></Link>
      </div>
    );
  }
}

export default Wizard;
