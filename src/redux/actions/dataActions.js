import {
  SET_BUDCALLS,
  LOADING_DATA,
  LIKE_BUDCALL,
  UNLIKE_BUDCALL,
  DELETE_BUDCALL,
  LOADING_UI,
  CLEAR_ERRORS,
  SET_ERRORS,
  POST_BUDCALL,
  STOP_LOADING_UI,
  SET_BUDCALL,
  SUBMIT_COMMENT,
} from "../types";

import axios from "axios";

//Get all budcalls
export const getBudcalls = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get("/budcalls")
    .then((res) => {
      dispatch({
        type: SET_BUDCALLS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: SET_BUDCALLS, payload: [] });
    });
};

export const getBudcall = (budcallId) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .get(`/budcall/${budcallId}`)
    .then((res) => {
      dispatch({ type: SET_BUDCALL, payload: res.data });
      dispatch({ type: STOP_LOADING_UI });
    })
    .catch((err) => console.log(err));
};

export const postBudcall = (newBudcall) => (dispatch) => {
  dispatch({ type: LOADING_UI });

  axios
    .post("/budcall", newBudcall)
    .then((res) => {
      dispatch({ type: POST_BUDCALL, payload: res.data });
      dispatch(clearErrors());
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    })
    .catch((err) => {
      dispatch({ type: SET_ERRORS, payload: err.response.data });
    });
};

export const likeBudcall = (budcallId) => (dispatch) => {
  axios
    .get(`/budcall/${budcallId}/like`)
    .then((res) => {
      dispatch({ type: LIKE_BUDCALL, payload: res.data });
    })
    .catch((err) => console.log(err));
};

export const unlikeBudcall = (budcallId) => (dispatch) => {
  axios
    .get(`/budcall/${budcallId}/unlike`)
    .then((res) => {
      dispatch({ type: UNLIKE_BUDCALL, payload: res.data });
    })
    .catch((err) => console.log(err));
};
export const submitComment = (budcallId, commentData) => (dispatch) => {
  axios
    .post(`/budcall/${budcallId}/comment`, commentData)
    .then((res) => {
      dispatch({ type: SUBMIT_COMMENT, payload: res.data });
      dispatch(clearErrors());
    })
    .catch((err) => {
      dispatch({ type: SET_ERRORS, payload: err.response.data });
    });
};
export const deleteBudcall = (budcallId) => (dispatch) => {
  axios
    .delete(`/budcall/${budcallId}`)
    .then(() => {
      dispatch({ type: DELETE_BUDCALL, payload: budcallId });
    })
    .catch((err) => console.log(err));
};

export const getUserData = (userHandle) => (dispatch) => {
  dispatch({ type: LOADING_DATA });

  axios
    .get(`/user/${userHandle}`)
    .then((res) => {
      dispatch({
        type: SET_BUDCALLS,
        payload: res.data.budcalls,
      });
    })
    .catch(() => {
      dispatch({
        type: SET_BUDCALLS,
        payload: null,
      });
    });
};

export const clearErrors = () => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
