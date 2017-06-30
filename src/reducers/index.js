import {
  FILTER_BY_CITY,
  FILTER_BY_COMPANY
} from '../constants/'

import * as users from '../data/users.json'

const initialState = {
  users
}

export default function reducers(state = initialState, action) {
  switch (action.type) {
    case FILTER_BY_CITY:
      const filteredUsers = users.filter(user => {
        return user.address.city === action.filter
      })
      
      return {
        users: filteredUsers
      }
    case FILTER_BY_COMPANY:
      console.log('Zalypka 2', FILTER_BY_CITY)
      break
    default:
      break
  }
  return state
}