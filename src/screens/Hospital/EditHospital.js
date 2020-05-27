import React, { useEffect, useState } from "react";
import { Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  _CREATE_HOSPITAL,
  _UPDATE_HOSPITAL
} from "../../redux/actions/actions";

function EditHospital(props) {
  const { show, handleClose } = props;
  const hospital = useSelector(
    state => state.reducer.hospital.current_hospital || {}
  );
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    setData({
      ...data,
      name: hospital.name,
      nit: hospital.nit,
      legal_representative: hospital.legal_representative,
      address: hospital.address,
      phone_number: hospital.phone_number
    });
  }, [hospital.name]);
  const handleSubmit = e => {
    hospital.id
      ? dispatch(_UPDATE_HOSPITAL(hospital.id, data))
      : dispatch(_CREATE_HOSPITAL(data));
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
              name="name"
              value={data.name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput2">
            <Form.Label>Nit</Form.Label>
            <Form.Control
              type="text"
              placeholder="..."
              name="nit"
              value={data.nit}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput3">
            <Form.Label>Representante legal</Form.Label>
            <Form.Control
              type="text"
              placeholder="..."
              name="legal_representative"
              value={data.legal_representative}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput3">
            <Form.Label>Dirección</Form.Label>
            <Form.Control
              type="text"
              placeholder="..."
              name="address"
              value={data.address}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlInput5">
            <Form.Label>Télefono</Form.Label>
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

export default EditHospital;
