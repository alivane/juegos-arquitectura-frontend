import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems:'center',
    '& > * + *': {
      marginTop: theme.spacing(1),
    },
  },
  star:{
    color:'#BA9B42',
    stroke:'#BA9B42',
    fontSize:'20px',
  }
}));

export default function Rating1() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <h1 className="rating_title">SIGUE MEJORANDO!</h1>
      <Rating className={classes.star} name="half-rating-read" value={1.5} defaultValue={5} precision={0.5} readOnly />
    </div>
  );
}
