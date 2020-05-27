import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  _DELETE_HOSPITAL,
  _GET_CURRENT_HOSPITAL,
  _GET_HOSPITAL_LIST
} from "../../redux/actions/actions";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { AiFillEdit, AiFillDelete, AiFillEye } from "react-icons/ai";
import EditDoctor from "./EditHospital";
import { CLEAR_CURRENT } from "../../redux/types";
import ShowHospital from "./ShowHospital";

function Hospitals(props) {
  const dispatch = useDispatch();
  const hospital = useSelector(state => state.reducer.hospital);
  useEffect(() => {
    dispatch(_GET_HOSPITAL_LIST());
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
      <EditDoctor show={show} handleClose={handleClose} />
      <ShowHospital show={showLess} handleClose={handleCloseLess} />
      <Row>
        <Col xs={12} style={{ display: "flex", flexDirection: "column" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Nit</th>
                <th>Representante</th>
                <th>Dirección</th>
                <th>Télefono</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {hospital.hospital_list.map(el => (
                <tr>
                  <td>{el.id}</td>
                  <td>{el.name}</td>
                  <td>{el.nit}</td>
                  <td>{el.legal_representative}</td>
                  <td>{el.address}</td>
                  <td>{el.phone_number}</td>
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
                        dispatch(_GET_CURRENT_HOSPITAL(el.id));
                        handleShow();
                      }}
                    />
                    <AiFillDelete
                      style={{ marginRight: 10 }}
                      onClick={() => dispatch(_DELETE_HOSPITAL(el.id))}
                    />
                    <AiFillEye
                      onClick={() => {
                        dispatch(_GET_CURRENT_HOSPITAL(el.id));
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

export default Hospitals;
