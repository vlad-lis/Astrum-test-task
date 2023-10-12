import { ReactElement } from 'react';
import { TBundleData } from '../../utils/types';
import styles from './BundleDetails.module.scss';
import BundleBuyBox from '../BundleBuyBox/BundleBuyBox';
import BundleFeatures from '../BundleFeatures/BundleFeatures';

interface IBundleDetailsProps {
  data: TBundleData;
}

const BundleDetails = ({ data }: IBundleDetailsProps): ReactElement => {
  const { name, price, features } = data;

  return (
    <div className={styles.details}>
      <h2 className={styles.details__title}>{name}</h2>
      <BundleFeatures features={features} />
      <BundleBuyBox price={price} />
    </div>
  );
};

export default BundleDetails;
