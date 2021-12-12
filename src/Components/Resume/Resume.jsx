import PDF from "../../assets/Resume.pdf";

const Resume = () => {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      href={PDF}
      className="ml-2 p-2 border-2 border-white text-white bg-black rounded-md transition-all duration-300 font-bold"
      style={{
        color: "var(--background-primary)",
        background: "var(--text-primary)",
      }}
    >
      Resume
    </a>
  );
};

export default Resume;
