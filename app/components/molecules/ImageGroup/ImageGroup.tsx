import styles from "./ImageGroup.module.css";

import Image from "next/image";

interface ImageGroupProps {
  dataCy: string;
  images: { alt: string; src: string }[];
}

const ImageGroup: React.FC<ImageGroupProps> = ({ images, dataCy }) => {
  return (
    <div data-cy={dataCy} className={styles.container}>
      {images.map(({ src, alt }) => (
        <Image
          className={styles.image}
          data-cy={src}
          src={src}
          alt={alt}
          key={src}
          height={45}
          width={150}
        />
      ))}
    </div>
  );
};

export default ImageGroup;
