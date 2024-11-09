export const SocialMedia: React.FC<SocialMediaProps> = ({
  socialmediaprops,
}) => {
  console.log(socialmediaprops);

  return (
    <>
      {socialmediaprops.items.map((item) => (
        <img key={item.url} src={item.url} alt="Post Image" />
      ))}
    </>
  );
};
