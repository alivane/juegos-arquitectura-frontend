import React from "react";
import { withStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const AntSwitch = withStyles((theme) => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: "flex",
  },
  switchBase: {
    padding: 2,
    color: "white",
    "&$checked": {
      transform: "translateX(12px)",
      color: "white",
      "& + $track": {
        opacity: 1,
        backgroundColor: "pink",
        borderColor: "pink",
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: "none",
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: "cyan",
  },
  checked: {},
}))(Switch);

const Sw = (props) => {
  const { state, handleChange } = props;

  return (
    <FormGroup className="label1_1">
      <Typography component="div">
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item className="l_men">
            Masculino
          </Grid>
          <Grid item>
            <AntSwitch
              checked={state.gender}
              onChange={handleChange}
              name="gender"
            />
          </Grid>
          <Grid item className="l_woman">
            Femenino
          </Grid>
        </Grid>
      </Typography>
    </FormGroup>
  );
};

export default Sw;
