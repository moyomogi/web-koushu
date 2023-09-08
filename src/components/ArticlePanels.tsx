// import { article } from "@/app/data/articles";
// import { headers } from "next/headers";
// import Link from "next/link";
// import Image from "next/image";

// export async function ArticlePanels() {
//   const host = headers().get("host");
//   const articles: article[] = await (
//     await fetch(`http://${host}/api/articles`, { cache: "no-store" })
//   ).json();

//   return (
//     <div className="flex justify-center">
//       <div className="mt-12 mx-12 bg-white shadow px-4 py-6 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
//         {articles.map((article) => (
//           <Link
//             className="p-3 shadow rounded-lg h-full w-[20rem]"
//             target="_blank"
//             href={`https://ch-random.net/post/${article.id}`}
//             key={article.id}
//           >
//             <div className="relative w-18 h-40">
//               <Image
//                 className="object-cover rounded-md"
//                 src={`/api/fetch-og-image?url=${encodeURIComponent(
//                   article.thumbnailPath
//                 )}`}
//                 alt={article.title}
//                 fill
//               />
//             </div>

//             <div className="mt-3 border" />
//             <p className="font-semibold mt-2">{article.title}</p>
//             <p className="pt-4 mt-auto text-sm font-semibold text-gray-500 w-full block">
//               {article.created_at}
//             </p>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }
