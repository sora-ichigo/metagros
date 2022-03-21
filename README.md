# Metagros
![](https://github.com/igsr5/metagros/workflows/CI/badge.svg)
![](https://img.shields.io/badge/license-MIT-green)

Metagros is a tool to get OGP data from the site URL.


![](https://static.wikia.nocookie.net/pokemon-radiance/images/0/01/059_Metagross.png/revision/latest/scale-to-width-down/308?cb=20200304023123)  
https://pokemon-incandescent.fandom.com/wiki/Metagross

## Features
- Node.js ESM module
- Get `og:OOO` content data from site url
- Less dependenceies
- Popular Pokémon
  - so cool!! cute!! intelligence!!!

## What is OGP?
https://ogp.me/

> ## The Open Graph Protocol
> Introduction
> The Open Graph protocol enables any web page to become a rich object in a social graph. For instance, this is used on Facebook to allow any web page to have the same functionality as any other object on Facebook.
> 
> While many different technologies and schemas exist and could be combined together, there isn't a single technology which provides enough information to richly represent any web page within the social graph. The Open Graph protocol builds on these existing technologies and gives developers one thing to implement. Developer simplicity is a key goal of the Open Graph protocol which has informed many of the technical design decisions.

## Support OGP Metadata
- [Basic Metadata](https://ogp.me/#metadata)
- Some [Optional Metadata](https://o
gp.me/#optional)
  - description
  - site_name



## Installing
Using npm
```sh
$ npm install metagros
```
Using yarn
```sh
$ yarn add metagros
```

## Example


```ts
import { getPageMetaData } from "metagros";

const url = "https://some.com";

const metadata = await getPageMetaData(url);
console.log(metadata);

// output
{
  title: "Site title",
  description: "Site description.This site is OO's HP ...",
  image: "https://images.com/hoge",
  type: "article",
  siteName: undefined,
  url: "https://some.com"
}
```



## License
See [LISENSE](https://github.com/igsr5/metagros/blob/master/LICENSE).
