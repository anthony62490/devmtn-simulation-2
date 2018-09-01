import React from 'react';
import './House.css';

function House(props)
{
  return (
    <div className="house-box">
      <img src="https://i.imgur.com/2YWW1ry.jpg"/>
      <div className="house-wrap-box">
        <p>House {props.id}:</p>
        <p>address: {props.address}</p>
        <p>city: {props.city}</p>
        <p>state: {props.state}</p>
        <p>zip: {props.zip}</p>
        {/* <p>img: {props.img}</p> */}
        <p>mortgage: {props.mortgage}</p>
        <p>rent: {props.rent}</p>
      </div>
      <button onClick={() => props.deleteSelf(props.id)}>Delete</button>
    </div>
  );//return
};

export default House;