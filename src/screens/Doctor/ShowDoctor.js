import React from "react";
import { Modal } from "react-bootstrap";
import { useSelector } from "react-redux";

function ShowDoctor(props) {
  const { show, handleClose } = props;
  const doctor = useSelector(
    state => state.reducer.doctor.current_doctor || {}
  );
  return (
    <Modal show={show} onHide={handleClose}>
      <div style={{ padding: 10 }}>
        <p>Id: {doctor.id}</p>
        <p>Nombre: {doctor.first_name}</p>
        <p>Apellido: {doctor.last_name}</p>
        <p>Tipo de sangre: {doctor.blood_type}</p>
        <p>Dirección: {doctor.address}</p>
        <p>Telefono: {doctor.phone_number}</p>
      </div>
    </Modal>
  );
}

export default ShowDoctor;
