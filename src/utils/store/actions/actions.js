import {FETCHING_DATA, FETCHING_DATA_SUCCESS} from '../types';

export const fetchStories = () => dispatch => {
  dispatch({type: FETCHING_DATA});
  fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
    .then(response => response.json())
    .then(res => {
      dispatch({type: FETCHING_DATA_SUCCESS, payload: res});
    })
    .catch(error => console.log(error));
};
