import { ReactElement } from 'react';
import BundleFeature from '../BundleFeature/BundleFeature';
import styles from './BundleFeatures.module.scss';
import { TFeature } from '../../utils/types';

interface IBundleFeaturesProps {
  features: TFeature[];
}

const BundleFeatures = ({ features }: IBundleFeaturesProps): ReactElement => {
  return (
    <div className={styles.featuresTable}>
      <div className={styles.featuresTable__columns}>
        <p className={styles.featuresTable__column}>Бесплатные сервера</p>
        <p className={styles.featuresTable__column}>Подписочный сервер</p>
      </div>
      <ul className={styles.features}>
        {features.map((feature) => (
          <li key={feature.id}>
            <BundleFeature feature={feature} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BundleFeatures;
