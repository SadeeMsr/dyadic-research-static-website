import ResearchLinkCard from "./ResearchLinkCard";

export default function ResearchLinkContainer() {
  return (
   <>
     <div className="py-10 min-h-screen flex flex-col gap-10 mt-20">
      <ResearchLinkCard />
      <ResearchLinkCard />
      <ResearchLinkCard />
      <ResearchLinkCard />
      <ResearchLinkCard />
    </div>
   </>
  );
}
