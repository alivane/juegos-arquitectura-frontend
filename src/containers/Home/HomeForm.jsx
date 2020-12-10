import React from "react";
import Button from "@material-ui/core/Button";
import { useStyles } from "./style";
import Title from "./title";
import "./style.css";
export default function HomeForm() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.bgh}>
        <div className="t2">
          <Title />
          <div>
            <Button
              variant="contained"
              color="primary"
              role="link"
              href="login"
              classes={{
                root: classes.root,
              }}
            >
              INGRESO
            </Button>
          </div>
          <div>
            <Button
              variant="contained"
              color="primary"
              role="link"
              href="register"
              classes={{
                root: classes.root,
              }}
            >
              Registrate
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
