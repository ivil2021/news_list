import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button, CardActions } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import TextField from '@mui/material/TextField';

import NewsCard from '../../components/NewsCard';
import {
  getNewsRequest, setCurrentPage, deleteSelectedNews,
} from '../../store/actions';
import './newsList.css';
import AddNewsModal from '../../components/AddNewsModal';
import ReadMoreModal from '../../components/ReadMoreModal';

function NewsList() {
  const dispatch = useDispatch();
  const [addNewsModalState, setAddNewsModalState] = useState(false);
  const [readMoreModalState, setReadMoreModalState] = useState(false);
  const [newsTitleFilter, setNewsTitleFilter] = useState('');

  const list = useSelector((state) => state.news.newsList);
  const currentPage = useSelector((state) => state.news.currentPage);
  const totalPages = useSelector((state) => state.news.totalPages);
  const selectedNews = useSelector((state) => state.news.selectedNews);
  const handleFilter = (event) => setNewsTitleFilter(event.target.value);

  // Reacts to every single currentPage change
  // and initiates the request to get all news.
  useEffect(() => {
    dispatch(getNewsRequest({ title: newsTitleFilter }));
  }, [currentPage]);

  const handlePagination = (event, page) => dispatch(setCurrentPage(page));
  const handleOpen = () => setAddNewsModalState(true);

  const handleClose = () => {
    if (selectedNews.id) {
      // Delete selected news record.
      dispatch(deleteSelectedNews());
    }
    // Close the add news modal window
    setAddNewsModalState(false);
  };

  const handleCloseReadMoreModal = () => {
    if (selectedNews.id) {
      dispatch(deleteSelectedNews());
    }
    // Close the read more modal window
    setReadMoreModalState(false);
  };

  const handleFilterClick = () => {
    dispatch(getNewsRequest({ title: newsTitleFilter }));
  };

  return (
    <div>
      <CardActions>
        <Button size="small" variant="contained" color="primary" onClick={handleOpen}>Add news</Button>
        <TextField id="outlined-basic" value={newsTitleFilter} label="Enter something" variant="outlined" onChange={handleFilter} />
        <Button size="small" variant="contained" color="primary" onClick={handleFilterClick}>Filter</Button>
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
            handleReadMoreClick={() => setReadMoreModalState(true)}
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
      <AddNewsModal open={addNewsModalState} onClose={handleClose} selectedNews={selectedNews} />
      <ReadMoreModal
        open={readMoreModalState}
        onClose={handleCloseReadMoreModal}
        selectedNews={selectedNews}
      />
    </div>
  );
}

export default NewsList;
