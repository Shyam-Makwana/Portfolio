import IconHeart from "../Icons/heart";

const Footer = () => {
  return (
    <div>
      <div className="flex justify-center items-center mb-4 font-bold text-xl" style={{ color: "var(--text-primary)" }}>
        <p style={{ display: 'inline' }}>Made with</p>
        <div className="mx-1" style={{ display: 'inline' }}>
          <IconHeart/>
        </div>
        <p style={{ display: 'inline' }}>by Shyam Makwana</p>
      </div>
    </div>
  );
};

export default Footer;
