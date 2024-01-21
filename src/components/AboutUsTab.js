"use client"
import Image from "next/image";
import Button from "./Button";
import { useState } from "react";

const tabContents = {
    tabOneContent:{
        title:"About Us",
        desc: "Liber iriure vix cu, fugit dicat no qui, posse detraxit has cu. Ex sint impedit vim, autem justo oportere no vel. Cu esse tacimates moderatius sed, case iriure imperdiet his ei. Eum nisl discere urbanitas te, nonumes tibique blandit cu eum. Per consul principes similique ea, delicata definitiones mei id. In purt harum sed, aliquid voluptu vulputate per ex, pro te idque esse possit id.",
        imgPath:"/assets/about-us.jpg",
        btnUrl:"/"
    },
    tabTwoContent:{
        title:"Our Mission",
        desc: "Nemore virtute fastidii quo ei, esse possit nam sea te, qui purto graecis invidunt cu. Mea nusquam apeirian cu, usu at dicta eirmod. Id everti facilisis his, nostro nominati eleifend vel te, an quis meliore has. Id nec quis omnis aliquid. Nonumes medioc nec no, duo an veri nihil denique, solet civibus phaedrum in has. Liber iriure fugit dicat no qui. In purto harum sed.",
        imgPath:"/assets/what-we-do.jpg",
        btnUrl:"/"
    }
}


export default function AboutUsTab() {

const [isTabClicked, setTabClicked] = useState(true)
const [tabContent, setTabContent] = useState(tabContents.tabOneContent)

function handleTabClick(content) {
    setTabClicked(!isTabClicked)
    setTabContent(content)
}


  return (
    <div className="h-[38rem] px-20">
        <div className="flex h-full w-full gap-12">
            {/* Tab section */}

            <div className="w-[42%]">

                {/* Tab buttons */}

                <div className="flex justify-start w-full">
                    <div onClick={()=>handleTabClick(tabContents.tabOneContent)} className={` ${isTabClicked ? 'bg-white':'bg-slate-50 border-b duration-100'} w-[35%] h-12 flex justify-between items-center px-5 rounded-t-md border-t border-r border-l border-slate-300 text-slate-600 text-xs cursor-pointer select-none hover:bg-white`}>
                        <span className="font-semibold text-slate-300">01</span>
                        <p>WHO WE ARE</p>
                    </div>
                    <div className="w-[2%] border-b border-slate-300" />
                    <div onClick={()=>handleTabClick(tabContents.tabTwoContent)} className={` ${!isTabClicked ? 'bg-white':'bg-slate-50 border-b duration-100'} w-[35%] h-12 flex justify-between items-center px-5 rounded-t-md border-t border-r border-l border-slate-300 text-slate-600 text-xs cursor-pointer select-none hover:bg-white`}>
                        <span className="font-semibold text-slate-300">02</span>
                        <p>WHAT WE DO</p>
                    </div>
                    <div className="w-[28%] border-b border-slate-30" />
                </div>

                {/* Tab Content */}

                <div className="h-full flex items-center">
                    <div className="flex flex-col">
                        <div>
                            <h1 className="text-5xl">{tabContent.title}</h1>
                            <p className="mt-10 text-slate-500 font-light">{tabContent.desc}</p>
                        </div>

                        <div className="mt-10">
                            <Button btnName="VIEW MORE" />
                        </div>
                    </div>
                </div>
            </div>

            {/* tab Image section */}

            <div className="w-[58%]">
               <div className="relative w-full h-full">
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
  )
}
