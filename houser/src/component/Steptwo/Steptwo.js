import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateImg} from '../../ducks/reducer';


class Steptwo extends Component {

  render() {
    return (
      <div className="Wizard">
        Step two
        <input placeholder='image URL' value={this.props.img}  onChange={e=>this.props.updateImg(e.target.value)} type='text'/>
     
        <Link to='/wizard/step3'><button> Next</button> </Link>
        <Link to='/wizard/step1'><button> Previous</button> </Link>
      </div>
    );
  }
}

function mapStateToProps(state){
    return {
        img:state.img
    }
}
export default connect(mapStateToProps,{updateImg})(Steptwo) ;
