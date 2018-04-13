import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import {updateRent, updateMortgage,updateZipcode, updateState, updateCity, updateName,updateAddress,updateImg} from '../../ducks/reducer';


class Stepthree extends Component {
  constructor(){
    super();


    this.addHouse=this.addHouse.bind(this);
  }


  addHouse(){
    let house={
      name: this.props.name,
      address: this.props.address,
      city: this.props.city,
      state: this.props.state,
      zipcode: this.props.zipcode,
      img:this.props.img,
      mortgage:this.props.mortgage,
      rent:this.props.rent
    };
    axios.post('/api/house', house).then(res=>{
      console.log(house)
      this.props.updateName('')
      this.props.updateAddress('')
      this.props.updateState('')
      this.props.updateCity('')
      this.props.updateZipcode(0)
      this.props.updateImg('')
      this.props.updateRent(0)
      this.props.updateMortgage(0)
    }).catch((err)=>console.log("cannot post"+err))
  }
  render() {
      console.log(this.props.name)
    return (
      <div className="Wizard">
        Step three
      
        <input placeholder='mortgage' onChange={e=>this.props.updateMortgage(e.target.value)} type='decimal'/>
        <input placeholder='rent' onChange={e=>this.props.updateRent(e.target.value)} type='decimal'/>

        <Link to='/'><button onClick={this.addHouse}> Complete</button></Link>
        <Link to='/wizard/step2'><button> Previous</button> </Link>



      </div>
    );
  }
}

function mapStateToProps(state){
    return state
}
export default connect(mapStateToProps,{updateMortgage,updateRent,updateZipcode, updateState, updateCity, updateName,updateAddress,updateImg})(Stepthree) ;
