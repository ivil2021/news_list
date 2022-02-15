import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// eslint-disable-next-line no-undef
// const date = new Date();
// console.log(date.getMonth());
// alert( now );

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

function NewsCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Principal Web Analyst
        </Typography>
        <br />
        <CardActions>
          <Button size="large" variant="contained" color="primary">Delete</Button>
        </CardActions>
        <br />
        <Typography variant="body2" component="p">
          Nostrum minima et ab eos sit architecto commodi est.
          Nobis corporis corporis doloribus reprehenderit dolore.
          Dolorum expedita voluptatem. Quo ea vero a tempora repellendus iusto.
          \n \rEa itaque aut velit veniam ipsa et nihil. Est rerum adipisci
          corporis rerum est nostrum at. Corporis consectetur quis.
          Qui maiores dignissimos.\n \rUt sit in. Inventore aut nihil. Minima et et eaque dolorum.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large" variant="contained" color="primary">Read more…</Button>
      </CardActions>
      2022-02-10T23:55:47.534Z
    </Card>
  );
}

export default NewsCard;
