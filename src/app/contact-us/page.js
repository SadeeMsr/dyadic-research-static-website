import Image from "next/image";
import Link from "next/link";
// import { FaLocationDot } from "react-icons/fa6";

export default function page() {
  return (
    <div className=" md:mt-24 mt-10">
      <div className="flex xl:flex-row flex-col gap-10 lg:px-20 px-10">
        <div className="xl:w-[50%] w-full flex flex-col justify-between">
          <h1 className="md:text-5xl text-3xl">
            If you have any specific questions concerning the work of our
            Research, feel free to contact us.
          </h1>

          <p className="text-slate-500 font-light text-sm xl:mt-0 mt-10">
            Please email us at{" "}
            <span className="font-semibold underline">
              info@dyadicresearchimpacts.com
            </span>{" "}
            for any query*
          </p>
        </div>
        <div className="xl:w-[50%] w-full overflow-hidden rounded-lg">
          <Image
            alt="Mountains"
            src="/assets/lab1.PNG"
            width={700}
            height={475}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
      </div>
      <div className=" bg-[#f0f7fd] w-full mt-20 lg:px-20 px-10 lg:py-28 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 ">
          <div className="bg-white p-10 rounded-lg md:text-base text-sm">
            <h1 className="text-2xl">Uganda</h1>
            <p className="text-slate-500 font-light mt-5 h-20 flex gap-2">
              Rubaga Road, Sembule B Zone, Rubaga Division, Kampala, Uganda. P.O
              Box 27388, Kampala, Uganda
            </p>

            <p className="text-slate-500 font-light mt-5">
              {" "}
              ☎ +256773928080 | +256700595967
            </p>
            <p className="text-slate-500 font-light mt-5">
              {" "}
              📧 info@dyadicresearchimpacts.com
            </p>
          </div>

          <div className="bg-white p-10 rounded-lg md:text-base text-sm">
            <h1 className="text-2xl">Kenya</h1>
            <p className="text-slate-500 font-light h-20 mt-5 flex gap-2 ">
              Duduville Campus, Kasarani, Nairobi, Kenya
            </p>

            <p className="text-slate-500 font-light mt-5">
              {" "}
              ☎ +256773928080 | +256700595967
            </p>
            <p className="text-slate-500 font-light mt-5">
              {" "}
              📧 info@dyadicresearchimpacts.com
            </p>
          </div>

          <div className="bg-white p-10 rounded-lg md:text-base text-sm">
            <h1 className="text-2xl">Bangladesh</h1>
            <Link
              href={
                "https://www.google.com/maps/place/Dyadic+BSF+Farm/@23.7990717,90.290435,17z/data=!3m1!4b1!4m6!3m5!1s0x3755b9f0d0a55261:0x95a2124657a643a7!8m2!3d23.7990668!4d90.2930099!16s%2Fg%2F11thh8spt6?entry=ttu"
              }
              target="_blank"
              className="text-slate-500 hover:underline font-light mt-5 flex gap-2 "
            >
              Konda - Bongaon Bazar road, Boliarpur,
              Amin Bazar, Dhaka 1340
            </Link>

            <Link
            href={"https://www.google.com/maps/place/Dyadic+Climate+Smart+Agro+Farm/@23.8141753,90.445285,17z/data=!3m1!4b1!4m14!1m7!3m6!1s0x3755c76ac0c7f707:0x123f340fb50da20a!2sDyadic+Climate+Smart+Agro+Farm!8m2!3d23.8141704!4d90.4478599!16s%2Fg%2F11jycntzxv!3m5!1s0x3755c76ac0c7f707:0x123f340fb50da20a!8m2!3d23.8141704!4d90.4478599!16s%2Fg%2F11jycntzxv?entry=ttu"}
            target="_blank"
            className="text-slate-500 hover:underline font-light mt-5 flex gap-2">
             Plot#1292, Road#60a, Block-L,
              Bashundhara R/A, Vatara, Dhaka-1230
            </Link>
            <p className="text-slate-500 font-light mt-5">
              {" "}
              ☎ +256773928080 | +256700595967
            </p>
            <p className="text-slate-500 font-light mt-5">
              {" "}
              📧 info@dyadicresearchimpacts.com
            </p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
