const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const htmlContent = fs.readFileSync('profile.html', 'utf8');

  await page.setContent(htmlContent, {
    waitUntil: 'networkidle0',
    baseURL: `file://${path.resolve('./')}/`
  });

  await page.pdf({
    path: 'Mfundo_Sithole_Resume.pdf',
    format: 'A4',
    printBackground: true,
    margin: {
      top: '20px',
      bottom: '20px',
      left: '20px',
      right: '20px'
    }
  });

  await browser.close();
  console.log('✅ PDF generated successfully');
})();