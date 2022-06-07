import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import * as moment from 'moment';

import {
  Button, Card, CardActions, CardContent, Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';

import './newsCard.css';
import { deleteNewsRecordRequest, getNewsRecordRequest } from '../../store/actions';

const useStyles = makeStyles({
  root: {
    minWidth: 300,
    maxWidth: 400,
    margin: 10,
    borderRadius: 20,
    border: '3px solid green',
  },
});

function NewsCard({
  title, text, date, id, showNewsDetails, handleEditClick, handleReadMoreClick,
}) {
  const actualDateFormatted = moment(date).locale('ru').format('DD.MM.YYYY');
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleDelete = () => {
    dispatch(deleteNewsRecordRequest({ id }));
  };

  const handleEdit = () => {
    dispatch(getNewsRecordRequest(id));
    handleEditClick();
  };

  const handleReadMore = () => {
    showNewsDetails(id);
    handleReadMoreClick();
    dispatch(getNewsRecordRequest(id));
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <div className="card-header">
          <div className="header-title">
            <Typography variant="h5" component="h2">{title}</Typography>
          </div>
          <br />
          <div className="header-buttons">
            {/* <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<DeleteIcon />}
              onClick={handleDelete}
            >
              Delete
            </Button> */}
            {/* <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={() => handleEdit()}
            >
              Edit
            </Button> */}
          </div>
        </div>
        <br />
        <Typography variant="body2" component="p">{text.substring(0, 200)}</Typography>
        <br />
        <div className="date">{actualDateFormatted}</div>
      </CardContent>
      <div className="card-footer">
        <CardActions>
          <div className="footer-buttons">
            <Button size="small" variant="contained" color="primary" onClick={handleReadMore}>Read more…</Button>
            <Button variant="contained" color="primary" className={classes.button} onClick={() => handleEdit()}>Edit</Button>
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
        </CardActions>
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
  handleReadMoreClick: PropTypes.func.isRequired,
};
