import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import * as moment from 'moment';

import {
  Button, Card, CardActions, CardContent, Typography,
} from '@material-ui/core';
// import Button from '@material-ui/core/Button';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';

import './newsCard.css';
// eslint-disable-next-line no-unused-vars
import { deleteNewsRecordRequest, updateNewsRecordRequest, getNewsRecordRequest } from '../../store/actions';

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
  title, text, date, id, showNewsDetails, handleEditClick,
}) {
  const actualDateFormatted = moment(date).locale('ru').format('DD.MM.YYYY');
  const dispatch = useDispatch();
  const classes = useStyles();

  // --- DELETE NEWS RECORD BY ID --- //
  const handleDelete = () => {
    dispatch(deleteNewsRecordRequest({ id }));
  };

  const handleEdit = () => {
    dispatch(getNewsRecordRequest(id));
    handleEditClick();
  };

  // --- DELETE NEWS RECORD BY ID --- //

  // --- EDIT NEWS RECORD --- //
  // const handleEdit = () => {
  //   console.log('edit');
  //   console.log('id: ', id);
  //   // dispatch(updateNewsRecordRequest({ id }));
  // };
  // --- EDIT NEWS RECORD --- //

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
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => handleEdit()}
          >
            Edit
          </Button>
        </div>
        <br />
        <Typography variant="body2" component="p">
          {text.substring(0, 200)}
        </Typography>
      </CardContent>
      <div className="card-footer">
        <CardActions>
          <Button size="small" variant="contained" color="primary" onClick={() => showNewsDetails(id)}>Read more…</Button>
        </CardActions>
        <div>{actualDateFormatted}</div>
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
  showNewsDetails: PropTypes.func.isRequired,
  handleEditClick: PropTypes.func.isRequired,
};
