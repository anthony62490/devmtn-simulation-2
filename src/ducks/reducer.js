import axios from 'axios';

const GET_HOUSES = 'GET_HOUSES';
const DELETE_HOUSE = 'DELETE_HOUSE';
const GET_USER_INPUT = 'GET_USER_INPUT';


export function getHouses() //example 
{
  return {
    type: GET_HOUSES,
    payload: axios.get('/api/houses')
  };
}

export function deleteHouse(id)
{
  return {
    type: DELETE_HOUSE,
    payload: axios.delete(`/api/house/${id}`)
  };
}

export function sendUserInputToState(inputObj)
{
  return {
    type: GET_USER_INPUT,
    payload: inputObj
  }
}

const initialState =
{
  houses: [], //holds the list of completed properties
  wizardInput: {} //temporary holding area for partially completed input
};

export default function myReducer(state = initialState, action)
{
  console.log('ACTION CHECK', action.type);
  switch(action.type)
  {
    case `${GET_HOUSES}_FULFILLED`:
      console.log('HIT2');
      return {
        ...state,
        houses: action.payload.data
      };
    case `${DELETE_HOUSE}_FULFILLED`:
      return {
        ...state,
        houses: action.payload.data
      };
    case GET_USER_INPUT:
      console.log('Got User Input');
      return {
        ...state,
        wizardInput: action.payload
      };
    default:
      return state;
  }
}