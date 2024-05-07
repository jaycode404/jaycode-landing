import puppeteer from "puppeteer";
import fs from "fs";

async function takeScreenshot(url, outputPath) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Espera hasta que el evento "load" del DOM se complete
  await page.goto(url, { waitUntil: "load" });

  await page.screenshot({ path: outputPath });
  await browser.close();
}

const urls = [
  "https://jayflix-six.vercel.app/",
  "https://jaycode-landing.vercel.app/",
  "https://randomusic.vercel.app/",
  "https://recordatorios-crud-app.vercel.app/",
  "https://pedagogia-landing.vercel.app/",
  "https://busqueda-indexada.vercel.app/",
];

urls.forEach(async (url, index) => {
  const outputPath = `screenshot-${index + 1}.png`;
  await takeScreenshot(url, outputPath);
  console.log(`Screenshot for ${url} saved as ${outputPath}`);
});
