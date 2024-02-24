"use client"
import { useState } from "react";

export default function ResearchLinkCard() {
  const [isHovered, setHovered] = useState(false);

  return (
    <div className="cursor-pointer">
      <p className="py-2 text-sm border-b text-slate-500">
        PRINCIPAL SCIENTIST, TRANSLATIONAL BIOLOGY
      </p>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="flex justify-between items-start py-5 relative min-h-44"
      >
        <div className=" w-[60%]">
          <h1 className="lg:text-4xl text-2x text-slate-700">
            Agricultural Projects that costs low money
          </h1>
            <p className="font-light mt-2 text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nobis beatae in error libero aut. Saepe iure a ad deserunt doloribus neque sed est at ipsa rerum. Accusantium, dolore enim...</p>
        </div>
        <div className="arrow me-14">
          <span className={`arrowTexture ${isHovered && "animateArrow"}`} />
          <span className={`arrowTexture ${isHovered && "animateArrow"}`} />
          <span className={`arrowTexture ${isHovered && "animateArrow"}`} />
        </div>
      </div>
    </div>
  );
}
