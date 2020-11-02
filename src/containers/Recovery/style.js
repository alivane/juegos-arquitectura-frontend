
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  body: {
    backgroundColor: "tomato",
    backgroundSize: "100vw 100vh",
    minHeight: "100vh",
    height: "auto",
    width: "auto",
    display: "flex",
  },
  t1: {
    maxWidth: "400px",
    padding: "2em 0em",
    display: "block",
    margin: "auto",
  },

  t3: {
    maxWidth: "400px",
    padding: "2em 0em",
    display: "block",
    margin: "auto",
  },

  t2: {
    display: "flex",
    marginLeft: 0,
  },
  t4: {
    color: "black",
    fontWeight: 700,
  },

  t5: {
    color: "black",
  },
  h1: {
    textAlign: "center",
    maxWidth: "300px",
    margin: "auto",
    color: "white",
  },
  // CAMBIAR INPUTS DE RECOVERY Y DEJARLO COMO EL INPUT DE LOGIN
  // FONDOS ANIMADOS
}));