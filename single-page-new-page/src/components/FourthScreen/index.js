import React from "react";
import WindowBox from "./WindowBox";

import Container from "@material-ui/core/Container";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import doorsLogo from "./assets/logo-drzwi.png";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/FourthScreenStyles";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

function FouthScreen({ classes }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container className={classes.root}>
      <WindowBox url={doorsLogo} title="Drzwi" desc="Lorem lorem lorem lorem" />
      <Container fixed className={classes.tabs}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          // className={classes.tabs}
        >
          <Tab className={classes.tab} label="Item One" {...a11yProps(0)} />
          <Tab className={classes.tab} label="Item Two" {...a11yProps(1)} />
          <Tab className={classes.tab} label="Item Three" {...a11yProps(2)} />
          <Tab className={classes.tab} label="Item Four" {...a11yProps(3)} />
          <Tab className={classes.tab} label="Item Five" {...a11yProps(4)} />
          <Tab className={classes.tab} label="Item Six" {...a11yProps(5)} />
          <Tab className={classes.tab} label="Item Seven" {...a11yProps(6)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Four
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item Five
        </TabPanel>
        <TabPanel value={value} index={5}>
          Item Six
        </TabPanel>
        <TabPanel value={value} index={6}>
          Item Seven
        </TabPanel>
      </Container>
    </Container>
  );
}

export default withStyles(styles)(FouthScreen);
