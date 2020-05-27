import {
  RESET_SESSION,
  GET_CURRENT_DOCTOR,
  GET_DOCTOR_LIST,
  GET_CURRENT_PATIENT,
  GET_PATIENT_LIST,
  GET_CURRENT_HOSPITAL,
  GET_HOSPITAL_LIST,
  GET_CURRENT_TRIAGE,
  GET_TRIAGE_LIST,
  CLEAR_CURRENT
} from "../types";

const INITIAL_STATE = {
  doctor: {
    doctor_list: [],
    current_doctor: undefined
  },
  patient: {
    patient_list: [],
    current_patient: undefined
  },
  hospital: {
    hospital_list: [],
    current_hospital: undefined
  },
  triage: {
    triage_list: [],
    current_triage: undefined
  }
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_CURRENT_DOCTOR:
      return {
        ...state,
        doctor: { ...state.doctor, current_doctor: action.payload }
      };
    case GET_DOCTOR_LIST:
      return {
        ...state,
        doctor: { ...state.doctor, doctor_list: action.payload }
      };
    case GET_CURRENT_PATIENT:
      return {
        ...state,
        patient: { ...state.patient, current_patient: action.payload }
      };
    case GET_PATIENT_LIST:
      return {
        ...state,
        patient: { ...state.patient, patient_list: action.payload }
      };
    case GET_CURRENT_HOSPITAL:
      return {
        ...state,
        hospital: { ...state.hospital, current_hospital: action.payload }
      };
    case GET_HOSPITAL_LIST:
      return {
        ...state,
        hospital: { ...state.hospital, hospital_list: action.payload }
      };
    case GET_CURRENT_TRIAGE:
      return {
        ...state,
        triage: { ...state.triage, current_triage: action.payload }
      };
    case GET_TRIAGE_LIST:
      return {
        ...state,
        triage: { ...state.triage, triage_list: action.payload }
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        triage: { ...state.triage, current_triage: undefined },
        hospital: { ...state.hospital, current_hospital: undefined },
        patient: { ...state.patient, current_patient: undefined },
        doctor: { ...state.doctor, current_doctor: undefined }
      };
    case RESET_SESSION:
      return INITIAL_STATE;
    default:
      return state;
  }
}
