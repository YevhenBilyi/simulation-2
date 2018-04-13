import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateZipcode, updateState, updateCity, updateName,updateAddress} from '../../ducks/reducer';

  
class Stepone extends Component {


  render() {
    return (
      <div className="Wizard">
        Step One
        <input placeholder='name'value={this.props.name}  onChange={e=>this.props.updateName(e.target.value)} type='text'/>
        <input placeholder='address' value={this.props.address} onChange={e=>this.props.updateAddress(e.target.value)} type='text'/>
        <input placeholder='city'value={this.props.city}  onChange={e=>this.props.updateCity(e.target.value)} type='text'/>
        <input placeholder='state'value={this.props.state}  onChange={e=>this.props.updateState(e.target.value)} type='text'/>
        <input placeholder='zipcode' value={this.props.zipcode} onChange={e=>this.props.updateZipcode(e.target.value)} type='number'/>
        <Link to='/wizard/step2'><button> Next</button> </Link>

      </div>
    );
  }
}
function mapStateToProps(state){
    return {
        name:state.name,
        address:state.address,
        zipcode:state.zipcode,
        state:state.state,
        city:state.city
    }
}
export default connect(mapStateToProps,{updateZipcode, updateState, updateCity, updateName,updateAddress})(Stepone) ;
