import projects from './assets/js/main-body/portfolio/projects.js';


import puppeteer from 'puppeteer';
async function run(url, filename) {
    let file = filename.split(" ").join("");
    let browser = await puppeteer.launch({
        headless: false
    });
    let page = await browser.newPage();
    await page.goto(url);
    await page.screenshot({
        path: `./assets/images/${file}.png`,
        type: 'png'
    });
    await page.close();
    await browser.close();
}
projects.forEach((project) => {
    run(project.demo, project.title)
})
