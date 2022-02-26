import React from 'react';
import PropTypes from 'prop-types';
import './newsList.css';

import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import Modal from '@material-ui/core/Modal';

import NewsCard from '../../components/NewsCard';
import PaginationComponent from '../../components/PaginationComponent';

function NewsList({
  list, date, open, setOpen,
}) {
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <CardActions>
        <Button size="small" variant="contained" color="primary" onClick={handleOpen}>Add news</Button>
      </CardActions>
      <div className="news-container">
        {list.map((item) => (
          <NewsCard
            title={item.title}
            text={item.text}
            key={item.id}
            date={date}
          />
        ))}
      </div>
      <PaginationComponent />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        title={list[0].title}
      >
        <div className="modal-window">
          <div className="modal-container">

            <div className="modal-header">
              <input type="text" size={20} />

              <CardActions>
                <Button size="small" variant="contained" color="primary" onClick={handleClose}>Close</Button>
              </CardActions>
            </div>

            <div className="modal-content">
              <textarea name="" id="" cols="60" rows="10" />
            </div>

            <div className="modal-footer">
              <CardActions>
                <Button size="small" variant="contained" color="primary">Save</Button>
              </CardActions>
            </div>

          </div>

          <div className="news-text" />
        </div>
      </Modal>
    </div>
  );
}

export default NewsList;

NewsList.propTypes = {
  list: PropTypes.arrayOf(),
  date: PropTypes.string,
  open: PropTypes.bool,
  setOpen: PropTypes.func,
};

NewsList.defaultProps = {
  list: PropTypes.arrayOf(),
  date: PropTypes.string,
  open: PropTypes.bool,
  setOpen: PropTypes.func,
};
