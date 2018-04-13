import React, { Component } from 'react';
import House from '../House/House';
import {Link} from 'react-router-dom';
import axios from 'axios'


class Dashboard extends Component {
  constructor(){
    super();
    this.state={
      list:[]
    }
  }
  componentDidMount(){
    axios.get('/api/houses').then(res=>{
      this.setState({list:res.data})
    }).catch(error=>console.log('Failed at getting data:'+error))
  }
  render() {
    let list=this.state.list.map((house,i)=>{
      return ( <House key={i} name={house.name} address={house.address} city={house.city} 
        state={house.state} zip={house.zip} id={house.id}/>)
    })
    return (
      <div className="Dashboard">
        Dashboard
        {list}
        <Link to='/wizard'><button>Add New Property  </button></Link>
      </div>
    );
  }
}

export default Dashboard;
