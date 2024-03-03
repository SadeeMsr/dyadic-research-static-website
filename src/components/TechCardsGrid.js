import TechCard from "./TechCard";

const cardsDetails = [
  {
    id: 0,
    bgColor: "bg-[#F5F5F5]",
    bgImage: "bg-[url('/assets/circularShapeBg1.png')]",
    title: "Business Model Development",
    desc: "At vero eos et accusamus et iusto odio voluptas debitis ducimus qui blanditiis praesentium.",
    lists: [
      "Waste management (biogas plants, black soldier fly)",
      "Hydroponics",
      "Composting",
      "Alternative fertilizer (Azolla)",
      "Agro forestry",
    ],
  },
  {
    id: 1,
    bgColor: "bg-[#F0F7FD]",
    bgImage: "bg-[url('/assets/circularShapeBg2.png')]",
    title: "Research and Evaluation Services",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
    lists: [
      "Survey and data management",
      "Impact evaluation",
      "Training and skills development",
    ],
  },
];

export default function TechCardsGrid() {
  return (
    <div className="md:px-20 xl:mt-36 lg:mt-32 mt-10 px-10 flex lg:flex-row flex-col justify-start items-center md:gap-5 gap-20 h-auto">
      {cardsDetails.map((item) => (
        <TechCard key={item.id} content={item} />
      ))}
    </div>
  );
}
