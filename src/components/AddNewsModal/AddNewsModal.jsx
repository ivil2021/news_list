/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TextField from '@mui/material/TextField';
import {
  Modal, TextareaAutosize, CardActions, Button,
} from '@material-ui/core';

import {
  addNewsRecordRequest, updateNewsRecordRequest,
} from '../../store/actions';

function AddNewsModal({
  open,
  onClose,
}) {
  const dispatch = useDispatch();
  const selectedNews = useSelector((state) => state.news.selectedNews);

  const [newsTitle, setNewsTitle] = useState('');
  const [newsText, setNewsText] = useState('');
  const handleNewsTitle = (event) => setNewsTitle(event.target.value);
  const handleNewsText = (event) => setNewsText(event.target.value);
  const isSaveButtonDisabled = (newsTitle.trim().length === 0 || newsText.trim().length === 0);

  const handleClick = () => {
    if (selectedNews.id) {
      dispatch(updateNewsRecordRequest({
        news_title: newsTitle,
        news_text: newsText,
        id: selectedNews.id,
      }));
      // call update action
    } else {
      dispatch(addNewsRecordRequest({
        news_title: newsTitle,
        news_text: newsText,
      }));
    }
    onClose();
  };

  // console.log(newsTitle);

  useEffect(() => {
    // console.log('=================');
    setNewsTitle(selectedNews.news_title || '');
    setNewsText(selectedNews.news_text || '');
  }, [selectedNews.news_title, selectedNews.news_text]);

  return (
    <Modal
      open={open}
      onClose={onClose}
    >
      <div className="modal-window">
        <div className="modal-container">
          <div className="modal-header">
            <TextField id="outlined-basic" label="Enter news title" variant="outlined" value={newsTitle} onChange={handleNewsTitle} />
            <CardActions>
              <Button size="small" variant="contained" color="primary" onClick={onClose}>Close</Button>
            </CardActions>
          </div>
          <TextareaAutosize aria-label="minimum height" value={newsText} minRows={3} placeholder="Enter news text" onChange={handleNewsText} />
          ;
          <div className="modal-footer">
            <CardActions>
              <Button size="small" variant="contained" color="primary" disabled={isSaveButtonDisabled} onClick={handleClick}>Save</Button>
            </CardActions>
          </div>

        </div>
      </div>
    </Modal>
  );
}

export default AddNewsModal;
