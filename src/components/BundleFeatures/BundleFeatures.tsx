import { ReactElement } from 'react';
import BundleFeature from '../BundleFeature/BundleFeature';
import styles from './BundleFeatures.module.scss';
import { TFeature } from '../../utils/types';

interface IBundleFeaturesProps {
  features: TFeature[];
}

const BundleFeatures = ({ features }: IBundleFeaturesProps): ReactElement => {
  return (
    <ul className={styles.features}>
      {features.map((feature) => (
        <li key={feature.id}>
          <BundleFeature feature={feature} />
        </li>
      ))}
    </ul>
  );
};

export default BundleFeatures;
