import { GET_CLIENTS, DELETE_CLIENT, ADD_CLIENT, CLEAR_CLIENTS } from "../actions/types.js";

const initialState = {
  clients: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CLIENTS:
      return {
        ...state,
        clients: action.payload
      };

    case DELETE_CLIENT:
      return {
        ...state,
        clients: state.clients.filter(client => client.id !== action.payload)
      };
    case ADD_CLIENT:
      return {
        ...state,
        clients: [...state.clients, action.payload]
      };
    case CLEAR_CLIENTS:
      return {
        ...state,
        clients: []
      };
    default:
      return state;
  }
}
