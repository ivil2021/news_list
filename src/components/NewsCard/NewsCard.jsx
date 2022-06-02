import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import './newsCard.css';
import { deleteNewsRecordRequest } from '../../store/actions';

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    maxWidth: 400,
    margin: 10,
    borderRadius: 20,
    border: '3px solid green',
  },
});

function NewsCard({
  title, text, date, id, onClick,
}) {
  const dispatch = useDispatch();
  const classes = useStyles();

  // --- DELETE NEWS RECORD BY ID --- //
  const handleDelete = () => {
    dispatch(deleteNewsRecordRequest({ id }));
  };
  // --- DELETE NEWS RECORD BY ID --- //

  return (
    <Card className={classes.root}>
      <CardContent>
        <div className="card-header">
          <Typography variant="h5" component="h2">
            {title}
          </Typography>
          <br />
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<DeleteIcon />}
            onClick={handleDelete}
          >
            Delete
          </Button>
        </div>
        <br />
        <Typography variant="body2" component="p">
          {text.substring(0, 200)}
        </Typography>
      </CardContent>
      <div className="card-footer">
        <CardActions>
          <Button size="small" variant="contained" color="primary" onClick={() => onClick(id)}>Read more…</Button>
        </CardActions>
        <div>{date}</div>
      </div>
    </Card>
  );
}

export default NewsCard;

NewsCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
