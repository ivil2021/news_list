/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button, CardActions } from '@material-ui/core';
// import Button from '@material-ui/core/Button';
// import CardActions from '@material-ui/core/CardActions';
import Pagination from '@material-ui/lab/Pagination';

import NewsCard from '../../components/NewsCard';
import {
  // eslint-disable-next-line no-unused-vars
  getNewsRequest, setCurrentPage, getNewsRecordRequest, deleteSelectedNews,
} from '../../store/actions';
import './newsList.css';
import AddNewsModal from '../../components/AddNewsModal';

function NewsList() {
  const dispatch = useDispatch();
  const [addNewsModalState, setAddNewsModalState] = useState(false);
  // const totalPages = useSelector((state) => state.news.newsAmount);
  const list = useSelector((state) => state.news.newsList);
  const currentPage = useSelector((state) => state.news.currentPage);
  const totalPages = useSelector((state) => state.news.totalPages);
  const selectedNews = useSelector((state) => state.news.selectedNews);

  useEffect(() => {
    dispatch(getNewsRequest());
  }, [currentPage]);

  const handlePagination = (event, page) => dispatch(setCurrentPage(page));
  const handleOpen = () => setAddNewsModalState(true);

  const handleClose = () => {
    if (selectedNews.id) {
      dispatch(deleteSelectedNews()); // DELETE SELECTED NEWS RECORD
    }
    setAddNewsModalState(false);
  };

  // const getNewsRecord = (id) => {
  //   dispatch(getNewsRecordRequest(id));
  //   handleOpen(true);
  // };

  // --- INPUTS VALIDATION. SAVE BUTTON DISABLING --- //
  // --- INPUTS VALIDATION. SAVE BUTTON DISABLING --- //

  return (
    <div>
      <CardActions>
        <Button size="small" variant="contained" color="primary" onClick={handleOpen}>Add news</Button>
      </CardActions>
      <div className="news-container">
        {list.length && list.map((item) => (
          <NewsCard
            title={item.news_title}
            text={item.news_text}
            key={item.id}
            id={item.id}
            date={item.createdAt}
            showNewsDetails={() => {}}
            handleEditClick={() => setAddNewsModalState(true)}
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
      <AddNewsModal
        open={addNewsModalState}
        onClose={handleClose}
        selectedNews={selectedNews}
      />
      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {selectedNews.id ? (
          <div className="card-modal-window">
            <div className="card-modal-container">
              <div className="card-modal-header">
                <h4>{selectedNews.news_title}</h4>
                <CardActions>
                  <Button size="small" variant="contained" color="primary" onClick={handleClose}>Close</Button>
                </CardActions>
              </div>
              <div className="card-modal-content">
                <p>{selectedNews.news_text}</p>
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
                <TextField id="outlined-basic" label="Enter news title" variant="outlined" value={newsTitle} onChange={handleNewsTitle} />
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
      </Modal> */}
    </div>
  );
}

export default NewsList;
