import ResearchDescExtra from "./ResearchDescExtra";

export default function ResearchDesc() {

  return (
    <div className="flex lg:flex-row flex-col gap-20 pt-20">
      <div className="lg:w-[50%] w-full">
        <div>
          <h1 className="lg:text-4xl text-3xl text-slate-700">
            Capacity and Strength in Research
          </h1>
          <p className="mt-5 mb-5 text-slate-500 font-light">
            Dyadic, since its inception, has been focusing on “Data Quality” and
            “Quality Research” as its principal purpose. Dyadic’s ability has
            been proved in every aspect of research. In order to find out
            suitable solutions to development problems and to discover the ways
            of incorporating (socio-economic) innovation, practical experience
            and lesson learnt of any intervention, research is essential.
            Therefore, Dyadic puts a great emphasis in designing and conducting
            excellent research. In research, the key capacity and strength of
            Dyadic is the diversified team composition, which reflects a great
            amalgam of quantitative and qualitative experts. Leading researchers
            of Dyadic have extensive research experience worldwide. The
            combination of different scholars from different academic
            backgrounds makes it possible for Dyadic to capture both the
            quantitative analysis and qualitative interpretation of
            socio-economic aspects of East Africa and South Asia, and to do the
            international comparison as necessary.
          </p>
          <ResearchDescExtra />
        </div>
      </div>
      <div className="lg:w-[50%] w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-14 gap-10 ">
          <div>
            <h3 className="text-2xl text-slate-700">Participatory Research</h3>
            <p className="mt-5 text-slate-500 font-light">
              Engaging stakeholders using online survey platforms, GIS software,
              and project management platforms.
            </p>
          </div>
          <div>
            <h3 className="text-2xl text-slate-700">Data Quality Assurance</h3>
            <p className="mt-5 text-slate-500 font-light">
              Using advanced data tools like ODK, R/Python for cleaning,
              validation, and quality control for data cleaning, validation, and
              quality control.
            </p>
          </div>

          <div>
            <h3 className="text-2xl text-slate-700">Impact Evaluation</h3>
            <p className="mt-5 text-slate-500 font-light">
              Using statistical software for quantitative assessments (RCT,
              PSM), and qualitative methods (QLR, PDR, Ethnography).
            </p>
          </div>


          <div>
            <h3 className="text-2xl text-slate-700">
              Technology-Driven Research
            </h3>
            <p className="mt-5 text-slate-500 font-light">
              We utilize interactive data visualization tools like Tableau or
              Power BI for for data collection, analysis, and visualization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
