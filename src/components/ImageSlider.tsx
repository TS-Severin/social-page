interface SliderProps {
  postpicturesCollection: { items: { description: string; url: string }[] };
}

export const ImageSlider: React.FC<SliderProps> = ({
  postpicturesCollection,
}) => {
  console.log(postpicturesCollection);

  return (
    <>
      {postpicturesCollection.items.map((item) => (
        <img key={item.url} src={item.url} alt={item.description} />
      ))}
    </>
  );
};
