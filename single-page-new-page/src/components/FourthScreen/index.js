import React from "react";
import WindowBox from "./WindowBox";

import Container from "@material-ui/core/Container";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import doorsLogo from "./assets/logo-drzwi.png";
import doorsNames from "./doorsNames";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/FourthScreenStyles";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

function FourthScreen({ classes }) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Container className={classes.root}>
      <Container className={classes.paper}>
        <WindowBox
          url={doorsLogo}
          title="Drzwi"
          desc="Lorem lorem lorem lorem"
        />
      </Container>
      <AppBar position="static" color="default">
        <Tabs value={value} onChange={handleChange} variant="fullWidth">
          {doorsNames.map(({ title }, index) => (
            <Tab label={title} {...a11yProps(index)} />
          ))}
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        {doorsNames.map(({ url, logo, title, desc }, index) => (
          <TabPanel value={value} index={index} dir={theme.direction}>
            <WindowBox url={url} logo={logo} title={title} desc={desc} />
          </TabPanel>
        ))}
      </SwipeableViews>
    </Container>
  );
}

export default withStyles(styles)(FourthScreen);
