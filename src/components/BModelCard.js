import Image from "next/image";

export default function BModelCard({item}) {
  return (
    <div className="cursor-pointer relative rounded-xl shadow hover:shadow-md p-10">
         <span className="absolute top-3 text-2xl text-slate-300 font-semibold z-[3]">
            0{item.id}
          </span>
       <div className="overflow-hidden relative h-64">
           <Image
              alt={item.title}
              src={item.imgPath}
              sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 23.3vw"
              className="hover:scale-105 duration-200"
              quality={50}
              fill
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
              priority
            />
        
          </div>
      <div className="mt-5">
        <h1 className="text-xl font-semibold text-slate-700">
          {item.title}
        </h1>
        <p className="text-slate-500 text-sm font-light mt-5">
          {item.description}
        </p>
      </div>
    </div>
  );
}
