import PDF from "../../assets/Resume.pdf";

const Resume = () => {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      href={PDF}
      className="ml-2 p-2 border-2 rounded-md transition-all duration-300 font-bold"
      style={{
        color: "var(--background-primary)",
        borderColor: "var(--text-info)",
        background: "var(--text-info)",
      }}
    >
      Resume
    </a>
  );
};

export default Resume;
