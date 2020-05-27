import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  _DELETE_PATIENT,
  _GET_CURRENT_PATIENT,
  _GET_PATIENT_LIST
} from "../../redux/actions/actions";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { AiFillEdit, AiFillDelete, AiFillEye } from "react-icons/ai";
import EditDoctor from "./EditPatient";
import _ from "lodash";
import { CLEAR_CURRENT } from "../../redux/types";
import ShowDoctor from "./ShowPatient";

function Patient(props) {
  const dispatch = useDispatch();
  const patients = useSelector(state => state.reducer.patient);
  const hospital = useSelector(state => state.reducer.hospital.hospital_list);
  useEffect(() => {
    dispatch(_GET_PATIENT_LIST());
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
                <th>Motivo de la consulta</th>
                <th>Diagnostico</th>
                <th>Sospechoso para covid</th>
                <th>Doctor</th>
                <th>Paciente</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {patients.patient_list.map(el => (
                <tr>
                  <td>{el.id}</td>
                  <td>{el.first_name}</td>
                  <td>{el.last_name}</td>
                  <td>{el.dni}</td>
                  <td>{el.address}</td>
                  <td>{el.birth_date}</td>
                  <td>{el.gender}</td>

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
                        dispatch(_GET_CURRENT_PATIENT(el.id));
                        handleShow();
                      }}
                    />
                    <AiFillDelete
                      style={{ marginRight: 10 }}
                      onClick={() => dispatch(_DELETE_PATIENT(el.id))}
                    />
                    <AiFillEye
                      onClick={() => {
                        dispatch(_GET_CURRENT_PATIENT(el.id));
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

export default Patient;
