import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen p-6">
      <div className="bg-white w-full max-w-[327px] border rounded-[20px] p-6 flex gap-6 flex-col shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-gray-950 leading-[1.5]">
        <Image
          src="/illustration-article.svg"
          alt="Illustration of an article"
          width={279}
          height={200}
          className="rounded-lg w-full h-auto"
        />
        <div>
          <div className="flex flex-col gap-3">
            <div className="text-xs font-extrabold rounded bg-brand-yellow py-1 px-3 w-min">
              Learning
            </div>
            <div className="text-xs font-medium">Published 21 Dec 2023</div>
            <div className="text-xl font-extrabold">HTML & CSS foundations</div>
            <div className="text-sm font-medium text-gray-500">
              These languages are the backbone of every website, defining
              structure, content, and presentation.
            </div>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <div>
            <Image
              src="/image-avatar.webp"
              alt="Profile picture of Greg Hooper"
              width={32}
              height={32}
              className="rounded-full"
            />
          </div>
          <div className="text-sm font-extrabold">Greg Hooper</div>
        </div>
      </div>
    </main>
  );
}
