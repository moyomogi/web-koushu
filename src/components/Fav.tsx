import Link from "next/link";

export function Fav({
  navLinks,
}: {
  navLinks: { name: string; href: string; icon: string }[];
}) {
  return (
    <>
      {navLinks.map(({name, href, icon}) => {
        return (
          <Link
            key={name}
            className="m-2 rounded-full text-center"
            href={href}
            target="_blank"
          >
            <i
              className={
                "text-xl p-3 rounded-full hover:bg-pink-300 duration-200 bg-gray-200 si si--color si-" +
                icon
              }
            ></i>
          </Link>
        );
      })}
    </>
  );
}
