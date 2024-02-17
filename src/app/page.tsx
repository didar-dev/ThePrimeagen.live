import Image from "next/image";

export default function Home() {
  return (
    <main
      style={{ userSelect: "none" }}
      className="flex min-h-screen max-h-screen flex-col lg:flex-row items-center gap-4 relative"
    >
      <div className="w-1/2 flex flex-col items-center justify-center gap-4">
        <Image
          src="/hero.webp"
          alt="The Primeagen"
          width={800}
          height={700}
          priority={true}
          style={{
            userSelect: "none",
          }}
          draggable={false}
          className="block lg:hidden absolute bottom-0 right-0"
        />
        <div className="w-screen h-[300px] md:w-[720px] md:h-[478px]">
          <iframe
            src="https://player.twitch.tv/?channel=theprimeagen&parent=www.theprimeagen.live"
            title="ThePrimeagen"
            width="100%"
            height="100%"
          ></iframe>
        </div>
        <div className="flex gap-4 flex-col items-center justify-center">
          <h1 className="text-3xl md:text-5xl text-white font-bold text-center">
            ThePrimeagen
          </h1>
          <p className="text-lg md:text-2xl text-white text-center">
            A legend who works at Netflix and streams on Twitch.
          </p>
        </div>
      </div>
      <div className="hidden lg:block w-1/2 min-h-screen relative">
        <Image
          src="/hero3.webp"
          alt="The Primeagen"
          fill={true}
          priority={true}
          style={{ userSelect: "none" }}
          draggable={false}
          className="hidden lg:block w-full h-screen object-cover object-center absolute top-0 left-0"
        />
        <div className="absolute hidden lg:block inset-0 bg-gradient-to-r from-black to-transparent"></div>
      </div>
    </main>
  );
}
