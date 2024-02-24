import ResearchEvalCard from "./ResearchEvalCard";

const researchAndEvaluationCardsContent = [
  {
    id: 1,
    imgPath: "/assets/research-eval-01.png",
    title: "Project Management",
    description:
      "This service is tailored for government institutions and non-governmental organizations. We actively monitor and evaluate your project while delivering reports at different stages.",
  },
  {
    id: 2,
    imgPath: "/assets/research-eval-02.png",
    title: "Mobile Surveys",
    description:
      "Mobile phone penetration has made it possible for businesses to reach even the remotest corners of the world. We design, program and deploy mobile surveys on all mobile platforms.",
  },
  {
    id: 3,
    imgPath: "/assets/research-eval-03.png",
    title: "Capacity Building",
    description:
      "Improve effectiveness and sustainability in your organization by investing in your team’s ability to perform under unforeseen circumstances.",
  },
  {
    id: 4,
    imgPath: "/assets/research-eval-04.png",
    title: "Data Management",
    description:
      "At Dyadic, we feed on data. We collect, process, analyze, evaluate, report, and store data. By using the cloud, web analytics, artificial intelligence and machine learning, we are able to handle all forms of data.",
  },
  {
    id: 5,
    imgPath: "/assets/research-eval-05.png",
    title: "Business Intelligence",
    description:
      "By using your in-house business data, we can help you immensely improve your ROI and customer satisfaction.",
  },
  {
    id: 6,
    imgPath: "/assets/research-eval-06.png",
    title: "Big Data",
    description:
      "We have the technology and capacity to collect, analyze and leverage big data to your organization’s advantage. At Dyadic, no data is too complex for us.",
  },
];

export default function ResearchEval() {
  return (
    <div className="mt-20">
      <h1 className="border-b pb-5 text-slate-600 uppercase text-sm">
        Research and Evaluation Services
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-10 gap-10">
        {researchAndEvaluationCardsContent.map((item) => (
          <ResearchEvalCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
