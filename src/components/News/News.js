import React from 'react';
import {
  makeStyles,
  Paper,
  Typography,
  Button,
} from '@material-ui/core';
import { parseISO, formatDistanceToNow } from 'date-fns';

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
  spacer: {
    marginBottom: '10px',
  },
}));

export default function News({ news }) {
  const classes = useStyles();

  const displayDate = formatDistanceToNow(parseISO(news.publishedAt));

  return (
    <div className={classes.newsCardContainer}>
      <Paper className={classes.newsContainer}>
        <div className={classes.newsLayout}>
          <div className={classes.newsCard}>
            <Typography variant="h5" className={classes.spacer}>
              {news.title}
            </Typography>
            <Typography className={classes.spacer}>
              - {displayDate} ago
            </Typography>
            <Button href={news.url} underline="none" target="_blank">
              Read more
            </Button>
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
    </div>
  );
}
