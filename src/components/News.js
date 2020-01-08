import React from 'react';
import { makeStyles, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  newsCardContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  newsContainer: {
    padding: theme.spacing(2),
    marginBottom: '20px',
    minHeight: '200px',
  },
  newsLayout: {
    display: 'flex',
    flexDirection: 'row',
  },
  newsCard: {
    flexGrow: '2',
  },
  imageContainer: {
    height: '100px',
  },
  image: {
    maxWidth: '200px',
    maxHeight: '200px',
    borderRadius: '5px',
    margin: '15px',
  },
}));

export default function News({ news }) {
  const classes = useStyles();

  return (
    <div className={classes.newsCardContainer}>
      <a href={news.url} target="_blank" rel="noopener noreferrer">
        <Paper className={classes.newsContainer}>
          <div className={classes.newsLayout}>
            <div className={classes.newsCard}>
              <Typography variant="h5">{news.title}</Typography>
              <div>
                <Typography>{news.publishedAt}</Typography>
              </div>
            </div>
            <div className={classes.imageContainer}>
              <img
                src={news.urlToImage}
                alt={news.urlToImage}
                className={classes.image}
              />
            </div>
          </div>
        </Paper>
      </a>
    </div>
  );
}
