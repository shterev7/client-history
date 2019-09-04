import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";

import { GET_CLIENTS, DELETE_CLIENT, ADD_CLIENT } from "./types";


export const getClients = () => (dispatch, getState) => {
  axios
    .get("/api/clients/", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_CLIENTS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};


export const deleteClient = id => (dispatch, getState) => {
  axios
    .delete(`/api/clients/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ deleteClient: "Client Deleted" }));
      dispatch({
        type: DELETE_CLIENT,
        payload: id
      });
    })
    .catch(err => console.log(err));
};


export const addClient= client => (dispatch, getState) => {
  axios
    .post("/api/clients/", client, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ addClient: "Client Added" }));
      dispatch({
        type: ADD_CLIENT,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
