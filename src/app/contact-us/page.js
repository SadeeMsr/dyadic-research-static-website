import Image from "next/image";
import Link from "next/link";

const locations = [
  {
    title: "Uganda",
    address:
      "Rubaga Road, Sembule B Zone, Rubaga Division, Kampala, Uganda. P.O Box 27388, Kampala, Uganda",
    phone: "+256773928080 | +256700595967",
    email: "info@dyadicresearchimpacts.com",
  },
  {
    title: "Kenya",
    address: "Duduville Campus, Kasarani, Nairobi, Kenya",
    phone: "+256773928080 | +256700595967",
    email: "info@dyadicresearchimpacts.com",
  },
  {
    title: "Bangladesh",
    address: "Konda - Bongaon Bazar road, Boliarpur, Amin Bazar, Dhaka 1340",
    link1:
      "https://www.google.com/maps/place/Dyadic+BSF+Farm/@23.7990717,90.290435,17z/data=!3m1!4b1!4m6!3m5!1s0x3755b9f0d0a55261:0x95a2124657a643a7!8m2!3d23.7990668!4d90.2930099!16s%2Fg%2F11thh8spt6?entry=ttu",
    link2:
      "https://www.google.com/maps/place/Dyadic+Climate+Smart+Agro+Farm/@23.8141753,90.445285,17z/data=!3m1!4b1!4m14!1m7!3m6!1s0x3755c76ac0c7f707:0x123f340fb50da20a!2sDyadic+Climate+Smart+Agro+Farm!8m2!3d23.8141704!4d90.4478599!16s%2Fg%2F11jycntzxv!3m5!1s0x3755c76ac0c7f707:0x123f340fb50da20a!8m2!3d23.8141704!4d90.4478599!16s%2Fg%2F11jycntzxv?entry=ttu",
    phone: "+256773928080 | +256700595967",
    email: "info@dyadicresearchimpacts.com",
  },
];

export default function Page() {
  return (
    <div className="md:mt-24 mt-10">
      <div className="flex xl:flex-row flex-col gap-10 lg:px-20 px-10">
        <div className="xl:w-[50%] w-full flex flex-col ">
          <h1 className="md:text-5xl text-3xl">
            If you have any specific questions concerning the work of our
            Research, feel free to contact us.
          </h1>
          <p className="text-slate-500 font-light text-sm mt-10">
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
      <div className="bg-[#f0f7fd] h-auto w-full mt-20 lg:px-20 px-10 lg:py-28 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 ">
          {locations.map((location, index) => (
            <div
              key={index}
              className="flex flex-col justify-between bg-white p-10 rounded-lg md:text-base text-sm h-auto"
            >
             <div>
             <h1 className="text-2xl">{location.title}</h1>
              <p className={`text-slate-500 ${index===2 || "h-20"} font-light mt-5 flex gap-2`}>
                {location.address}
              </p>
             </div>
              {location.link1 && (
                <Link
                  href={location.link1}
                  target="_blank"
                  className="text-slate-500 hover:underline font-light mt-5 flex gap-2"
                >
                  {location.address}
                </Link>
              )}
              {location.link2 && (
                <Link
                  href={location.link2}
                  target="_blank"
                  className="text-slate-500 hover:underline font-light mt-5 flex gap-2"
                >
                  {location.address}
                </Link>
              )}
              <div>
                <p className="text-slate-500 font-light my-5">
                  ☎ {location.phone}
                </p>
                <p className="text-slate-500 font-light mt-5 break-words">
                  {location.email}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
