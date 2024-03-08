import Image from "next/image";

export default function Home() {
  return (
    <main
      style={{ userSelect: "none" }}
      className="flex min-h-screen max-h-screen flex-col lg:flex-row items-center gap-4 relative"
    >
      <div className="w-1/2 flex flex-col items-center justify-center gap-4">
        <div className="w-screen h-[300px] md:w-[720px] md:h-[478px] mb-[250px]">
          <iframe
            src="https://player.twitch.tv/?channel=theprimeagen&parent=www.theprimeagen.live"
            title="ThePrimeagen"
            width="100%"
            height="100%"
          ></iframe>
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
      <Image
        src="/teej.png"
        alt="The Primeagen"
        width={400}
        height={400}
        priority={true}
        style={{
          userSelect: "none",
        }}
        draggable={false}
        className="absolute bottom-0 left-0 w-[270px] lg:w-[400px] object-contain"
      />
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
        className="absolute bottom-0 right-0 w-[270px] lg:w-[400px] object-contain"
      />
    </main>
  );
}
