const express = require('express');
const cheerio = require('cheerio');
const app = express();
const port = process.env.PORT || 3000;

let news = [];

// 스크래핑 함수
async function scrapeData() {
  try {
    const response = await fetch('https://www.naver.com/');
    const html = await response.text();
    const $ = cheerio.load(html);

    const data = [];
    $('span.service_name').each((index, element) => {
      const yong = $(element).text();
      data.push(yong);
    });

    news = data;
    console.log(news);
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

// 라우트 설정
app.get('/scrape', async (req, res) => {
  try {
    await scrapeData();
    res.json(news);
  } catch (error) {
    res.status(500).json({ error: 'Failed to scrape data' });
  }
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
