// import { article, random_article_response } from "@/app/data/articles";
// import { NextResponse } from "next/server";
// import { parse } from "node-html-parser";

// export async function GET(request: Request) {
//   // let { searchParams } = new URL(request.url);

//   // let hasUrl = searchParams.has("url");
//   // let url = hasUrl
//   //   ? searchParams.get("url")!!
//   //   : "https://ch-random.net/post/461/featured.png";

//   let res = (await fetch("https://ch-random.net/authors/yomog/")).text();
//   let root = parse(await res);
//   let articles_random = JSON.parse(
//     root.querySelector("#__NEXT_DATA__")!!.innerHTML
//   ).props;

//   let articles_random_data = (articles_random as random_article_response)
//     .pageProps.posts;

//   let articles: article[] = [];

//   for (let i = 0; i < articles_random_data.length; i++) {
//     let article = articles_random_data[i];
//     articles.push({
//       id: article.id,
//       title: article.title,
//       created_at: article.lastmod.substring(0, 10).replaceAll("-", "/"),
//       url: `https://ch-random.net/post/${article.id}/`,
//       thumbnailPath: `https://ch-random.net${article.thumbnailPath}`,
//       media: "random",
//     });
//   }
//   return NextResponse.json(articles);
// }
