"use client";
import Image from "next/image";
import { useState } from "react";
import Button from "./Button";

const tabContents = {
  tabOneContent: {
    title: "About us",
    desc: "At Dyadic, we are passionate about pioneering climate-smart solutions that not only address environmental challenges but also create viable business opportunities. Our approach combines iterative learning, systematic research, and a commitment to sustainable practices. We offer comprehensive project design and research services, leveraging our expertise to provide valuable insights and solutions for a greener and more sustainable future.",
    imgPath: "/assets/about-us.jpg",
    btnUrl: "/",
  },
  tabTwoContent: {
    title: "Why work with Dyadic?",
    desc: "At Dyadic, we prioritize project success with clear timelines and deliverables. Our expert team, backed by 13 years of experience, utilizes cutting-edge technology like AI and Machine Learning to address client needs efficiently.",
    imgPath: "/assets/what-we-do.jpg",
    btnUrl: "/",
  },
};

export default function AboutUsTab() {
  const [isTabClicked, setTabClicked] = useState(true);
  const [tabContent, setTabContent] = useState(tabContents.tabOneContent);

  function handleTabClick(content) {
    setTabClicked(!isTabClicked);
    setTabContent(content);
  }

  return (
    <div className="h-auto md:px-20 px-10 mt-10">
      <div className="flex xl:flex-row flex-col h-full w-full md:gap-14 gap-10">
        {/* Tab section */}
        <div className="xl:w-[42%] w-full">
          {/* Tab buttons */}
          <div className="flex justify-start w-full">
            <div
              onClick={() => handleTabClick(tabContents.tabOneContent)}
              className={` ${
                isTabClicked ? "bg-white" : "bg-slate-50 border-b duration-100"
              } md:w-[35%] w-[45%] h-12 flex justify-between items-center px-5 rounded-t-md border-t border-r border-l border-slate-300 text-slate-600 text-xs cursor-pointer select-none hover:bg-white`}
            >
              <span className="md:block hidden font-semibold text-slate-300">01</span>
              <p>WHO WE ARE</p>
            </div>
            <div className="w-[2%] border-b border-slate-300" />
            <div
              onClick={() => handleTabClick(tabContents.tabTwoContent)}
              className={` ${
                !isTabClicked ? "bg-white" : "bg-slate-50 border-b duration-100"
              } md:w-[35%] w-[45%] h-12 flex justify-between items-center px-5 rounded-t-md border-t border-r border-l border-slate-300 text-slate-600 text-xs cursor-pointer select-none hover:bg-white`}
            >
              <span className="md:block hidden font-semibold text-slate-300">02</span>
              <p>WHY US</p>
            </div>
            <div className="lg:w-[28%] w-[10%] border-b border-slate-30" />
          </div>

          {/* Tab Content */}

          <div className="h-full mt-20">
            <div className="flex flex-col">
              <div>
                <h1 className="md:text-5xl text-4xl">{tabContent.title}</h1>
                <p className="mt-10 text-slate-500 font-light">
                  {tabContent.desc}
                </p>
              </div>

              {/* <div className="mt-10">
                            <Button btnName="VIEW MORE" />
                        </div> */}
            </div>
          </div>
        </div>

        {/* tab Image section */}

        <div className="xl:w-[58%] w-full ">
          <div className="relative w-full xl:min-h-[28rem] lg:min-h-[33rem] md:min-h-[35rem] min-h-[20rem] lg:mt-10 mt-0">
            <Image
              alt="Random"
              src={tabContent.imgPath}
              fill
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
