import Button from "./Button";

export default function TechCard({content}) {

  return (
    <div className={`lg:min-h-[35rem] lg:w-[50%] w-full flex flex-col justify-between gap-5 ${content.bgColor} ${content.bgImage} bg-no-repeat bg-contain bg-right-top p-5 py-16 rounded-3xl shadow`}>
      <div className="h-full font-light text-slate-500 flex justify-center items-center gap-3">
        <div className="w-[80%]">
          <h1 className="text-3xl text-slate-700 font-normal">{content.title}</h1>
          <p className="text-slate-500 mt-5">
            {content.desc}
          </p>
          <ul className="mt-5 list-disc list-inside">
            {
              content.lists.map((list, i) => <li key={i}>{list}</li>)
            }
          </ul>
        </div>
      </div>
      <div className="w-full flex justify-end pe-16 scale-90">
        <Button btnName={"READ MORE"} />
      </div>
    </div>
  );
}
