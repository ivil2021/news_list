import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as moment from 'moment';

import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import Modal from '@material-ui/core/Modal';
import Pagination from '@material-ui/lab/Pagination';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

import NewsCard from '../../components/NewsCard';
import {
  getNewsRequest, addNewsRecordRequest, setCurrentPage, getNewsRecordRequest, deleteSelectedNews,
} from '../../store/actions';
import './newsList.css';

const actualDate = new Date();

function NewsList() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const actualDateFormatted = moment(actualDate).locale('ru').format('DD.MM.YYYY');
  const list = useSelector((state) => state.news.newsList);
  const currentPage = useSelector((state) => state.news.currentPage);
  const totalPages = useSelector((state) => state.news.totalPages);
  const handlePagination = (event, page) => dispatch(setCurrentPage(page));
  const handleOpen = () => setOpen(true);
  const selectedNews = useSelector((state) => state.news.selectedNews);

  const handleClose = () => {
    if (selectedNews.id) {
      dispatch(deleteSelectedNews()); // DELETE SELECTED NEWS RECORD
    }
    setOpen(false);
  };

  useEffect(() => {
    dispatch(getNewsRequest());
  }, [currentPage]);

  // --- ADD NEWS FROM MODAL WINDOW --- //
  const [newsTitle, setNewsTitle] = useState('');
  const [newsText, setNewsText] = useState('');
  const handleNewsTitle = (event) => setNewsTitle(event.target.value);
  const handleNewsText = (event) => setNewsText(event.target.value);

  const handleSave = () => {
    dispatch(addNewsRecordRequest({
      createdAt: actualDateFormatted,
      title: newsTitle,
      text: newsText,
    }));
    handleClose();
  };

  const handleReadMore = (id) => {
    dispatch(getNewsRecordRequest(id));
    handleOpen(true);
  };
  // --- ADD NEWS FROM MODAL WINDOW --- //

  // --- INPUTS VALIDATION. SAVE BUTTON DISABLING --- //
  const isSaveButtonDisabled = (newsTitle.trim().length === 0 || newsText.trim().length === 0);
  // --- INPUTS VALIDATION. SAVE BUTTON DISABLING --- //

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
            id={item.id}
            date={actualDateFormatted}
            onClick={handleReadMore}
          />
        ))}
      </div>
      <Pagination
        count={totalPages}
        variant="outlined"
        shape="rounded"
        color="secondary"
        onChange={handlePagination}
        page={currentPage}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {selectedNews.id ? (
          <div className="card-modal-window">
            <div className="card-modal-container">
              <div className="card-modal-header">
                <h4>{selectedNews.title}</h4>
                <CardActions>
                  <Button size="small" variant="contained" color="primary" onClick={handleClose}>Close</Button>
                </CardActions>
              </div>
              <div className="card-modal-content">
                <p>{selectedNews.text}</p>
              </div>
              <div className="card-modal-footer">
                <div>{selectedNews.date}</div>
              </div>
            </div>
          </div>
        ) : (
          <div className="modal-window">
            <div className="modal-container">
              <div className="modal-header">
                <TextField id="outlined-basic" label="Enter news title" variant="outlined" onChange={handleNewsTitle} />
                <CardActions>
                  <Button size="small" variant="contained" color="primary" onClick={handleClose}>Close</Button>
                </CardActions>
              </div>
              <TextareaAutosize aria-label="minimum height" minRows={3} placeholder="Enter news text" onChange={handleNewsText} />
              ;
              <div className="modal-footer">
                <CardActions>
                  <Button size="small" variant="contained" color="primary" onClick={handleSave} disabled={isSaveButtonDisabled}>Save</Button>
                </CardActions>
              </div>

            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default NewsList;
