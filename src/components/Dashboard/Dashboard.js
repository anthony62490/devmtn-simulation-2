import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {getHouses, deleteHouse} from "../../ducks/reducer";
import House from "../House/House";

class Dashboard extends Component 
{
  componentDidMount()
  {
    this.props.getHouses();
    // console.log('HIT3');
  }

  render() 
  {
    console.log("props: ", this.props)
    return (
      <div>
        <Link to='/wizard'><p>Add New Property</p></Link>
        Dashboard
        {this.props.houses.map((e, i) => {
            return <House 
                    key={e.id} 
                    id={e.id}
                    address={e.address}
                    city={e.city}
                    state={e.state}
                    zip={e.zip}
                    img={e.img}
                    mortgage={e.mortgage}
                    rent={e.rent}
                    deleteSelf={this.props.deleteHouse}
                    />
        })}
        {/* <House/> */}
      </div>
    );//return
  }
}

const mapStateToProps = state => state;
export default connect(mapStateToProps,{ getHouses, deleteHouse })(Dashboard);