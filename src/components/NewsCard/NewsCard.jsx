import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const actualDate = new Date();
const moment = require('moment');

const actualDateFormatted = moment(actualDate).locale('ru').format('DD.MM.YYYY');

const useStyles = makeStyles({
  root: {
    minWidth: 150,
    maxWidth: 500,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function NewsCard({ title, text }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <br />
        <CardActions>
          <Button size="large" variant="contained" color="primary">Delete</Button>
        </CardActions>
        <br />
        <Typography variant="body2" component="p">
          {text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large" variant="contained" color="primary">Read more…</Button>
      </CardActions>
      {actualDateFormatted}
    </Card>
  );
}

export default NewsCard;
