import axios from "axios";

const baseURL = `https://hacker-news.firebaseio.com/v0/`;
const topNewsUrl = `${baseURL}topstories.json`;
const newsUrl = `${baseURL}item/`;

export const getNewsIds = async () => {
  return await axios.get(topNewsUrl).then(({ data }) => data);
}

export const getNews = async (id) => {
  return await axios.get(`${newsUrl}${id}.json`).then(({ data }) => data)
};
