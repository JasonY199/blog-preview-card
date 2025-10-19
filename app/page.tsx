import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen p-6">
      <article className="bg-white w-full max-w-[327px] lg:max-w-[384px] border rounded-[20px] p-6 flex gap-6 flex-col shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-gray-950 leading-[1.5]">
        <Image
          src="/illustration-article.svg"
          alt="Illustration of an article"
          width={279}
          height={200}
          className="rounded-lg w-full h-[200px] object-cover"
        />
        <div>
          <div className="flex flex-col gap-3">
            <span className="text-xs lg:text-sm font-extrabold rounded bg-brand-yellow py-1 px-3 w-min">
              Learning
            </span>
            <time className="text-xs lg:text-sm font-medium">
              Published 21 Dec 2023
            </time>
            <h1 className="text-xl lg:text-2xl font-extrabold cursor-pointer hover:text-brand-yellow">
              HTML & CSS foundations
            </h1>
            <p className="text-sm lg:text-base font-medium text-gray-500">
              These languages are the backbone of every website, defining
              structure, content, and presentation.
            </p>
          </div>
        </div>
        <footer className="flex gap-3 items-center">
          <Image
            src="/image-avatar.webp"
            alt="Profile picture of Greg Hooper"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="text-sm font-extrabold">Greg Hooper</span>
        </footer>
      </article>
    </main>
  );
}
