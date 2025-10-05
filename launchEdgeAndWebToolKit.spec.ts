import { chromium, webkit, test} from "@playwright/test";

test("Launch RedBus Edge browser", async()=>{
 
   const browser= await chromium.launch({channel:"msedge", headless:false});
   const context = await browser.newContext();
   const page = await context.newPage();
   await page.goto(`https://www.redbus.in/`);
           const rbTitle= await page.title();
          const rbUrl=await page.url();   
          console.log(`Page title: ${rbTitle}`)
          console.log(`Page URL: ${rbUrl}`)
    await browser.close();      
})

test ("Launch Flipkart in webkit browser", async()=>{
const wkBrowser = await webkit.launch({headless:false});
const wkContext = await wkBrowser.newContext({ignoreHTTPSErrors: true});
const wkPage=await wkContext.newPage();
await wkPage.goto(`https://www.flipkart.com/`);
const fpTile = await wkPage.title();
const fpUrl = await wkPage.url();
console.log(`Flipkart Title: ${fpTile}`)
console.log(`Flipkart Loaded URL: ${fpUrl}`)


})