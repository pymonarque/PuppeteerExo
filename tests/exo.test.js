import puppeteer from "puppeteer";

let page;
let browser;
const width = 1920;
const height = 1080;

beforeAll(async () => {
    browser = await puppeteer.launch({
        headless: false,
        args: [`--window-size=${width},${height}`]
      });
    page = await browser.newPage();
});

describe("Test the geopardy application", () => {
    
    test("make sure page title is React App", async () => {
      await page.goto("http://localhost:3000/");
      const pageTitle = await page.title();
      expect(pageTitle).toBe("React App");
    }, 16000);

    /*
    test("make sure top stories shows", async () => {
    
        await page.click("#hplogo")
        await page.waitForSelector('.zQlLed');
        let content = await page.$eval(".zQlLed", (el) =>{
            return el.innerHTML
        })
        // console.log(content, "eric")
        expect(content).toBe("Top stories");
      }, 16000);
      */
});
    

afterAll(() => {
    browser.close();
});