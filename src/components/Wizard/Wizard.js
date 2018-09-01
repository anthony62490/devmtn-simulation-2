import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

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

  render() 
  {
    return (
      <div>
        <div>
          <table>
            <tbody>
              <tr><td>Name</td><td><input onChange={e => this.handleName(e)} value={this.state.userNameInput}/></td></tr>
              <tr><td>Address</td><td><input onChange={e => this.handleAddress(e)} value={this.state.userAddressInput}/></td></tr>
              <tr><td>City</td><td><input onChange={e => this.handleCity(e)} value={this.state.userCityInput}/></td></tr>
              <tr><td>State</td><td><input onChange={e => this.handleState(e)} value={this.state.userStateInput}/></td></tr>
              <tr><td>Zip</td><td><input onChange={e => this.handleZip(e)} value={this.state.userZipInput}/></td></tr>
              <tr><td>Image</td><td><input onChange={e => this.handleImage(e)} value={this.state.userImageInput}/></td></tr>
              <tr><td>Mortgage</td><td><input onChange={e => this.handleMortgage(e)} value={this.state.userMortgageInput}/></td></tr>
              <tr><td>Rent</td><td><input onChange={e => this.handleRent(e)} value={this.state.userRentInput}/></td></tr>
            </tbody>
          </table>
        </div>
        <button onClick={() => this.handleButton()}>LOG! (from Blammo)</button>
        <Link to='/'><p>Cancel</p></Link>
      </div>
    );//return
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Wizard);