import Image from "next/image";
import IntroIcon from "../Icons/SectionIntroIcon.svg";

const gridTexts = [
  {
    id: 0,
    title: " Testing Solutions",
    desc: "We test tech in agriculture, built environment, prioritizing solutions for marginalized populations.",
  },
  {
    id: 1,
    title: "Doing Deep Adaptation",
    desc: "We believe in context-appropriate solutions and problem-solving over innovation for its own sake.",
  },
  {
    id: 2,
    title: "Generating Rigorous Evidence",
    desc: "Blending practical wisdom, scientific research, fostering farmer-researcher collaboration for robust evidence.",
  },
  {
    id: 3,
    title: "Creating New Business Opportunity",
    desc: "Prioritizing profit, promoting business-focused solutions, operating businesses addressing climate-smart solutions.",
  },
];

export default function OurServices() {
  return (
    <div className="relative xl:min-h-[70rem] lg:min-h-[110rem] md:min-h-[110rem] min-h-[98rem]">
      <div className=" w-full flex xl:flex-row flex-col absolute -top-20">
        {/* The big service cards */}
        <div
          className="bg-[#F5F5F5] h-[96%] xl:w-[58%] rounded-[2.3rem] shadow"
          style={{ zIndex: "10" }}
        >
          <div className="flex items-center gap-5">
            <div className="bg-gradient-to-t from-pink-200 to-cyan-300 p-4 py-5">
              <Image src={IntroIcon} alt="My SVG" width={30} height={30} />
            </div>
            <p className="text-slate-500 text-sm">OUR SERVICES</p>
          </div>
          <div className="h-[90%] flex flex-col justify-center ms-20 xl:py-38 py-28 pb-40">
            <div className="w-[75%]">
              <h1 className="md:text-5xl text-3xl text-slate-800">
                We strive to address some of the biggest challenges in
                agriculture today
              </h1>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:gap-28 gap-14 mt-28">
                {gridTexts.map((item) => {
                  return (
                    <div key={item.id}>
                      <h3 className="text-2xl text-slate-600">{item.title}</h3>
                      <p className="mt-5 text-slate-500">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* The image or video beside service card */}
        <div className="h-min-screen md:block hidden xl:w-[42%] lg:w-full bg-[url('/assets/dotted-bg.png')] bg-no-repeat bg-right-top">
          <div className="relative mt-28">
            <div className="absolute xl:w-[45rem] w-full xl:h-[45rem] lg:h-[48rem] md:h-[31rem] h-[18rem] xl:top-72 xl:-left-32 z-[10]">
              <Image
                alt="Random"
                src="/assets/black-soldier-fly.jpg"
                fill
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
