import React, { Component } from 'react';

class WizardOne extends Component 
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


  handleNextButton(){}
  handleCancelButton(){}

  render() 
  {
    return (
      <div>
        <table><tbody>
        <tr><td>Name</td><td><input onChange={e => this.handleName(e)} value={this.state.userNameInput}/></td></tr>
        <tr><td>Address</td><td><input onChange={e => this.handleAddress(e)} value={this.state.userAddressInput}/></td></tr>
        <tr><td>City</td><td><input onChange={e => this.handleCity(e)} value={this.state.userCityInput}/></td></tr>
        <tr><td>State</td><td><input onChange={e => this.handleState(e)} value={this.state.userStateInput}/></td></tr>
        <tr><td>Zip</td><td><input onChange={e => this.handleZip(e)} value={this.state.userZipInput}/></td></tr>
        </tbody></table>
        <button onClick={() => this.handleCancelButton()}>Cancel</button>
        <button onClick={() => this.handleNextButton()}>Next</button>
      </div>
    );
  }
}

export default WizardOne;