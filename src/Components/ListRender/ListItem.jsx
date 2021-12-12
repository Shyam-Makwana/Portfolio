import Tag from "../Tag/Tag";
import { VscGithub } from "react-icons/vsc";
import { GrCertificate } from "react-icons/gr";
import { HiLink } from "react-icons/hi";
import SocialIcon from "../Connect/SocialIcon";

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
        {item.certificate &&  <SocialIcon url={item.certificate} Icon="https://img.icons8.com/fluency/32/000000/certification.png"/>}
      </div>
    </div>
  );
};

export default ListItem;
