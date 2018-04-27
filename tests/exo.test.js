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
    await page.goto("http://localhost:3000/");
});

describe("Test the geopardy application", () => {
    
    test("make sure page title is React App", async () => {
      const pageTitle = await page.title();
      expect(pageTitle).toBe("React App");
    }, 16000);

    test("verify qeustion appears", async () => {
        const question = await page.$("#question");
        expect(question).not.toBe(null);
    }, 16000);

});
    

afterAll(() => {
    browser.close();
});