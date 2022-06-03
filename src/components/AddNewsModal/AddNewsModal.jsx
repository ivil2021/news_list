/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import {
  Modal, TextareaAutosize, CardActions, Button,
} from '@material-ui/core';
// eslint-disable-next-line no-unused-vars
import { useDispatch, useSelector } from 'react-redux';
import {
  addNewsRecordRequest,
} from '../../store/actions';

function AddNewsModal({
  open,
  onClose,
  selectedNews,
}) {
  const dispatch = useDispatch();
  //   const selectedNews = useSelector((state) => state.news.selectedNews);

  const [newsTitle, setNewsTitle] = useState(selectedNews.news_title);
  const [newsText, setNewsText] = useState(selectedNews.news_text);
  const handleNewsTitle = (event) => setNewsTitle(event.target.value);
  const handleNewsText = (event) => setNewsText(event.target.value);
  const isSaveButtonDisabled = (newsTitle.trim().length === 0 || newsText.trim().length === 0);

  const handleClick = () => {
    if (selectedNews.id) {
      // call update action
    }
    dispatch(addNewsRecordRequest({
      news_title: newsTitle,
      news_text: newsText,
    }));
    onClose();
  };

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
              <Button size="small" variant="contained" color="primary" onClick={handleClick} disabled={isSaveButtonDisabled}>Save</Button>
            </CardActions>
          </div>

        </div>
      </div>
    </Modal>
  );
}

export default AddNewsModal;
