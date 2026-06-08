import puppeteer from 'puppeteer';
import fs from 'fs';

const routes = [
  '/',
  '/about-diocese',
  '/metropolitan',
  '/leadership',
  '/former-metropolitans',
  '/priest-directory',
  '/projects',
  '/reports',
  '/prayer-group',
  '/martha-mariam-vanitha-samajam',
  '/youth-movement',
  '/sunday-school',
  '/balasamajam',
  '/mgocsm',
  '/amoss',
  '/contact'
];

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 375, height: 812 });

  let hasErrors = false;

  for (const route of routes) {
    console.log(`Checking http://localhost:5173${route}...`);
    try {
      await page.goto(`http://localhost:5173${route}`, { waitUntil: 'networkidle2', timeout: 15000 });
      
      // Give React some time to render
      await new Promise(r => setTimeout(r, 2000));

      const overflowInfo = await page.evaluate(() => {
        const docWidth = document.documentElement.scrollWidth;
        const winWidth = window.innerWidth;
        const bodyWidth = document.body.scrollWidth;
        
        let elements = [];
        if (docWidth > winWidth || bodyWidth > winWidth) {
           const allElements = document.querySelectorAll('*');
           for (const el of allElements) {
             const rect = el.getBoundingClientRect();
             if (rect.right > winWidth && rect.width > 0) {
               elements.push({
                  tag: el.tagName,
                  className: el.className,
                  right: rect.right,
                  width: rect.width
               });
             }
           }
        }
        
        return {
           isOverflowing: docWidth > winWidth || bodyWidth > winWidth,
           docWidth,
           winWidth,
           bodyWidth,
           elements: elements.slice(0, 10) // Only top 10
        };
      });

      if (overflowInfo.isOverflowing) {
        console.error(`❌ Overflow detected on ${route}: Document Width = ${overflowInfo.docWidth}px, Window Width = ${overflowInfo.winWidth}px`);
        console.log(`   Overflowing elements:`, overflowInfo.elements);
        hasErrors = true;
      } else {
        console.log(`✅ No horizontal overflow on ${route}`);
      }
    } catch (e) {
      console.error(`⚠️ Failed to load ${route}: ${e.message}`);
    }
  }

  await browser.close();
  
  if (hasErrors) {
      console.log('\nAudit complete. Found some horizontal scrolling issues.');
  } else {
      console.log('\nAudit complete. All pages are horizontally constrained on mobile!');
  }
})();
