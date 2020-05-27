import React from "react";
import { Modal } from "react-bootstrap";
import { useSelector } from "react-redux";

function ShowPatient(props) {
  const { show, handleClose } = props;
  const patient = useSelector(
    state => state.reducer.patient.current_patient || {}
  );
  return (
    <Modal show={show} onHide={handleClose}>
      <div style={{ padding: 10 }}>
        <p>Id: {patient.id}</p>
        <p>Nombre: {patient.first_name}</p>
        <p>Apellido: {patient.last_name}</p>
        <p>Tipo de sangre: {patient.dni}</p>
        <p>Dirección: {patient.address}</p>
        <p>Nacimiento: {patient.birth_date}</p>
        <p>Genero: {patient.gender}</p>
      </div>
    </Modal>
  );
}

export default ShowPatient;
