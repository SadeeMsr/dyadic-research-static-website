import ResearchType from "@/components/ResearchType";
import ResearchLinkContainer from "@/components/ResearchLinkContainer";

const placeholderTexts  = [
  {
    type: "heading1",
    text: "Delving into Research and Publications: Dyadic's Ongoing Commitment to Excellence, Innovation, and Data Integrity",
  },
];



export default function page() {
  return (
    <div className="min-h-screen md:px-20 px-10">
      {/* Page title text */}
      <div className="py-20 border-b">
        <h1 className="md:text-6xl text-4xl w-[70%] text-slate-700">
          Excellence, innovation, and data integrity in Research and Publications
        </h1>
      </div>

      {/* Research description section */}
      <ResearchType />

      {/* Research Links section */}
      <div>
        <ResearchLinkContainer />
      </div>
    </div>
  );
}
