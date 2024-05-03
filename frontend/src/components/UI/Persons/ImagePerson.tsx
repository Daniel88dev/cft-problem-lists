type ImagePersonType = {
  imageSrc: string;
  imageName: string;
};

const ImagePerson = ({ imageSrc, imageName }: ImagePersonType) => {
  return (
    <img
      height={100}
      width={100}
      src={imageSrc}
      alt={imageName}
      className={
        "object-cover ml-4 object-top rounded-full h-14 w-14 border-2 border-white relative"
      }
    />
  );
};

export default ImagePerson;
