import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  _DELETE_DOCTOR,
  _DELETE_HOSPITAL,
  _GET_CURRENT_DOCTOR,
  _GET_CURRENT_HOSPITAL,
  _GET_DOCTOR_LIST
} from "../../redux/actions/actions";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { AiFillEdit, AiFillDelete, AiFillEye } from "react-icons/ai";
import EditDoctor from "./EditDoctor";
import _ from "lodash";
import { CLEAR_CURRENT } from "../../redux/types";
import ShowDoctor from "./ShowDoctor";

function Doctors(props) {
  const dispatch = useDispatch();
  const doctors = useSelector(state => state.reducer.doctor);
  const hospital = useSelector(state => state.reducer.hospital.hospital_list);
  useEffect(() => {
    dispatch(_GET_DOCTOR_LIST());
  }, []);
  const [show, setShow] = useState(false);
  const [showLess, setShowLess] = useState(false);

  const handleClose = () => {
    setShow(false);
    dispatch({ type: CLEAR_CURRENT });
  };
  const handleShow = () => setShow(true);

  const handleCloseLess = () => {
    setShowLess(false);
    dispatch({ type: CLEAR_CURRENT });
  };
  const handleShowLess = () => setShowLess(true);
  return (
    <Container
      style={{
        marginTop: 40,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
      }}
    >
      <ShowDoctor show={showLess} handleClose={handleCloseLess} />
      <EditDoctor show={show} handleClose={handleClose} />
      <Row>
        <Col xs={12} style={{ display: "flex", flexDirection: "column" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Dirección</th>
                <th>Nacimiento</th>
                <th>Tipo de Sangre</th>
                <th>Años de experiencia</th>
                <th>Télefono</th>
                <th>Hospital</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {doctors.doctor_list.map(el => (
                <tr>
                  <td>{el.id}</td>
                  <td>{el.first_name}</td>
                  <td>{el.last_name}</td>
                  <td>{el.address}</td>
                  <td>{el.birth_date}</td>
                  <td>{el.blood_type}</td>
                  <td>{el.experience_years}</td>
                  <td>{el.phone_number}</td>
                  <td>
                    {(_.find(hospital, ["id", el.hospital_id]) || {}).name}
                  </td>
                  <td
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <AiFillEdit
                      style={{ marginRight: 10 }}
                      onClick={() => {
                        dispatch(_GET_CURRENT_DOCTOR(el.id));
                        handleShow();
                      }}
                    />
                    <AiFillDelete
                      style={{ marginRight: 10 }}
                      onClick={() => dispatch(_DELETE_DOCTOR(el.id))}
                    />
                    <AiFillEye
                      onClick={() => {
                        dispatch(_GET_CURRENT_DOCTOR(el.id));
                        handleShowLess();
                      }}
                      style={{ marginRight: 10 }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Button
            variant="success"
            style={{ alignSelf: "flex-end" }}
            onClick={handleShow}
          >
            Añadir
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Doctors;
