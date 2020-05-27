import React from "react";
import { Modal } from "react-bootstrap";
import { useSelector } from "react-redux";

function ShowHospital(props) {
  const { show, handleClose } = props;
  const hospital = useSelector(
    state => state.reducer.hospital.current_hospital || {}
  );
  return (
    <Modal show={show} onHide={handleClose}>
      <div style={{ padding: 10 }}>
        <p>Id: {hospital.id}</p>
        <p>Nombre: {hospital.name}</p>
        <p>Nit: {hospital.nit}</p>
        <p>Representante: {hospital.legal_representative}</p>
        <p>Dirección: {hospital.address}</p>
        <p>Telefono: {hospital.phone_number}</p>
      </div>
    </Modal>
  );
}

export default ShowHospital;
