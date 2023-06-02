import Image from "next/image";

interface ImageGroupProps {
  dataCy: string;
  images: { alt: string; src: string }[];
}

const ImageGroup: React.FC<ImageGroupProps> = ({ images, dataCy }) => {
  return (
    <div data-cy={dataCy}>
      {images.map(({ src, alt }) => (
        <Image
          data-cy={src}
          src={src}
          alt={alt}
          key={src}
          height={50}
          width={150}
        />
      ))}
    </div>
  );
};

export default ImageGroup;
