import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';

import './newsCard.css';
import { getNewsRecordRequest, deleteNewsRecordRequest } from '../../store/actions';

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
  title, text, date, id,
}) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleReadMore = () => {
    dispatch(getNewsRecordRequest(id));
    handleOpen(true);
  };

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
          <Button size="small" variant="contained" color="primary" onClick={handleReadMore}>Read more…</Button>
        </CardActions>
        <div>{date}</div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="card-modal-window">
          <div className="card-modal-container">

            <div className="card-modal-header">
              <h4>{title}</h4>
              <CardActions>
                <Button size="small" variant="contained" color="primary" onClick={handleClose}>Close</Button>
              </CardActions>
            </div>

            <div className="card-modal-content">
              <p>{text}</p>
            </div>

            <div className="card-modal-footer">
              <div>{date}</div>
            </div>

          </div>

          <div className="news-text" />
        </div>
      </Modal>
    </Card>
  );
}

export default NewsCard;

NewsCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
