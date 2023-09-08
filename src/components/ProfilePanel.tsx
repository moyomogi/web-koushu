import Image from "next/image";
import { Fav } from "./Fav";

export default function ProfilePanel() {
  return (
    <div className="flex justify-center">
      <div className="max-w-3xl mt-12 mx-12 bg-white shadow flex gap-16 p-4 rounded-lg">
        <div className="ml-8 mt-8 md:w-60 md:h-60 w-full h-full md:rounded-full overflow-hidden">
          <Image
            className="w-full h-full"
            src="/avatar.jpg"
            alt="avatar"
            width={240}
            height={240}
          />
        </div>
        <div>
          <h2 className="text-3xl text-pink-400 mt-2">雛鶴あい</h2>

          <div className="whitespace-pre-line">
            <p className="text-sm mt-4">所属</p>
            <p>ひな鶴</p>

            <p className="text-sm mt-4">分野</p>
            <p>詰将棋</p>

            <p className="text-sm mt-4">得意料理</p>
            <p>金沢カレー</p>

            <div className="flex flex-row flex-wrap justify-center mx-[2rem] my-3">
              <Fav
                navLinks={[
                  {
                    name: "GitHub",
                    href: "https://github.com/moyomogi",
                    icon: "github",
                  },
                  {
                    name: "mdBook",
                    href: "https://moyomogi.github.io/python_2022_md/",
                    icon: "mdbook",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
