import Image from "next/image";
import { IoPaperPlaneOutline } from "react-icons/io5";
import Link from "next/link";
import { Profile } from "@/lib/types";

// data: title, mail, picture, descriptionTitle, description paragraph

interface HeaderProps {
  profileData: Profile;
}

export const Header: React.FC<HeaderProps> = ({ profileData }) => {
  return (
    <>
      <div className="fixed w-full z-10 bg-white">
        <div className="flex justify-between px-4 pt-4 pb-2 max-w-[640px] mx-auto">
          <h1 className="font-damion text-3xl">T.Severin</h1>

          <Link href="mailto:tillmann.severin@posteo.de">
            <IoPaperPlaneOutline className="text-lg pl-1" />
          </Link>
        </div>
      </div>
      <div className="relative left-0 right-0 max-w-[640px] my-0 mx-auto">
        <div className="relative top-14 bg-white">
          <div className="flex items-center p-4">
            <Image
              src="https://images.ctfassets.net/5uq6vji4voev/5VTNA2ojnEcYsJKTsrNEOv/177fa8695904de7c7c230ab75e9c7d41/grossmann.jpg"
              width={80}
              height={80}
              alt="Picture of the author"
              className="rounded-full mr-3"
            ></Image>

            <div className="text-base font-bold pl-4">Beiträge: 100</div>
          </div>
          <div className="text-base pl-4 pb-4">
            <h1 className="font-bold">{profileData.name}</h1>
            <p>Entwickler, Autor, Verleger, Übersetzer - Berlin (er/ihn)</p>
            <p>HASHTAG COMPONENT</p>
          </div>
        </div>
      </div>
    </>
  );
};
