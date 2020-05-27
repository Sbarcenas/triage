import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  _DELETE_TRIAGE,
  _GET_CURRENT_TRIAGE,
  _GET_DOCTOR_LIST,
  _GET_PATIENT_LIST,
  _GET_TRIAGE_LIST
} from "../../redux/actions/actions";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { AiFillEdit, AiFillDelete, AiFillEye } from "react-icons/ai";
import EditDoctor from "./EditTriage";
import _ from "lodash";
import { CLEAR_CURRENT } from "../../redux/types";
import ShowDoctor from "./ShowTriage";

function Patient(props) {
  const dispatch = useDispatch();
  const patients = useSelector(state => state.reducer.patient.patient_list);
    const doctors = useSelector(state => state.reducer.doctor.doctor_list);

    const triages = useSelector(state => state.reducer.triage);
  const hospital = useSelector(state => state.reducer.hospital.hospital_list);
  useEffect(() => {
    dispatch(_GET_TRIAGE_LIST());
    dispatch(_GET_PATIENT_LIST());
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
                <th>Motivo de la consulta</th>
                <th>Diagnostico</th>
                <th>Sospechoso para covid</th>
                <th>Doctor</th>
                <th>Paciente</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {triages.triage_list.map(el => (
                <tr>
                  <td>{el.id}</td>
                  <td>{el.consult_reason}</td>
                  <td>{el.Diagnostic}</td>
                  <td>{el.suspect_covid}</td>
                  <td>
                    {(_.find(doctors, ["id", el.doctor_id]) || {}).first_name}
                  </td>
                  <td>
                    {(_.find(patients, ["id", el.patient_id]) || {}).first_name}
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
                        dispatch(_GET_CURRENT_TRIAGE(el.id));
                        handleShow();
                      }}
                    />
                    <AiFillDelete
                      style={{ marginRight: 10 }}
                      onClick={() => dispatch(_DELETE_TRIAGE(el.id))}
                    />
                    <AiFillEye
                      onClick={() => {
                        dispatch(_GET_CURRENT_TRIAGE(el.id));
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
