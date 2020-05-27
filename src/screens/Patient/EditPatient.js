import React, { useEffect, useState } from "react";
import { Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  _CREATE_DOCTOR,
  _CREATE_PATIENT,
  _GET_HOSPITAL_LIST,
  _UPDATE_DOCTOR,
  _UPDATE_PATIENT
} from "../../redux/actions/actions";

function EditPatient(props) {
  const { show, handleClose } = props;
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const patient = useSelector(
    state => state.reducer.patient.current_patient || {}
  );

  useEffect(() => {
    dispatch(_GET_HOSPITAL_LIST());
  }, []);

  useEffect(() => {
    setData({
      first_name: patient.first_name,
      last_name: patient.last_name,
      dni: patient.dni,
      address: patient.address,
      birth_date: patient.birth_date,
      gender: patient.gender
    });
  }, [patient.first_name]);

  const handleSubmit = e => {
    patient.id
      ? dispatch(_UPDATE_PATIENT(patient.id, data))
      : dispatch(_CREATE_PATIENT(data));
    e.preventDefault();
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <div style={{ padding: 20 }}>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre"
              name="first_name"
              value={data.first_name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput2">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              type="text"
              placeholder="Apellido"
              name="last_name"
              value={data.last_name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput3">
            <Form.Label>Dirección</Form.Label>
            <Form.Control
              type="text"
              placeholder="Cra 1B # 2 - 32"
              name="address"
              value={data.address}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput4">
            <Form.Label>Fecha de nacimiento</Form.Label>
            <Form.Control
              type="date"
              name="birth_date"
              value={data.birth_date}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Genero</Form.Label>
            <Form.Control
              as="select"
              name="blood_type"
              onChange={handleChange}
              value={data.gender}
            >
              <option value="male">Hombre</option>
              <option value="female">Mujer</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlInput5">
            <Form.Label>Dni</Form.Label>
            <Form.Control
              type="number"
              placeholder="3123123123"
              name="dni"
              onChange={handleChange}
              value={data.dni}
            />
          </Form.Group>

          <input type="submit" value="Submit" />
        </Form>
      </div>
    </Modal>
  );
}

export default EditPatient;
