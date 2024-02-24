"use client";
import { useState } from "react";
import Button from "@/components/Button";

export default function ResearchDescExtra() {
  const [btnToggle, setBtnToggle] = useState(false);
  return (
    <div>
      {btnToggle && (
        <>
          <p className="mb-5 text-slate-500 font-light">
            Dyadic’s well-trained field researchers and data collectors also
            extend the capacity of conducting quality research. Trained in
            various fields of development (i.e., Sociology, Anthropology,
            Development Studies, Public Administration, Statistics, Applied
            Economics etc.), the field researchers of Dyadic put an extra
            emphasis on extracting all possible aspects of the research. This
            team composition is a key strength of the firm to get things
            completed maintaining quality of the task.
          </p>
          <p className=" mb-5 text-slate-500 font-light">
            Dyadic applies robust quantitative tools for counterfactual
            analysis, including Randomized Control Trials (RCT) and Propensity
            Score Matching (PSM), to determine the efficacy of a program or
            policy. Dyadic has established itself as an expert both in Ex Post
            and Ex Ante impact evaluations. Dyadic also offers sophisticated
            qualitative and participatory methods, including Qualitative
            Longitudinal Research (QLR), Process Documentation Research (PDR)
            and Ethnography and Participatory Impact Assessment (PIA), to
            systematically assess our central question- ‘what works for whom and
            under what conditions?’. Two groups of highly trained and dedicated
            enumerators and anthropologists work for Dyadic to collect numerical
            and qualitative data. Human problems, and the intricacies of
            development practice, are complex phenomena. Thus, Dyadic takes an
            inclusive, multidisciplinary and mixed method approach to understand
            the complex social dynamics of research problems.
          </p>
          <p className=" mb-5 text-slate-500 font-light">
            Another special feature of Dyadic is its use of technology to ensure
            the quality of data collection. One of the tools Dyadic uses is Open
            Data Kit (ODK) platform and handheld electronic tablets (smart) to
            administer survey. Dyadic’s in-house team is capable of designing
            survey software from questionnaires. The team is well-versed in
            applying complex algorithms for creating interactive process of
            checking data validity.
          </p>
        </>
      )}
      <Button
        btnName={btnToggle ? "HIDE TEXTS" : "READ MORE"}
        handleBtn={() => setBtnToggle(!btnToggle)}
      />
    </div>
  );
}
