import { ReactElement } from 'react';
import styles from './BundleMainImage.module.scss';

interface IBundleMainImageProps {
  imageUrl: string;
}

const BundleMainImage = ({ imageUrl }: IBundleMainImageProps): ReactElement => {
  return (
    <div className={styles.wrapper}>
      <img
        src={imageUrl}
        className={styles.wrapper__image}
        alt='bundle main pic'
      />
    </div>
  );
};

export default BundleMainImage;
