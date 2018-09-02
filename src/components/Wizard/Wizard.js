import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import {sendUserInputToState} from '../../ducks/reducer';

class Wizard extends Component 
{
  constructor(props)
  {
    super(props);
    this.state = 
    {
      userNameInput: '',
      userAddressInput: '',
      userCityInput: '',
      userStateInput: '',
      userZipInput: '',
      userImageInput: '',
      userMortgageInput: '',
      userRentInput: ''
    }
  }

  handleName = (e) => {this.setState({userNameInput: e.target.value})};
  handleAddress = (e) => {this.setState({userAddressInput: e.target.value})};
  handleCity = (e) => {this.setState({userCityInput: e.target.value})};
  handleState = (e) => {this.setState({userStateInput: e.target.value})};
  handleZip = (e) => {this.setState({userZipInput: e.target.value})};
  handleImage = (e) => {this.setState({userImageInput: e.target.value})};
  handleMortgage = (e) => {this.setState({userMortgageInput: e.target.value})};
  handleRent = (e) => {this.setState({userRentInput: e.target.value})};
  handleButton = () => {console.log(this.state)};

  handleStateButton = () => {
    let submitForm = {
      name:this.state.userNameInput,
      address:this.state.userAddressInput,
      city:this.state.userCityInput,
      state:this.state.userStateInput,
      zip:this.state.userZipInput,
      image:this.state.userImageInput,
      mortgage:this.state.userMortgageInput,
      rent:this.state.userRentInput}
    this.props.sendUserInputToState(submitForm);
  }

  handleSubmitButton()
  {
    let submitForm = {
      name:this.state.userNameInput,
      address:this.state.userAddressInput,
      city:this.state.userCityInput,
      state:this.state.userStateInput,
      zip:this.state.userZipInput,
      image:this.state.userImageInput,
      mortgage:this.state.userMortgageInput,
      rent:this.state.userRentInput}

    axios.post('/api/house', submitForm)
  }

  render() 
  {
    return (
      <div>
        <div>

        </div>
        <button onClick={() => this.handleButton()}>Check State</button>
        <button onClick={() => this.handleStateButton()}>Send to State</button>
        <button onClick={() => this.handleSubmitButton()}>Submit</button>
        <Link to='/'><p>Cancel</p></Link>
      </div>
    );//return
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {sendUserInputToState})(Wizard);