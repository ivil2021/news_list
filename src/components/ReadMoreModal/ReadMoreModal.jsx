/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import * as moment from 'moment';

import {
  Modal, CardActions, Button,
} from '@material-ui/core';

function ReadMoreModal({
  open,
  onClose,
}) {
  const selectedNews = useSelector((state) => state.news.selectedNews);

  // console.log('selectedNews: ', selectedNews);
  // console.log('selectedNews.id: ', selectedNews.id);
  // console.log('selectedNews.news_title: ', selectedNews.news_title);
  // console.log('selectedNews.news_text: ', selectedNews.news_text);
  // console.log('selectedNews.createdAt: ', selectedNews.createdAt);

  const actualDateFormatted = moment(selectedNews.createdAt).locale('ru').format('DD.MM.YYYY');
  // console.log('actualDateFormatted: ', actualDateFormatted);

  // selectedNews.news_title

  const handleClick = () => {
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div className="card-modal-window">
        <div className="card-modal-container">
          <div className="card-modal-header">
            <h4>{selectedNews.news_title}</h4>
            <CardActions>
              <Button size="small" variant="contained" color="primary" onClick={handleClick}>Close</Button>
            </CardActions>
          </div>
          <div className="card-modal-content">
            <p>{selectedNews.news_text}</p>
          </div>
          <div className="card-modal-footer">
            <div>{actualDateFormatted}</div>
          </div>
        </div>
        <div className="news-text" />
      </div>
    </Modal>
  );
}

export default ReadMoreModal;
