import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import NewsCard from '../../components/NewsCard';
import PaginationComponent from '../../components/PaginationComponent';
import './newsList.css';

function NewsList({ list }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Add news
      </button>
      <br />

      {list.map((item) => (
        <NewsCard
          title={item.title}
          text={item.text}
          key={item.id}
        />
      ))}
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
              <button type="button" onClick={handleClose}>
                Close
              </button>
            </div>

            <div className="modal-content">
              <textarea name="" id="" cols="60" rows="10" />
            </div>

            <div className="modal-footer">
              <CardActions>
                <Button size="large" variant="contained" color="primary">Save</Button>
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
