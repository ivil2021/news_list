import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './newsCard.css';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 150,
    maxWidth: 500,
    margin: 10,
    borderRadius: 20,
  },
});

function NewsCard({ title, text, date }) {
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
          <Button size="small" variant="contained" color="primary" onClick={handleOpen}>Read more…</Button>
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
  title: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
};

NewsCard.defaultProps = {
  title: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
};
