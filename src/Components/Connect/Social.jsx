import { VscGithub, VscTwitter, VscMail } from "react-icons/vsc";
import { SiCodechef, SiHackerrank } from "react-icons/si";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
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
      <SocialIcon url="https://www.codechef.com/users/shyam_1" Icon="https://img.icons8.com/color/32/000000/codechef.png" pdb={20}/>
      <SocialIcon url="https://www.hackerrank.com/Shyam_Makwana" Icon="https://img.icons8.com/windows/32/000000/hackerrank.png" pdb={20}/>
      <SocialIcon url="https://github.com/Shyam-Makwana" Icon="https://img.icons8.com/color/32/000000/github--v1.png" pdb={20}/>
      <SocialIcon url="https://www.linkedin.com/in/shyammakwana" Icon="https://img.icons8.com/color/32/000000/linkedin.png" pdb={20}/>
      {mobile && (
        <SocialIcon url="mailto:makwanashyam6@gmail.com" Icon="https://img.icons8.com/color/32/000000/gmail-new.png" pdb={20}/>
      )}
      <SocialIcon url="https://twitter.com/shyammakwana119" Icon="https://img.icons8.com/color/32/000000/twitter.png" pdb={20}/>
      <SocialIcon url="https://www.instagram.com/_sshyam_" Icon="https://img.icons8.com/color/32/000000/instagram-new--v1.png" pdb={20}/>
      {!mobile && <BottomLine />}
    </div>
  );
};

export default SocialMedia;
