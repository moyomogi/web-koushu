import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-5xl mx-auto">
        <div className="items-center cursor-pointer hover:bg-red-100 duration-200 px-3 py-2 inline-flex">
          <Image
            className="rounded-full"
            src="/random_logo.png"
            alt="logo"
            width={64}
            height={64}
          />
          <span className="ml-3 text-2xl font-bold">Computer House Random</span>
        </div>
      </div>
    </header>
  );
}
