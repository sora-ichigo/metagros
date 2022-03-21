import { getPageOGPMetadata } from "./getPageOGPMetadata";
import * as target from "./getPageOGPMetadata";
import { Metadata } from "./type";

describe("getPageMetadata", () => {
  it("extract metadata from html string", async () => {
    jest.spyOn(target, "getHTMLHeadFromUrl").mockReturnValueOnce(
      new Promise<string>((resolve: (value: string) => void) => {
        resolve(
          `
            <html>
            <head>
                <title>title</title>
                <meta property="og:title" content="title" />
                <meta property="og:description" content="description" />
                <meta property="og:image" content="https://image.com" />
                <meta property="og:type" content="article" />
                <meta property="og:site_name" content="test" />
                <meta property="og:url" content="https://test.com" />
            </head>
            `
        );
      })
    );

    const body = await getPageOGPMetadata("https://test.com");
    const exp: Metadata = {
      title: "title",
      description: "description",
      image: "https://image.com",
      type: "article",
      siteName: "test",
      url: "https://test.com",
    };

    expect(body).toStrictEqual(exp);
  });
});
