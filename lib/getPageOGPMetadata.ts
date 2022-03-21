import { Metadata, ogKey } from "./type";
import * as https from "https";
import { JSDOM } from "jsdom";
import { snakeCase } from "./utils";
import { IncomingMessage } from "http";

export const getPageOGPMetadata = async (url: string): Promise<Metadata> => {
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

export const getHTMLHeadFromUrl = (url: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res: IncomingMessage) => {
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
