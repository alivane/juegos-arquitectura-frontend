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

const Rating1 = (props) => {
  const classes = useStyles();
  const {
    value,
    max,
    title,
    ranking
  } = props;

  return (
    <div className={classes.root}>
      <h2 className="rating_title">
        {title}
      </h2>
      <Rating
        className={classes.star}
        name="half-rating-read"
        value={value}
        defaultValue={5}
        precision={0.5}
        max={max}
        readOnly
      />
      <h4 className="rating_title">
        RANKING DEL NIVEL: {ranking}
      </h4>
    </div>
  );
}

export default Rating1;