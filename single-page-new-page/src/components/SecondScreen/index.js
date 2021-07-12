import React from "react";
import WindowBox from "./WindowBox";

import windowsNames from "./windowsNames";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/SecondScreenStyles";

function SecondScreen({ classes }) {
  return (
    <div className={classes.root}>
      <div className={classes.SecondScreenTop}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
          voluptates. Ut minus mollitia quidem ex sint illum exercitationem
          earum, expedita assumenda maxime. A distinctio voluptatum suscipit
          asperiores, similique quidem aut.
        </p>
      </div>
      <div className={classes.SecondScreenBottom}>
        {windowsNames.map(({ id, url, logo, title, desc }) => (
          <WindowBox key={id} url={url} logo={logo} title={title} desc={desc} />
        ))}
      </div>
    </div>
  );
}

export default withStyles(styles)(SecondScreen);
