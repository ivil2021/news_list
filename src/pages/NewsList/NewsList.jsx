import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as moment from 'moment';

import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import Modal from '@material-ui/core/Modal';
import Pagination from '@material-ui/lab/Pagination';

import NewsCard from '../../components/NewsCard';
import { getNewsRequest } from '../../store/actions';
import './newsList.css';

const actualDate = new Date();

const LIMIT = 2;

function NewsList() {
  const [open, setOpen] = useState(false);

  const actualDateFormatted = moment(actualDate).locale('ru').format('DD.MM.YYYY');

  // take the certain part of state
  const list = useSelector((state) => state.news.newsList);

  // TODO: maybe I will need it future
  // const newsCurrent = useSelector((state) => state.news.news);

  // take the certain amount of news from state
  const newsAmount = useSelector((state) => state.news.newsAmount);

  // totalPages calculation based on fetced data const LIMIT
  const totalPages = Math.ceil(newsAmount / LIMIT);

  const [currentPage, setCurrentPage] = useState(1);

  const handlePagination = (event, page) => {
    setCurrentPage(page);
  };

  // TODO: will be used for modal window
  const handleOpen = () => {
    setOpen(true);
  };

  // TODO: will be used for modal window
  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewsRequest({ page: currentPage, limit: LIMIT }));
  }, [currentPage]);

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
          />
        ))}
        {/* // TODO: maybe I will need it future */}
        {/* {newsCurrent && (
        <div className="news-current">
          <NewsCard
            title={newsCurrent.title}
            text={newsCurrent.text}
            key={newsCurrent.id}
            id={newsCurrent.id}
            date={actualDateFormatted}
          />
        </div>
        )}
        {list.length && list.map((item) => (
          <NewsCard
            title={item.title}
            text={item.text}
            key={item.id}
            id={item.id}
            date={actualDateFormatted}
          />
        ))} */}
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
