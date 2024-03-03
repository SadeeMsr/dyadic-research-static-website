"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathName = usePathname();

  // const glassMorphicClasses = "backdrop-filter backdrop-blur-sm bg-opacity-0"

  return (
    <header className="relative z-20">
      <div
        className={`border-b ${pathName === "/" && "absolute bg-white"} w-full`}
      >
        <div className="px-6 md:px-12 lg:mx-auto lg:ps-20">
          <div className="flex items-center justify-between">
            <div className="relative">
              <Link href="/">
                <div className="flex justify-start items-center gap-2 font-semibold text-xl w-[60%] md:w-[60%] lg:w-[40%]">
                  {/* <div className="bg-green-400 absolute h-36 w-40 -z-10" /> */}
                  <Image
                    src={`/assets/logo.png`}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="py-2"
                    style={{ width: "100%", height: "auto" }}
                    alt="Random image"
                    priority
                  />
                </div>
              </Link>
            </div>

            <div className="flex items-center justify-end border-l lg:border-l-0">
              <input
                type="checkbox"
                name="hamburger"
                id="hamburger"
                className="peer"
                hidden
              />
              <label
                htmlFor="hamburger"
                className="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden"
              >
                <div
                  aria-hidden="true"
                  className="m-auto h-0.5 w-6 rounded bg-sky-900 transition duration-300"
                ></div>
                <div
                  aria-hidden="true"
                  className="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 transition duration-300"
                ></div>
              </label>

              <div className="peer-checked:translate-x-0 fixed inset-0 w-[calc(100%-4.5rem)] translate-x-[-100%] lg:bg-transparent bg-white border-r shadow-xl transition duration-300 lg:border-r-0 lg:w-auto lg:static lg:shadow-none lg:translate-x-0">
                <div className="flex flex-col h-full justify-between lg:items-center lg:flex-row">
                  <ul
                    className={`px-8 pt-10 text-slate-700 space-y-8 md:px-14 lg:space-y-0 lg:flex lg:space-x-12 lg:pt-0`}
                  >
                    <Link
                      href="/"
                      className="lg:hidden block border-b group relative before:absolute before:inset-x-0 before:bottom-0  before:origin-right before:scale-x-0 before:bg-slate-100 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100"
                    >
                      <div className=" flex justify-start items-center w-[40%]">
                        {/* <div className="bg-green-400 absolute h-36 w-40 -z-10" /> */}
                        <Image
                          src={`/assets/logo.png`}
                          width={0}
                          height={0}
                          sizes="100vw"
                          className="py-2"
                          style={{ width: "100%", height: "auto" }}
                          alt="Random image"
                          priority
                        />
                      </div>
                    </Link>
                    <Link
                      href="/"
                      className=" group relative before:absolute before:inset-x-0 before:bottom-0 before:h-1 before:origin-right before:scale-x-0 before:bg-slate-100 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100"
                    >
                      <li className="my-5 lg:my-0 font-semibold">Home</li>
                    </Link>

                    <Link
                      href="/about-us"
                      className=" group relative before:absolute before:inset-x-0 before:bottom-0 before:h-1 before:origin-right before:scale-x-0 before:bg-slate-100 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100"
                    >
                      <li className="my-5 lg:my-0 font-semibold">What We Do</li>
                    </Link>

                    <Link
                      href="/research-and-publications"
                      className=" group relative before:absolute before:inset-x-0 before:bottom-0 before:h-1 before:origin-right before:scale-x-0 before:bg-slate-100 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100"
                    >
                      <li className="my-5 lg:my-0 font-semibold">
                        Research & Publications
                      </li>
                    </Link>

                    <Link
                      href="/contact-us"
                      className=" group relative before:absolute before:inset-x-0 before:bottom-0 before:h-1 before:origin-right before:scale-x-0 before:bg-slate-100 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100"
                    >
                      <li className="my-5 lg:my-0 font-semibold">Contact us</li>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
