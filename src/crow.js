// const axios = require('axios');
import axios from 'axios';
const cheerio = require('cheerio');

export const titles = [];
axios.get('https://jingoochoi.github.io/FED-RF-2023-PROJECT-CJK/')
  .then(response => {
    const $ = cheerio.load(response.data);

    $('img').each((index, element) => {
      titles.push($(element).attr('alt'));//$('').~~
    });

    console.log(titles);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
