import { ReactElement } from 'react';
import styles from './BundleFeature.module.scss';
import { TFeature } from '../../utils/types';

interface IBundleFeatureProps {
  feature: TFeature;
}

const BundleFeature = ({ feature }: IBundleFeatureProps): ReactElement => {
  const { name, free, paid, img } = feature;

  return (
    <div className={styles.feature}>
      <div className={styles.feature__title}>
        <img className={styles.feature__img} src={img} alt='feature pic' />
        <p className={styles.feature__name}>{name}</p>
      </div>
      <div className={styles.feature__columns}>
        <p className={styles.feature__column}>{free}</p>
        <p className={styles.feature__column}>{paid}</p>
      </div>
    </div>
  );
};

export default BundleFeature;
