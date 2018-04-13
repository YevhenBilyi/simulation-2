import React, { Component } from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import Stepone from '../Stepone/Stepone';
import Steptwo from '../Steptwo/Steptwo';
import Stepthree from '../Stepthree/Stepthree';
import {connect} from 'react-redux';
import {updateRent, updateMortgage,updateZipcode, updateState, updateCity, updateName,updateAddress,updateImg} from '../../ducks/reducer';




class Wizard extends Component {
  constructor(){
    super();
this.refresh=this.refresh.bind(this)
  }

refresh(){
  this.props.updateName('')
  this.props.updateAddress('')
  this.props.updateState('')
  this.props.updateCity('')
  this.props.updateZipcode(0)
  this.props.updateImg('')
  this.props.updateRent(0)
  this.props.updateMortgage(0)
}
  render() {
    return (
      <div className="Wizard">
        Wizard
      <Switch>
        <Route path='/wizard/step1' component={Stepone}/>
        <Route path='/wizard/step2' component={Steptwo}/>
        <Route path='/wizard/step3' component={Stepthree}/>
      </Switch>
        <Link to='/'><button onClick={this.refresh}>Cancel  </button></Link>
      </div>
    );
  }
}

function mapStateToProps(state){
  return state
}
export default connect(mapStateToProps,{updateMortgage,updateRent,updateZipcode, updateState, updateCity, updateName,updateAddress,updateImg})(Wizard) ;
