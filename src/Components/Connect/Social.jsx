import BottomLine from "./BottomLine";
import IconGitHub from "../Icons/github";
import IconLinkedin from "../Icons/linkedin";
import IconTwitter from "../Icons/twitter";
import IconInstagram from "../Icons/instagram";
import IconLeetcode from "../Icons/leetcode";
import IconGmail from "../Icons/gmail";

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
      <IconGitHub url="https://github.com/Shyam-Makwana" pdb = {20}/>
      <IconLinkedin url="https://www.linkedin.com/in/shyammakwana" pdb = {20}/>
      {mobile && (
        <IconGmail url="mailto:makwanashyam6@gmail.com" pdb = {20}/>
      )}
      <IconTwitter url="https://twitter.com/ShyamMakwana_" pdb = {18}/>
      <IconInstagram url="https://www.instagram.com/_sshyam_" pdb = {18}/>
      <IconLeetcode url="https://leetcode.com/ShyamMakwana" pdb = {20}/>
      {!mobile && <BottomLine />}
    </div>
  );
};

export default SocialMedia;
