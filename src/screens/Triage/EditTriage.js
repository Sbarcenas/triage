import React, { useEffect, useState } from "react";
import { Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  _CREATE_TRIAGE,
  _GET_DOCTOR_LIST,
  _GET_HOSPITAL_LIST,
  _GET_PATIENT_LIST,
  _UPDATE_TRIAGE
} from "../../redux/actions/actions";

function EditPatient(props) {
  const { show, handleClose } = props;
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const triage = useSelector(
    state => state.reducer.triage.current_triage || {}
  );

  useEffect(() => {
    dispatch(_GET_HOSPITAL_LIST());
    dispatch(_GET_DOCTOR_LIST());
    dispatch(_GET_PATIENT_LIST());
  }, []);

  useEffect(() => {
    setData({
      consult_reason: triage.consult_reason,
      Diagnostic: triage.Diagnostic,
      suspect_covid: triage.suspect_covid,
      doctor_id: triage.doctor_id,
      patient_id: triage.patient_id
    });
  }, [triage.consult_reason]);
  const doctor = useSelector(state => state.reducer.doctor.doctor_list || []);
  const patient = useSelector(
    state => state.reducer.patient.patient_list || []
  );

  const handleSubmit = e => {
    triage.id
      ? dispatch(_UPDATE_TRIAGE(triage.id, data))
      : dispatch(_CREATE_TRIAGE(data));
    e.preventDefault();
  };

  useEffect(() => {
    console.info(triage);
  }, [triage]);
  return (
    <Modal show={show} onHide={handleClose}>
      <div style={{ padding: 20 }}>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Motivo consulta</Form.Label>
            <Form.Control
              type="text"
              placeholder="Motivo consulta"
              name="consult_reason"
              value={data.consult_reason}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput2">
            <Form.Label>Diagnostico</Form.Label>
            <Form.Control
              type="text"
              placeholder="Diagnostico"
              name="Diagnostic"
              value={data.Diagnostic}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Genero</Form.Label>
            <Form.Control
              as="select"
              name="suspect_covid"
              onChange={handleChange}
              value={data.suspect_covid}
            >
              <option value="yes">Si</option>
              <option value="no">No</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect2">
            <Form.Label>Doctor</Form.Label>
            <Form.Control
              as="select"
              name="doctor_id"
              onChange={handleChange}
              value={data.doctor_id}
            >
              {doctor.map(el => (
                <option
                  value={el.id}
                >{`${el.first_name} ${el.last_name}`}</option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect3">
            <Form.Label>Paciente</Form.Label>
            <Form.Control
              as="select"
              name="patient_id"
              onChange={handleChange}
              value={data.patient_id}
            >
              {patient.map(el => (
                <option
                  value={el.id}
                >{`${el.first_name} ${el.last_name}`}</option>
              ))}
            </Form.Control>
          </Form.Group>

          <input type="submit" value="Submit" />
        </Form>
      </div>
    </Modal>
  );
}

export default EditPatient;
