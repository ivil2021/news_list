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
import { getNewsRequest, addNewsRecordRequest } from '../../store/actions';
import './newsList.css';

const actualDate = new Date();

const LIMIT = 2;

function NewsList() {
  const [open, setOpen] = useState(false);

  const actualDateFormatted = moment(actualDate).locale('ru').format('DD.MM.YYYY');

  const list = useSelector((state) => state.news.newsList);

  const newsAmount = useSelector((state) => state.news.newsAmount);

  const totalPages = Math.ceil(newsAmount / LIMIT);

  const [currentPage, setCurrentPage] = useState(1);

  const handlePagination = (event, page) => setCurrentPage(page);

  const handleOpen = () => { setOpen(true); };
  const handleClose = () => { setOpen(false); };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewsRequest({ page: currentPage, limit: LIMIT }));
  }, [currentPage]);

  // --- ADD NEWS FROM MODAL WINDOW --- //
  const [newsTitle, setNewsTitle] = useState('basic news title');
  const [newsText, setNewsText] = useState('basic news text');

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
  // --- ADD NEWS FROM MODAL WINDOW --- //

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
            currentPage={currentPage}
            limit={LIMIT}
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
        // title="Title" // TODO: change to real data
      >
        <div className="modal-window">
          <div className="modal-container">

            <div className="modal-header">
              <TextField
                id="outlined-basic"
                label="Enter news title"
                variant="outlined"
                onChange={handleNewsTitle}
              />
              <CardActions>
                <Button size="small" variant="contained" color="primary" onClick={handleClose}>Close</Button>
              </CardActions>
            </div>

            <TextareaAutosize
              aria-label="minimum height"
              minRows={3}
              placeholder="Enter news text"
              onChange={handleNewsText}
            />
            ;

            <div className="modal-footer">
              <CardActions>
                <Button size="small" variant="contained" color="primary" onClick={handleSave}>
                  Save
                </Button>
              </CardActions>
            </div>

          </div>
        </div>
      </Modal>
    </div>
  );
}

export default NewsList;
