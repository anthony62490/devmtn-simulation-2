import axios from 'axios';

const GET_HOUSES = 'GET_HOUSES';
const DELETE_HOUSE = 'DELETE_HOUSE';
const EDIT_NAME_INPUT = 'EDIT_NAME_INPUT';
const EDIT_CITY_INPUT = 'EDIT_CITY_INPUT';
const EDIT_STATE_INPUT = 'EDIT_STATE_INPUT';
const EDIT_ZIP_INPUT = 'EDIT_ZIP_INPUT';

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

export function editNameInput(input)
{
  return {
    type: EDIT_NAME_INPUT,
    payload: input
  };
}

export function editCityInput(input)
{
  return {
    type: EDIT_CITY_INPUT,
    payload: input
  };
}

export function editStateInput(input)
{
  return {
    type: EDIT_STATE_INPUT,
    payload: input
  };
}

export function editZipInput(input)
{
  return {
    type: EDIT_ZIP_INPUT,
    payload: input
  };
}

const initialState =
{
  houses: [],
  wizardInput: {}
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
    case EDIT_NAME_INPUT:
      return {
        ...state,
        userNameInput: action.payload
      };
    case EDIT_CITY_INPUT:
      return {
        ...state,
        userCityInput: action.payload
      };
    case EDIT_STATE_INPUT:
      return {
        ...state,
        userStateInput: action.payload
      };
    case EDIT_ZIP_INPUT:
      return {
        ...state,
        userZipInput: action.payload
      };
    default:
      return state;
  }
}