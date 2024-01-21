import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <div className="relative text-white " style={{ zIndex: 10 }}>
      <div className="flex justify-between items-center px-20 py-14 w-full absolute">
        <Link href="/">
          <div className="flex justify-start items-center gap-2 font-semibold text-xl w-[60%]">
            <Image
              src={`/assets/logo.png`}
              width={0}
              height={0}
              sizes="100vw"
              className="p-2"
              style={{ width: "100%", height: "auto" }}
              alt="Random image"
            />
          </div>
        </Link>
        <div className="flex items-center gap-3 w-80 font-light">
          <p>
            Development and research center, specializing in software
            development
          </p>
        </div>
        <div className="flex gap-5 font-semibold">
          <Link href="/">Home</Link>
          <Link href="/">About us</Link>
          <Link href="/">Research & Publications</Link>
          <Link href="/">Contact us</Link>
        </div>
      </div>
    </div>
  );
}
