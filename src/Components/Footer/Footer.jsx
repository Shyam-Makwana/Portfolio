const Footer = () => {
  return (
    <div>
      <div className="flex justify-center items-center mb-4 font-bold text-xl" style={{ color: "var(--text-primary)" }}>
        <p style={{ display: 'inline' }}>Made with</p>
        <div className="mx-1" style={{ display: 'inline' }}>
          <img src="https://img.icons8.com/color-glass/23/000000/like.png" alt="" />
        </div>
        <p style={{ display: 'inline' }}>by Shyam Makwana</p>
      </div>
    </div>
  );
};

export default Footer;
