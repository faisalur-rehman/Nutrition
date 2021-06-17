import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { Form, Col } from "react-bootstrap";

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

export default function NavTabs() {
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
              <Form.Control placeholder="Search"></Form.Control>
            </Form.Group>
          </Form.Row>
        </TabContainer>
      )}
    </div>
  );
}
