import React from "react";
import {
  Form,
  Col,
  ButtonToolbar,
  Dropdown,
  DropdownButton,
  Button,
} from "react-bootstrap";
import "./ProgramDetails.css";

const ProgramDetails = () => {
  return (
    <>
      <div style={{ backgroundColor: "white", padding: "15px" }}>
        <h3 className="program-name">Program Name</h3>
        <div className="week">
          <div className="week-name">
            <h4>Week 1</h4>
            <i class="fas fa-trash-alt"></i>
          </div>
          <Form.Row>
            <Form.Group as={Col} controlId="exampleForm.ControlSelect1">
              <Form.Control placeholder="Day 1" disabled />

              <ButtonToolbar style={{ margin: 10 }}>
                <DropdownButton
                  drop="up"
                  variant="primary"
                  title={`Add new`}
                  id={`dropdown-button-drop-up`}
                  key="up"
                >
                  <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                  <Dropdown.Item eventKey="3">
                    Something else here
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </DropdownButton>
              </ButtonToolbar>
            </Form.Group>
            <Form.Group as={Col} controlId="exampleForm.ControlSelect1">
              <Form.Control placeholder="Day 2" disabled />
              <ButtonToolbar style={{ margin: 10 }}>
                <DropdownButton
                  drop="up"
                  variant="primary"
                  title={`Add new`}
                  id={`dropdown-button-drop-up`}
                  key="up"
                >
                  <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                  <Dropdown.Item eventKey="3">
                    Something else here
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </DropdownButton>
              </ButtonToolbar>
            </Form.Group>
            <Form.Group as={Col} controlId="exampleForm.ControlSelect1">
              <Form.Control placeholder="Day 3" disabled />
              <ButtonToolbar style={{ margin: 10 }}>
                <DropdownButton
                  drop="up"
                  variant="primary"
                  title={`Add new`}
                  id={`dropdown-button-drop-up`}
                  key="up"
                >
                  <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                  <Dropdown.Item eventKey="3">
                    Something else here
                  </Dropdown.Item>

                  <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </DropdownButton>
              </ButtonToolbar>
            </Form.Group>
            <Form.Group as={Col} controlId="exampleForm.ControlSelect1">
              <Form.Control placeholder="Day 4" disabled />
              <ButtonToolbar style={{ margin: 10 }}>
                <DropdownButton
                  drop="up"
                  variant="primary"
                  title={`Add new`}
                  id={`dropdown-button-drop-up`}
                  key="up"
                >
                  <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                  <Dropdown.Item eventKey="3">
                    Something else here
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </DropdownButton>
              </ButtonToolbar>
            </Form.Group>
            <Form.Group as={Col} controlId="exampleForm.ControlSelect1">
              <Form.Control placeholder="Day 5" disabled />
              <ButtonToolbar style={{ margin: 10 }}>
                <DropdownButton
                  drop="up"
                  variant="primary"
                  title={`Add new`}
                  id={`dropdown-button-drop-up`}
                  key="up"
                >
                  <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                  <Dropdown.Item eventKey="3">
                    Something else here
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </DropdownButton>
              </ButtonToolbar>
            </Form.Group>
            <Form.Group as={Col} controlId="exampleForm.ControlSelect1">
              <Form.Control placeholder="Day 6" disabled />
              <ButtonToolbar style={{ margin: 10 }}>
                <DropdownButton
                  drop="up"
                  variant="primary"
                  title={`Add new`}
                  id={`dropdown-button-drop-up`}
                  key="up"
                >
                  <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                  <Dropdown.Item eventKey="3">
                    Something else here
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </DropdownButton>
              </ButtonToolbar>
            </Form.Group>
            <Form.Group as={Col} controlId="exampleForm.ControlSelect1">
              <Form.Control placeholder="Day 7" disabled />
              <ButtonToolbar style={{ margin: 10 }}>
                <DropdownButton
                  drop="up"
                  variant="primary"
                  title={`Add new`}
                  id={`dropdown-button-drop-up`}
                  key="up"
                >
                  <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                  <Dropdown.Item eventKey="3">
                    Something else here
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </DropdownButton>
              </ButtonToolbar>
            </Form.Group>
          </Form.Row>
        </div>
      </div>
      <div className="program-button">
        <Button variant="outline-primary">Add Week</Button>
      </div>
      <div className="program-button save">
        <Button variant="outline-primary">Save Changes</Button>
      </div>
    </>
  );
};

export default ProgramDetails;
