import React from "react";
import { useState } from "react";
import { Container, Row, Col, Input, Table, Button, FormGroup, Form } from "reactstrap";
import JourneyTable from "./JourneyTable";

const JourneyEntre = ({
  getJourneyInfo,
  setArrival,
  setDeparture,
  setJourneyDate,
  route,
  setRoute,
}) => {
  const [departureValue, setDepartureValue] = useState("");
  const [arrivalValue, setArrivalValue] = useState("");
  const [dateValue, setDateValue] = useState("");

  /**
   * This function works when the form is submit. and updates the states required for the API
   * @param {Event} e
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    setDeparture(departureValue);
    setArrival(arrivalValue);
    setJourneyDate(dateValue);
    getJourneyInfo();
  };

  /**
   * This function clears input fields
   */
  const handleDeleteInput = () => {
    setDepartureValue("");
    setArrivalValue("");
    setDateValue("");
    setRoute("");
  };

  return (
    <Container className="mt-3">
      <h2>Connection Search</h2>
      <Row>
        <Col xs="12" md="4" className="bg-light border p-3">
          {/* <div className="change-cities">
            {" "}
            Change Cities
            <i
              onClick={() => changeCities()}
              className="fa-solid fa-right-left text-primary ms-2"
            ></i>
          </div> */}
          <Form inline>
            <FormGroup className=" me-sm-2 mb-sm-0 d-inline departure-input">
              <Input
                id="departure"
                name="departure"
                placeholder="locating..."
                type="text"
                value={departureValue}
                onChange={(e) => setDepartureValue(e.target.value)}
              />
            </FormGroup>
            <FormGroup className="mb-2 me-sm-2 mb-sm-0 d-inline">
              <Input
                id="arrival"
                name="arrival"
                placeholder="to..."
                type="text"
                value={arrivalValue}
                onChange={(e) => setArrivalValue(e.target.value)}
              />
            </FormGroup>
            <FormGroup className="mb-2 me-sm-2 mb-sm-0 d-inline">
              <Input
                name="date"
                type="datetime-local"
                value={dateValue}
                onChange={(e) => setDateValue(e.target.value)}
              />
            </FormGroup>
            <div className="d-flex justify-content-between">
              <Button color="primary" onClick={(e) => handleSubmit(e)}>
                Search
              </Button>
              <Button color="danger" onClick={handleDeleteInput}>
                Clear
              </Button>
            </div>
          </Form>
          <div className="mt-4">
            <p className="mb-2 text-primary text-center info-use-cities">
              <em>You can use the following cities to find travel</em>
            </p>
            <h5 className="text-center">Some cities in Switzerland</h5>
            <div className="cities-name">
              <ul>
                <li>Bern</li>
                <li>Zurih</li>
                <li>Lozan</li>
              </ul>
              <ul>
                <li>Cenevre</li>
                <li>Basel</li>
                <li>Lugano</li>
              </ul>
              <ul>
                <li>Lucerne</li>
                <li>Schwyz</li>
                <li>Zug</li>
              </ul>
            </div>
          </div>
        </Col>
        <Col xs="12" md="8" className="bg-light border">
          <Table hover>
            <thead>
              <tr>
                <th>Dep & Arv Time</th>
                <th>Journey</th>
                <th>Dep & Arv Platform</th>
              </tr>
            </thead>
            <tbody>
              {route ? (
                <JourneyTable route={route} />
              ) : (
                <h5 className="not-chosen">You have not chosen a route</h5>
              )}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default JourneyEntre;
