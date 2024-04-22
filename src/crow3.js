const express = require('express');
const puppeteer = require('puppeteer');
const app = express();
const port = 3000;

app.get('/scrape', async (req, res) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
  
    await page.goto('https://jingoochoi.github.io/FED-RF-2023-PROJECT-CJK/');
    await page.waitForSelector('h1');
  
    const lang = await page.$eval('h1', element => element.textContent);
    console.log(lang);

    await browser.close();

    res.json({ lang }); // 데이터를 JSON 형식으로 클라이언트에 전달
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to scrape data' });
  }
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
