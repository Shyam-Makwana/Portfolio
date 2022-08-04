const Education = ({ edu }) => {
  return (
    <div className="my-4">
      <h1 className="text-2xl font-bold" style={{
          color: "var(--text-primary)",
        }}>{edu.title}</h1>
      <p className="text-lg text-gray-300" style={{
          color: "var(--text-secondary)",
        }}>{edu.degree}</p>
      <i className="text-gray-300 text-base" style={{
          color: "var(--text-info)",
        }}>{edu.year}</i>
    </div>
  );
};

export default Education;
