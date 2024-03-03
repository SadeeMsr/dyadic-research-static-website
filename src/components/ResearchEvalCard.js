import Image from "next/image";

export default function ResearchEvalCard({ item }) {
  return (
    <div className="relative cursor-pointer flex justify-start gap-5 shadow hover:shadow-md p-5 rounded-lg">
      <span className="absolute top-3 text-2xl text-slate-300 font-semibold z-[3]">
        0{item.id}
      </span>
      <div className="w-[40%] mt-5">
        <Image
          src={item.imgPath}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full"
          alt={item.title}
        />
      </div>

      <div className="w-[60%]">
        <h1 className="text-xl font-semibold text-slate-700">{item.title}</h1>
        <p className="mt-3 text-sm font-light text-slate-500">
          {item.description}
        </p>
      </div>
    </div>
  );
}
