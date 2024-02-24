import BModelCard from "./BModelCard";

const bModelContents = [
    {
      id: 1,
      imgPath: "/assets/bmodel-04.jpg",
      title: "Many use of Azolla",
      description:
        "There are many use of azolla from animal feed to soi amendment, and we are experimenting with different production and business models to use the tiny azolla to capture nitrogen from the thin air.",
    },
    {
      id: 2,
      imgPath: "/assets/bmodel-05.png",
      title: "Aquaponics & Hydroponics",
      description:
        "We are experimenting with micro-setups that can be adopted by smallhodler farmers to solve seasonal shortage of water for vegetable cultivation and nutrition deficiency.",
    },
    {
      id: 3,
      imgPath: "/assets/bmodel-06.jpg",
      title: "Agro-forestry",
      description:
        "We are working on linking farmers with the carbon economy so that agro-foresty or other carbon capture technologies such as biochar does not remain unprofitable for the smallhodlers.",
    },
  {
    id: 4,
    imgPath: "/assets/bmodel-01.jpg",
    title: "Black soldier fly (BSF) value chain",
    description:
      "While BSF larvae can be used for waste management to reduce methane emission as well as reduce reliance on carbon emitting protein source for animal feed, there is a lack of sustainable value chain for taking this to scale. We are working at our larvae production and processing plants and in collaboration with farmers to create market linkages for economically viable micro, small and medium enterprises.",
  },
  
  {
    id: 5,
    imgPath: "/assets/bmodel-02.jpg",
    title: "Biogas for cleaner energy",
    description:
      "We started with a biogas plant that use kitchen waste for drying our BSF larvae and now expanding to offer access to cleaner cooking energy. We are working to promote lower cost setup and financial products to promote its adoption.",
  },
  {
    id: 6,
    imgPath: "/assets/bmodel-03.jpg",
    title: "Vermi-composting",
    description:
      "We get compost form our BSF frass and biogas plants, but also doing vermi-commposting. We use multiple systems of resource management combining BSF larvae, biogas and vermicoposting to waste of our collected waste.",
  },
];

export default function BModelDev() {
  return (
    <div className="mt-20">
      <h1 className="border-b pb-5 text-slate-600 uppercase text-sm">
        Business Model Development
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
        {bModelContents.map((item) => (
          <BModelCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
