import React, { Component } from 'react';

class WizardThree extends Component 
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
          <tr><td>Mortgage</td><td><input onChange={e => this.handleMortgage(e)} value={this.state.userMortgageInput}/></td></tr>
          <tr><td>Rent</td><td><input onChange={e => this.handleRent(e)} value={this.state.userRentInput}/></td></tr>
        </tbody></table>
        <button onClick={() => this.handleCancelButton()}>Cancel</button>
        <button onClick={() => this.handleNextButton()}>Next</button>
      </div>
    );
  }
}

export default WizardThree;