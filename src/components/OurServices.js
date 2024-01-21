import Image from "next/image";
import IntroIcon from "../Icons/SectionIntroIcon.svg"

export default function OurServices() {
    return (
        <div className="relative">
            <div className="w-full h-[70em] flex absolute -top-20">
                {/* The big service cards */}
                <div className="bg-[#F5F5F5] h-[96%] w-[54%] rounded-[2.3rem] shadow" style={{zIndex:"10"}}>
                    <div className="flex items-center gap-5">
                        <div className="bg-gradient-to-t from-pink-100 to-sky-300 p-4 py-5">
                            <Image
                                src={IntroIcon}
                                alt="My SVG"
                                width={30}
                                height={30}
                            />
                        </div>
                        <p className="text-slate-500 text-sm">OUR SERVICES AND PROJECTS</p>
                    </div>
                    <div className="h-[90%] flex flex-col justify-center ms-20">
                    <div className="w-[70%]">
                    <h1 className="text-5xl text-slate-800">We strive to address some of the biggest challenges in microbiology today</h1>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-28 mt-28">
                            <div>
                                <h3 className="text-2xl text-slate-600">Data Technology</h3>
                                <p className="mt-5 text-slate-500">Duis aute irure dolor in assueverit mea voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </div>

                            <div>
                                <h3 className="text-2xl text-slate-600">Outreach and Education</h3>
                                <p className="mt-5 text-slate-500">Duis aute irure dolor in assueverit mea voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </div>

                            <div>
                                <h3 className="text-2xl text-slate-600">Biomimicry</h3>
                                <p className="mt-5 text-slate-500">Duis aute irure dolor in assueverit mea voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </div>

                            <div>
                                <h3 className="text-2xl text-slate-600">Software Development</h3>
                                <p className="mt-5 text-slate-500">Duis aute irure dolor in assueverit mea voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>

                
                {/* The image or video beside service card */}
                <div className="h-full w-[46%]">
                    <div className="flex justify-end h-[50%]">
                        <div className="w-[60%] bg-[url('/assets/dotted-bg.png')]" />
                    </div>
                    <div className="relative">
                       <div className="absolute w-full h-[45rem] -top-24 -left-32 z-[10]">
                            <Image
                                alt="Random"
                                src="/assets/aboutUs.jpg"
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
  )
}
