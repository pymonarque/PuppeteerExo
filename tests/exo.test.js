import puppeteer from "puppeteer";

let page;
let browser;
const width = 1920;
const height = 1080;

beforeAll(async () => {
    browser = await puppeteer.launch({
        headless: true,
        args: [`--window-size=${width},${height}`]
      });
    page = await browser.newPage();

    //Start jeopardy app from react exo branch exoPart3 before for those tests to run properly
    await page.goto("http://localhost:3000/");
});

describe("Test the jeopardy application", () => {
    
    test("make sure page title is React App", async () => {
      const pageTitle = await page.title();
      expect(pageTitle).toBe("React App");
    }, 16000);

    test("Does question: appears", async () => {
        const question = await page.$("#question");
        expect(question).not.toBe(null);
    }, 16000);

    test("Does a question appears", async () => {
        let questionText = await page.$eval("#currentQuestion", (el) => {
            return el.innerHTML
        });
        expect(questionText).not.toBe("");
    }, 16000);

    /*
    test("Make sure the score those update", async () => {

    }, 16000);
    */

    /*
    test("Make sure the form gets empty after submit", async () => {

    }, 16000);
    */

    /*
    test("Make sure a new question appears after submit", async () => {

    }, 16000);
    */

});
    

afterAll(() => {
    browser.close();
});