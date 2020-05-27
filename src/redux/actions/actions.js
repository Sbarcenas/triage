import axios from "../../services/triageApi";
import {
  GET_CURRENT_DOCTOR,
  GET_CURRENT_HOSPITAL,
  GET_CURRENT_PATIENT, GET_CURRENT_TRIAGE,
  GET_DOCTOR_LIST,
  GET_HOSPITAL_LIST,
  GET_PATIENT_LIST, GET_TRIAGE_LIST
} from "../types";

// DOCTOR

export const _GET_CURRENT_DOCTOR = id => dispatch => {
  return axios.get(`doctors/${id}`).then(res => {
    console.info(res);
    dispatch({ type: GET_CURRENT_DOCTOR, payload: res.data });
  });
};

export const _GET_DOCTOR_LIST = () => dispatch => {
  return axios.get(`doctors`).then(res => {
    console.info(res);
    dispatch({ type: GET_DOCTOR_LIST, payload: res.data });
  });
};

export const _DELETE_DOCTOR = id => dispatch => {
  return axios
    .delete(`doctors/${id}`)
    .then(res => dispatch(_GET_DOCTOR_LIST()));
};

export const _CREATE_DOCTOR = data => dispatch => {
  return axios
    .post(`doctors`, data)
    .then(res => dispatch(_GET_DOCTOR_LIST()))
    .catch(err => console.info(err));
};

export const _UPDATE_DOCTOR = (id, data) => dispatch => {
  return axios
    .patch(`doctors/${id}`, data)
    .then(res => dispatch(_GET_DOCTOR_LIST()));
};

// HOSPITAL

export const _GET_CURRENT_HOSPITAL = id => dispatch => {
  return axios.get(`hospitals/${id}`).then(res => {
    console.info(res);
    dispatch({ type: GET_CURRENT_HOSPITAL, payload: res.data });
  });
};

export const _GET_HOSPITAL_LIST = () => dispatch => {
  return axios.get(`hospitals`).then(res => {
    console.info(res);
    dispatch({ type: GET_HOSPITAL_LIST, payload: res.data });
  });
};

export const _DELETE_HOSPITAL = id => dispatch => {
  return axios
    .delete(`hospitals/${id}`)
    .then(res => dispatch(_GET_HOSPITAL_LIST()));
};

export const _CREATE_HOSPITAL = data => dispatch => {
  return axios
    .post(`hospitals`, data)
    .then(res => dispatch(_GET_HOSPITAL_LIST()))
    .catch(err => console.info(err));
};

export const _UPDATE_HOSPITAL = (id, data) => dispatch => {
  return axios
    .patch(`patients/${id}`, data)
    .then(res => dispatch(_GET_HOSPITAL_LIST()));
};

// PATIENT

export const _GET_CURRENT_PATIENT = id => dispatch => {
  return axios.get(`patients/${id}`).then(res => {
    console.info(res);
    dispatch({ type: GET_CURRENT_PATIENT, payload: res.data });
  });
};

export const _GET_PATIENT_LIST = () => dispatch => {
  return axios.get(`patients`).then(res => {
    console.info(res);
    dispatch({ type: GET_PATIENT_LIST, payload: res.data });
  });
};

export const _DELETE_PATIENT = id => dispatch => {
  return axios
    .delete(`patients/${id}`)
    .then(res => dispatch(_GET_PATIENT_LIST()));
};

export const _CREATE_PATIENT = data => dispatch => {
  return axios
    .post(`patients`, data)
    .then(res => dispatch(_GET_PATIENT_LIST()))
    .catch(err => console.info(err));
};

export const _UPDATE_PATIENT = (id, data) => dispatch => {
  return axios
    .patch(`patients/${id}`, data)
    .then(res => dispatch(_GET_PATIENT_LIST()));
};

// TRIAGE

export const _GET_CURRENT_TRIAGE = id => dispatch => {
  return axios.get(`triages/${id}`).then(res => {
    console.info(res);
    dispatch({ type: GET_CURRENT_TRIAGE, payload: res.data });
  });
};

export const _GET_TRIAGE_LIST = () => dispatch => {
  return axios.get(`triages`).then(res => {
    console.info(res);
    dispatch({ type: GET_TRIAGE_LIST, payload: res.data });
  });
};

export const _DELETE_TRIAGE = id => dispatch => {
  return axios
    .delete(`triages/${id}`)
    .then(res => dispatch(_GET_TRIAGE_LIST()));
};

export const _CREATE_TRIAGE = data => dispatch => {
  return axios
    .post(`triages`, data)
    .then(res => dispatch(_GET_TRIAGE_LIST()))
    .catch(err => console.info(err));
};

export const _UPDATE_TRIAGE = (id, data) => dispatch => {
  return axios
    .patch(`triages/${id}`, data)
    .then(res => dispatch(_GET_TRIAGE_LIST()));
};
