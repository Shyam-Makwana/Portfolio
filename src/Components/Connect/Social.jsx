import { VscGithub, VscTwitter, VscMail } from "react-icons/vsc";
import { SiCodechef, SiHackerrank } from "react-icons/si";
import { FaInstagram, FaMedium, FaLinkedin } from "react-icons/fa";
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
      <SocialIcon url="https://www.codechef.com/users/shyam_1" Icon={SiCodechef} />
      <SocialIcon url="https://www.hackerrank.com/Shyam_Makwana" Icon={SiHackerrank} />
      <SocialIcon url="https://github.com/Shyam-Makwana" Icon={VscGithub} />
      <SocialIcon url="https://www.linkedin.com/in/shyammakwana" Icon={FaLinkedin} />
      {mobile && (
        <SocialIcon url="mailto:makwanashyam6@gmail.com" Icon={VscMail} />
      )}
      <SocialIcon url="https://twitter.com/shyammakwana119" Icon={VscTwitter} />
      <SocialIcon url="https://www.instagram.com/_sshyam_" Icon={FaInstagram} />
      {!mobile && <BottomLine />}
    </div>
  );
};

export default SocialMedia;
