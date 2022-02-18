import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import NewsCard from '../../components/NewsCard';
import PaginationComponent from '../../components/PaginationComponent';
import './modal.css';

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
        Open Modal
      </button>
      <br />

      {list.map((item) => <NewsCard title={item.title} text={item.text} key={item.id} />)}
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
              <h4>{list[0].title}</h4>
              <button type="button" onClick={handleClose}>
                Close
              </button>
            </div>

            <div className="modal-content">
              <p>Nostrum minima et ab eos sit architecto commodi est. Nobis corporis corporisdoloribus reprehenderit dolore. Dolorum expedita voluptatem. Quo ea vero a tempora repellendus iusto.\n \rEa itaque aut velit veniam ipsa et nihil. Est rerum adipisci corporis rerum est nostrum at. Corporis consectetur quis. Qui maiores dignissimos.\n \rUt sit in. Inventore aut nihil. Minima et et eaque dolorum.</p>
              {/* <p>{title}</p> */}
            </div>

            <div className="modal-footer">
              <p>Date</p>
            </div>

          </div>

          <div className="news-text" />
        </div>
      </Modal>
    </div>
  );
}

export default NewsList;
