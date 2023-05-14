import Tag from "../Tag/Tag";
import ISRO from "../../assets/ISRO_Certificate.pdf";
import CODECHEF from "../../assets/CodeChef_DDU_Chapter_Certificate.pdf";
import FOURCLOWNS from "../../assets/FourClowns_Certificate.pdf";
import REPORT from "../../assets/ISRO_Project_Report.pdf";
import IconReport from "../Icons/report";
import IconGitHubPlain from "../Icons/github_plain";
import IconWebsite from "../Icons/website";
import IconCertificate from "../Icons/certificate";

const ListItem = ({ item }) => {
  return (
    <div className="my-4">
      {item.title && <h1 className="text-2xl font-bold" style={{
        color: "var(--text-info)",
      }}><a href={item.url} target="_blank" rel="noreferrer">{item.title}</a></h1>}
      {item.role && <p className="text-lg text-gray-300" style={{
        color: "var(--text-primary)",
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
            color: "var(--text-3)",
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
        {item.isro_report &&  <IconReport url={REPORT} pdt={5} pdr={5}/>}
        {item.link && <IconWebsite url={item.link} pdt={6} pdr={10}/>}
        {item.github && <IconGitHubPlain url={item.github} pdt={4}/>}
        {item.isro_certificate &&  <IconCertificate url={ISRO} pdt={5}/>}
        {item.fourclowns_certificate &&  <IconCertificate url={FOURCLOWNS} pdt={5}/>}
        {item.codechef_certificate &&  <IconCertificate url={CODECHEF} pdt={5}/>}
      </div>
    </div>
  );
};

export default ListItem;
