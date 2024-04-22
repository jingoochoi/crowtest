const puppeteer = require('puppeteer');
export let lang
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.goto('https://jingoochoi.github.io/FED-RF-2023-PROJECT-CJK/');
  await page.waitForSelector('h1');
  
  lang = await page.$eval('h1', element => element.textContent);
  console.log(lang);

  await browser.close();
})();
