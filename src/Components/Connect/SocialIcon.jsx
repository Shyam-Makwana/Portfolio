const SocialIcon = ({ url, Icon, pdb, pdr }) => {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <img src={Icon} style={{ paddingBottom: pdb, paddingRight: pdr }} alt="" />
    </a>
  );
};

export default SocialIcon;
