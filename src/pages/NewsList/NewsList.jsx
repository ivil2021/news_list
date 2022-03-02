import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import Modal from '@material-ui/core/Modal';
import * as moment from 'moment';

import NewsCard from '../../components/NewsCard';
import PaginationComponent from '../../components/PaginationComponent';
import { getNewsRequest } from '../../store/actions';
import './newsList.css';

const actualDate = new Date();

function NewsList() {
  const [open, setOpen] = useState(false);
  const list = useSelector((state) => state.news.newsList);
  const actualDateFormatted = moment(actualDate).locale('ru').format('DD.MM.YYYY');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewsRequest());
  }, []);

  return (
    <div>
      <CardActions>
        <Button size="small" variant="contained" color="primary" onClick={handleOpen}>Add news</Button>
      </CardActions>
      <div className="news-container">
        {list.length && list.map((item) => (
          <NewsCard
            title={item.title}
            text={item.text}
            key={item.id}
            date={actualDateFormatted}
          />
        ))}
      </div>
      <PaginationComponent />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        title="Title" // TODO: change on real data
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
