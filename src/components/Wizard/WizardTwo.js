import React, { Component } from 'react';

class WizardTwo extends Component 
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
        <tr><td>Image</td><td><input onChange={e => this.handleImage(e)} value={this.state.userImageInput}/></td></tr>
        </tbody></table>
        <button onClick={() => this.handleCancelButton()}>Cancel</button>
        <button onClick={() => this.handleNextButton()}>Next</button>
      </div>
    );
  }
}

export default WizardTwo;