import React, { useContext } from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { SearchContext } from '../../context/SearchContext';
import FlagIcon from '@material-ui/icons/Flag';
import PublicIcon from '@material-ui/icons/Public';
import BusinessIcon from '@material-ui/icons/Business';
import TheatersIcon from '@material-ui/icons/Theaters';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import MemoryIcon from '@material-ui/icons/Memory';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';

const newsApiKey = process.env.REACT_APP_NEWS_API_KEY;

const ListItems = () => {
  const { setUrl, handleUpdateUrl } = useContext(SearchContext);

  return (
    <>
      <List>
        <ListItem
          button
          onClick={() => handleUpdateUrl(`general`, `ph`)}
        >
          <ListItemIcon>
            <FlagIcon />
          </ListItemIcon>
          <ListItemText primary="Philippines" />
        </ListItem>
        <ListItem
          button
          onClick={() => handleUpdateUrl(`general`, `us`)}
        >
          <ListItemIcon>
            <PublicIcon />
          </ListItemIcon>
          <ListItemText primary="General" />
        </ListItem>
        <ListItem
          button
          onClick={() =>
            setUrl(
              `https://newsapi.org/v2/top-headlines?country=us&category=business&pageSize=100&apiKey=${newsApiKey}`,
            )
          }
        >
          <ListItemIcon>
            <BusinessIcon />
          </ListItemIcon>
          <ListItemText primary="Business" />
        </ListItem>
        <ListItem
          button
          onClick={() =>
            setUrl(
              `https://newsapi.org/v2/top-headlines?country=us&category=entertainment&pageSize=100&apiKey=${newsApiKey}`,
            )
          }
        >
          <ListItemIcon>
            <TheatersIcon />
          </ListItemIcon>
          <ListItemText primary="Entertainment" />
        </ListItem>
        <ListItem
          button
          onClick={() =>
            setUrl(
              `https://newsapi.org/v2/top-headlines?country=us&category=health&pageSize=100&apiKey=${newsApiKey}`,
            )
          }
        >
          <ListItemIcon>
            <FitnessCenterIcon />
          </ListItemIcon>
          <ListItemText primary="Health" />
        </ListItem>
        <ListItem
          button
          onClick={() =>
            setUrl(
              `https://newsapi.org/v2/top-headlines?country=us&category=science&pageSize=100&apiKey=${newsApiKey}`,
            )
          }
        >
          <ListItemIcon>
            <WbIncandescentIcon />
          </ListItemIcon>
          <ListItemText primary="Science" />
        </ListItem>
        <ListItem
          button
          onClick={() =>
            setUrl(
              `https://newsapi.org/v2/top-headlines?country=us&category=technology&pageSize=100&apiKey=${newsApiKey}`,
            )
          }
        >
          <ListItemIcon>
            <MemoryIcon />
          </ListItemIcon>
          <ListItemText primary="Technology" />
        </ListItem>
        <ListItem
          button
          onClick={() =>
            setUrl(
              `https://newsapi.org/v2/top-headlines?country=us&category=sports&pageSize=100&apiKey=${newsApiKey}`,
            )
          }
        >
          <ListItemIcon>
            <DirectionsBikeIcon />
          </ListItemIcon>
          <ListItemText primary="Sports" />
        </ListItem>
      </List>
    </>
  );
};

export default ListItems;
