import SocialIcon from "../Connect/SocialIcon";
import DDU_Degree from "../../assets/DDU_Degree.pdf";
import DDU_Transcript from "../../assets/DDU_Transcript.pdf";
import DDU_Letter from "../../assets/DDU_Letter.pdf";
import IUB_Transcript from "../../assets/IUB_Transcript.pdf";
import IconTranscript from "../Icons/transcript";
import IconDegree from "../Icons/degree";
import IconMedal from "../Icons/medal";

const Education = ({ edu }) => {
  return (
    <div className="my-4">
      <h1 className="text-2xl font-bold" style={{
          color: "var(--text-primary)",
        }}>{edu.title}</h1>
      <p className="text-lg text-gray-300" style={{
          color: "var(--text-info)",
        }}>{edu.degree}</p>
      <i className="text-gray-300 text-base" style={{
          color: "var(--text-secondary)",
        }}>{edu.year}</i>
      <div className="flex">
        {edu.iub_transcript &&  <IconTranscript url={IUB_Transcript} pdt={5} pdr={5}/>}
        {edu.ddu_degree &&  <IconDegree url={DDU_Degree} pdt={8} pdr={5}/>}
        {edu.ddu_transcript &&  <IconTranscript url={DDU_Transcript} pdt={5} pdr={5}/>}
        {edu.ddu_letter &&  <IconMedal url={DDU_Letter} pdt={5} pdr={5}/>}
      </div>
    </div>
  );
};

export default Education;
