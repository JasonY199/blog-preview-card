import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center justify-center h-full">
      <div className="bg-white w-full max-w-[327px] border rounded-[20px] p-6">
        <Image
          src="/illustration-article.svg"
          alt="Illustration of an article"
          width={279}
          height={200}
          className="rounded-lg w-full h-auto"
        />
        <div>
          <div>Category</div>
          <div>Public Date</div>
          <div>Title</div>
          <div>Description</div>
        </div>
        <div>
          Author
        </div>
      </div>
    </main>
  );
}
