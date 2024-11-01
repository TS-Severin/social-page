interface SliderProps {
  postpicturesCollection: { items: string[] };
}

export const ImageSlider: React.FC<SliderProps> = ({
  postpicturesCollection,
}) => {
  return (
    <>
      {postpicturesCollection.items.map((imageUrl) => (
        <img key={imageUrl} src={imageUrl} alt="Post Image" />
      ))}
    </>
  );
};
