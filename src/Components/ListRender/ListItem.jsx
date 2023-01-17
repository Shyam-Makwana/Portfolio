import Tag from "../Tag/Tag";
import SocialIcon from "../Connect/SocialIcon";
import ISRO from "../../assets/ISRO_Certificate.pdf";
import CODECHEF from "../../assets/CodeChef_DDU_Chapter_Certificate.pdf";
import FOURCLOWNS from "../../assets/FourClowns_Certificate.pdf";
import REPORT from "../../assets/ISRO_Project_Report.pdf";

const ListItem = ({ item }) => {
  return (
    <div className="my-4">
      <h1 className="text-2xl font-bold" style={{
        color: "var(--text-primary)",
      }}>{item.title}</h1>
      {item.role && <p className="text-lg text-gray-300" style={{
        color: "var(--text-secondary)",
      }}>{item.role}</p>}
      {item.duration && (
        <i className="text-gray-300 text-base" style={{
          color: "var(--text-secondary)",
        }}>{item.duration}</i>
      )}
      {item.description && (
        <p
          className="mt-1 text-base"
          style={{
            color: "var(--text-info)",
          }}
        >
          {item.description}
        </p>
      )}
      {item.techs && (
        <div className="mt-1">
          {item.techs.map((tech) => (
            <Tag text={tech} key={tech} />
          ))}
        </div>
      )}
      <div className="flex">
        {item.github && <SocialIcon url={item.github} Icon="https://img.icons8.com/color/32/000000/github--v1.png" pdr={7}/>}
        {item.link && <SocialIcon url={item.link} Icon="https://img.icons8.com/color/32/000000/domain--v1.png" pdr={5}/>}
      </div>
      <div>
        {item.isro_certificate &&  <SocialIcon url={ISRO} Icon="https://img.icons8.com/fluency/32/000000/certification.png"/>}
        {item.fourclowns_certificate &&  <SocialIcon url={FOURCLOWNS} Icon="https://img.icons8.com/fluency/32/000000/certification.png"/>}
        {item.codechef_certificate &&  <SocialIcon url={CODECHEF} Icon="https://img.icons8.com/fluency/32/000000/certification.png"/>}
        {item.isro_report &&  <SocialIcon url={REPORT} Icon="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/30/000000/external-report-data-analytics-flaticons-lineal-color-flat-icons-3.png"/>}
      </div>
    </div>
  );
};

export default ListItem;
