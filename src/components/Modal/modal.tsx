import React from "react";
import { ModalLayout } from "reusable-components-react-demo/modal";
import { ModalHeader } from "reusable-components-react-demo/modal-header";
import {
  ButtonBase,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";

import logo from "../../images/logo512.png";

export interface ModalProps {
  showModal: boolean;
  handleCloseModal: () => void;
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

export const Modal: React.FC<ModalProps> = (props: ModalProps) => {
  const classes = useStyles();
  const header = (
    <ModalHeader tittle={"Hey I'm modal"} highlightValue={"This is a demo"} />
  );
  const body = (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={logo} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Demo body element
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Full resolution 1920x1080 • JPEG
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: 1030114
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: "pointer" }}>
                  Remove
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$19.00</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
  return (
    <React.Fragment>
      <ModalLayout
        header={header}
        body={body}
        openModal={props.showModal}
        onCloseModal={props.handleCloseModal}
        transition={"left"}
      />
    </React.Fragment>
  );
};
