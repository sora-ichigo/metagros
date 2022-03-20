import { Metadata, ogKey } from "./type";
import * as https from "https";
import { JSDOM } from "jsdom";
import { snakeCase } from "./utils";

export const getPageMetaData = async (url: string): Promise<Metadata> => {
  const body = await getHTMLHeadFromUrl(url);
  const dom = new JSDOM(body);
  var metadata: Metadata = {};

  ogKey.forEach((v) => {
    try {
      const content = dom.window.document
        .querySelector(`meta[property='og:${snakeCase(v)}']`)
        ?.getAttribute("content");

      metadata[v] = content !== null ? content : undefined;
    } catch {
      // noop
    }
  });

  return metadata;
};

const getHTMLHeadFromUrl = (url: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res: any) => {
        let body = "";

        res.setEncoding("utf8");
        res.on("data", (chunk: string) => {
          body += chunk;
          if (body.split("</head>").length > 1) {
            body = body.split("</head>")[0];
            resolve(body);
          }
        });
      })
      .on("error", reject);
  });
};

const url = "https://www.wantedly.com/companies/wantedly/post_articles/385515";
(async () => {
  const metadata = await getPageMetaData(url);
  console.log(metadata);
})();
