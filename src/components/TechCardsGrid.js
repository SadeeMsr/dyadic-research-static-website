import TechCard from "./TechCard";

const cardsDetails = [
  {
    id: 0,
    bgColor: "bg-[#F5F5F5]",
    bgImage: "bg-[url('/assets/circularShapeBg1.png')]",
    title: "Beratung für Data Science",
    desc:"At vero eos et accusamus et iusto odio voluptas debitis ducimus qui blanditiis praesentium.",
    lists: ["The Brain Engineering", "Neural Engineering", "Electrical Signals in the Brain", "Systems Neuroscience"]
  },
  {
    id: 1,
    bgColor: "bg-[#F0F7FD]",
    bgImage: "bg-[url('/assets/circularShapeBg2.png')]",
    title: "Machine Learning",
    desc:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
    lists: ["Neural Threads", "Target Discovery", "Neural Technology", "Cognitive Neuroscience"]
  },
];



export default function TechCardsGrid() {
  return (
    <div className="px-20 flex justify-start items-center gap-5 h-[60rem]">
      {cardsDetails.map((item) => (
        <TechCard key={item.id} content={item} />
      ))}
    </div>
  );
}
