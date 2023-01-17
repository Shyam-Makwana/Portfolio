import BottomLine from "./BottomLine";
import SocialIcon from "./SocialIcon";

const SocialMedia = ({ mobile }) => {
  return (
    <div
      className={[
        "flex fixed bottom-0",
        mobile
          ? "flex-row justify-around w-full"
          : "flex-col items-center left-10",
      ].join(" ")}
    >
      <SocialIcon url="https://leetcode.com/ShyamMakwana" Icon="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/28/000000/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-shadow-tal-revivo.png" pdb={20}/>
      <SocialIcon url="https://www.hackerrank.com/Shyam_Makwana" Icon="https://img.icons8.com/external-tal-revivo-color-tal-revivo/28/000000/external-hackerrank-is-a-technology-company-that-focuses-on-competitive-programming-logo-color-tal-revivo.png" pdb={20}/>
      <SocialIcon url="https://github.com/Shyam-Makwana" Icon="https://img.icons8.com/color/32/000000/github--v1.png" pdb={20}/>
      <SocialIcon url="https://www.linkedin.com/in/shyammakwana" Icon="https://img.icons8.com/color/32/000000/linkedin.png" pdb={20}/>
      {mobile && (
        <SocialIcon url="mailto:makwanashyam6@gmail.com" Icon="https://img.icons8.com/color/32/000000/gmail-new.png" pdb={20}/>
      )}
      <SocialIcon url="https://twitter.com/ShyamMakwana_" Icon="https://img.icons8.com/color/32/000000/twitter.png" pdb={20}/>
      <SocialIcon url="https://www.instagram.com/_sshyam_" Icon="https://img.icons8.com/color/32/000000/instagram-new--v1.png" pdb={20}/>
      {!mobile && <BottomLine />}
    </div>
  );
};

export default SocialMedia;
