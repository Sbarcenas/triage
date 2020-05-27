import React, { useEffect, useState } from "react";
import { Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  _CREATE_DOCTOR,
  _GET_HOSPITAL_LIST,
  _UPDATE_DOCTOR
} from "../../redux/actions/actions";

function EditDoctor(props) {
  const { show, handleClose } = props;
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const hospital = useSelector(
    state => state.reducer.hospital.hospital_list || []
  );

  const doctor = useSelector(
    state => state.reducer.doctor.current_doctor || {}
  );

  useEffect(() => {
    dispatch(_GET_HOSPITAL_LIST());
  }, []);

  useEffect(() => {
    setData({
      first_name: doctor.first_name,
      last_name: doctor.last_name,
      address: doctor.address,
      birth_date: doctor.birth_date,
      blood_type: doctor.blood_type,
      experience_years: doctor.experience_years,
      phone_number: doctor.phone_number,
      hospital_id: doctor.hospital_id
    });
  }, [doctor.first_name]);

  const handleSubmit = e => {
    doctor.id
      ? dispatch(_UPDATE_DOCTOR(doctor.id, data))
      : dispatch(_CREATE_DOCTOR(data));
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
            <Form.Label>Tipo de sangre</Form.Label>
            <Form.Control
              as="select"
              name="blood_type"
              onChange={handleChange}
              value={data.blood_type}
            >
              <option>O+</option>
              <option>O-</option>
              <option>A+</option>
              <option>A-</option>
              <option>B+</option>
              <option>B-</option>
              <option>AB+</option>
              <option>AB-</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Hospital</Form.Label>
            <Form.Control
              as="select"
              name="hospital_id"
              onChange={handleChange}
              value={data.hospital_id}
            >
              {hospital.map(el => (
                <option value={el.id}>{el.name}</option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput5">
            <Form.Label>Años de experiencia</Form.Label>
            <Form.Control
              type="number"
              placeholder="3"
              name="experience_years"
              onChange={handleChange}
              value={data.experience_years}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput5">
            <Form.Label>Años de experiencia</Form.Label>
            <Form.Control
              type="phone"
              placeholder="300 5555555"
              name="phone_number"
              onChange={handleChange}
              value={data.phone_number}
            />
          </Form.Group>
          <input type="submit" value="Submit" />
        </Form>
      </div>
    </Modal>
  );
}

export default EditDoctor;
