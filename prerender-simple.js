import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import https from "https";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const API_URL = "https://perfectwebservices.com/pws_admin/api/meta";
const ASSET_URL = "https://perfectwebservices.com/assets/";
const DEFAULT_IMAGE = `${ASSET_URL}site-logo-BFOW6fmv.svg`;

const mainHtml = fs.readFileSync(path.join(__dirname, "dist/index.html"), "utf8");
const assetsFolder = path.join(__dirname, "dist/assets");

function fetchJSON(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => resolve(JSON.parse(data)));
      })
      .on("error", (err) => reject(err));
  });
}

(async () => {
  try {
    console.log("Fetching meta data from Laravel API...");
    const routes = await fetchJSON(API_URL);

    if (!Array.isArray(routes)) throw new Error("Invalid API response format");

    fs.mkdirSync(assetsFolder, { recursive: true });

    for (const page of routes) {
      const slug = page.slug === "home" ? "/" : `/${page.slug}`;
      const title = page.meta_title ;
      const description =
        page.meta_description;

      // Build full image URL from assets
        const image = page.meta_image || DEFAULT_IMAGE;

      const metaTags = `
        <title>${title}</title>
        <meta name="title" content="${title}"/>
        <meta name="description" content="${description}"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="${title}"/>
        <meta property="og:description" content="${description}"/>
        <meta property="og:image" content="${image}"/>
        <meta property="og:url" content="https://perfectwebservices.com${slug}"/>
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:title" content="${title}"/>
        <meta property="twitter:description" content="${description}"/>
        <meta property="twitter:image" content="${image}"/>
        <link rel="canonical" href="https://perfectwebservices.com${slug}"/>
      `;

      const html = mainHtml.replace("</head>", `${metaTags}\n</head>`);

      const fileName =
        slug === "/" ? "index.html" : slug.replace(/\//g, "-").replace(/^-/, "") + ".html";
      const filePath = path.join(assetsFolder, fileName);

      fs.writeFileSync(filePath, html);
      console.log(`Created: ${fileName}`);
    }

    console.log(" All prerendered SEO pages created inside /assets!");
  } catch (err) {
    console.error(" Error during prerender:", err.message);
  }
})();
