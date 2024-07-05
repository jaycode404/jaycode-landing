import puppeteer from "puppeteer";
import fs from "fs";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function takeScreenshot(url, outputPath) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(url, { waitUntil: "load" });

  // Espera de 2 segundos
  await sleep(2000);

  await page.screenshot({ path: outputPath });
  await browser.close();
}

const urls = [
  "https://codeflix-tan.vercel.app/",
  "https://randomusic.vercel.app/",
  "https://recordatorios-crud-app.vercel.app/",
  "https://pedagogia-landing.vercel.app/",
  "https://busqueda-indexada.vercel.app/",
  "https://burger-landing-ten.vercel.app/",
  "https://apaloosa.vercel.app/",
  "https://encriptador-javascript.vercel.app/",
];

urls.forEach(async (url, index) => {
  const outputPath = `screenshot-${index + 1}.png`;
  await takeScreenshot(url, outputPath);
  console.log(`Screenshot for ${url} saved as ${outputPath}`);
});
