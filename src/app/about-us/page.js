import BModelDev from "@/components/BModelDev";
import ResearchEval from "@/components/ResearchEval";
import Image from "next/image";




export default function page() {
  return (
    <div className="min-h-screen md:px-20 px-5 mt-16 pb-20">
      <div className="relative lg:h-[45rem] h-[15rem] cursor-pointer overflow-hidden rounded-3xl">
        <Image
          alt="Random"
          src="/assets/lab2.jpg"
          fill
          className="md:object-cover object-contain"
        />
      </div>

      <BModelDev />
      <ResearchEval />

      {/* <div className="py-20">
        <div className="border-b border-slate-300">
          <h1 className="text-sm text-slate-600 py-5">GALLERY</h1>
        </div>
        <div className="overflow-hidden rounded-3xl mt-20">
          <PhotoGallery />
        </div>
      </div> */}
    </div>
  );
}
