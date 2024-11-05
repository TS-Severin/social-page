import Image from "next/image";

export const Header = () => {
  return (
    <>
      <div className="fixed z-10 left-0 right-0 max-w-[600px] my-0 mx-auto">
        <div className="relative top-0 bg-white">
          <div className="flex justify-between px-4 pt-4 pb-2">
            <h1 className="font-damion text-3xl">T.Severin</h1>
            <h1>Mail</h1>
          </div>
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
            <h1 className="font-bold">Tillmann Severin</h1>
            <p>Autor, Verleger, Übersetzer - Berlin (er/ihn)</p>
            <p>HASHTAG COMPONENT</p>
          </div>
        </div>
      </div>
    </>
  );
};
