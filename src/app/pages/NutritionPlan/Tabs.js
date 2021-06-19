import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { Form, Col } from "react-bootstrap";

import Exercise from "../WorkoutDetails/Exercise";
import NutritionForm from "./NutritionForm";
import WorkoutForm from "../WorkoutDetails/WorkoutForm";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // backgroundColor: "blue",
    width: "50%",
  },
  tab: {
    backgroundColor: "transparent",
  },
}));

export default function NavTabs({ workout }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.tab}>
        <Tabs variant="fullWidth" value={value} onChange={handleChange}>
          <LinkTab label="Search" href="/drafts" />
          <LinkTab label="Recently Used" href="/trash" />
          <LinkTab label="Frequently Used" href="/spam" />
          <LinkTab label="Create New" href="/spam" />
        </Tabs>
      </AppBar>
      {value === 0 && (
        <TabContainer>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Control width="100%" placeholder="Search"></Form.Control>
            </Form.Group>
          </Form.Row>
          {workout && (
            <>
              <Form.Row>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label={<Exercise />} />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label={<Exercise />} />
                </Form.Group>
              </Form.Row>
            </>
          )}
        </TabContainer>
      )}
      {value === 3 && !workout && (
        <div style={{ width: "100%", margin: "auto" }}>
          <TabContainer>
            <NutritionForm />
          </TabContainer>
        </div>
      )}
      {value === 3 && workout && (
        <div style={{ width: "100%", margin: "auto" }}>
          <TabContainer>
            <WorkoutForm />
          </TabContainer>
        </div>
      )}
    </div>
  );
}
