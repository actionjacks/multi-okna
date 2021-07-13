import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/WindowBoxStyles";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function WindowBox({ url, logo, title, desc, classes }) {
  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.cardArea}>
        <CardMedia
          component="img"
          alt={`${title} logo`}
          className={classes.media}
          image={url}
          title={title}
        />
        <CardContent>
          {logo ? (
            <CardMedia
              component="img"
              alt={`${title} logo`}
              className={classes.mediaLogo}
              image={logo}
            />
          ) : (
            <CardMedia
              alt={`${title} logo`}
              className={classes.mediaLogo}
              image={logo}
            />
          )}
          <Typography
            className={classes.title}
            gutterBottom
            variant="h5"
            component="h2"
          >
            {title}
          </Typography>
          <Typography
            className={classes.desc}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default withStyles(styles)(WindowBox);
