import React, { useEffect } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import {
  _GET_DOCTOR_LIST,
  _GET_PATIENT_LIST
} from "../../redux/actions/actions";

function ShowPatient(props) {
  const { show, handleClose } = props;
  const dispatch = useDispatch();
  const patients = useSelector(state => state.reducer.patient.patient_list);
  const doctors = useSelector(state => state.reducer.doctor.doctor_list);
  const triage = useSelector(
    state => state.reducer.triage.current_triage || {}
  );
  useEffect(() => {
    dispatch(_GET_PATIENT_LIST());
    dispatch(_GET_DOCTOR_LIST());
  }, []);
  return (
    <Modal show={show} onHide={handleClose}>
      <div style={{ padding: 10 }}>
        <p>Id: {triage.id}</p>
        <p>Diagnostico: {triage.Diagnostic}</p>
        <p>Motivo consulta: {triage.consult_reason}</p>
        <p>Sospechoso Covid: {triage.suspect_covid}</p>
        <p>
          Doctor: {(_.find(doctors, ["id", triage.doctor_id]) || {}).first_name}
        </p>
        <p>
          Paciente:{" "}
          {(_.find(patients, ["id", triage.patient_id]) || {}).first_name}
        </p>
      </div>
    </Modal>
  );
}

export default ShowPatient;
