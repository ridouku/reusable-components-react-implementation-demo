/* istanbul ignore file */
import React from "react";
import { Button, Card, CardContent, Grid } from "@material-ui/core";
import logo from "../../logo.svg";
import { useDemoState } from "./state/useDemoState";
import { Modal } from "../../components/Modal/modal";
import "../../App.css";

export const DemoSection: React.FC = () => {
  const { showModal, actions } = useDemoState();

  return (
    <React.Fragment>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Click the button and see the magic</p>
          <a
            className="App-link"
            href="https://ridouku.medium.com/create-and-publish-your-own-components-with-react-and-gulp-63a8f27e5571"
            target="_blank"
            rel="noopener noreferrer"
          >
            Reusable React Components Demo
          </a>
          <Grid
            container
            spacing={2}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ paddingTop: 50 }}
          >
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Button onClick={actions.handleOpenModal}>Open Modal</Button>
                  <Modal
                    showModal={showModal}
                    handleCloseModal={actions.handleOpenModal}
                  />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </header>
      </div>
    </React.Fragment>
  );
};
