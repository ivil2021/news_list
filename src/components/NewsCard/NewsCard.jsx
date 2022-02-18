import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import './newsCard.css';

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

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
          {text.substring(0, 200)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large" variant="contained" color="primary" onClick={handleOpen}>Read more…</Button>
      </CardActions>
      {actualDateFormatted}

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
              <button type="button" onClick={handleClose}>
                Close
              </button>
            </div>

            <div className="card-modal-content">
              <p>{text}</p>
            </div>

            <div className="card-modal-footer">
              <p>Date</p>
            </div>

          </div>

          <div className="news-text" />
        </div>
      </Modal>
    </Card>
  );
}

export default NewsCard;
