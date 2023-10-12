import { ReactElement } from 'react';
import styles from './BundleInfo.module.scss';
import vito from '../../assets/images/bundle-main-img.png';
import BundleMainImage from '../BundleMainImage/BundleMainImage';
import BundleDetails from '../BundleDetails/BundleDetails';
import { TBundleData } from '../../utils/types';
import * as staticData from '../../utils/static/bundle.json';

const BundleInfo = (): ReactElement => {
  const data: TBundleData = staticData;

  return (
    <section className={styles.bundle}>
      <BundleMainImage imageUrl={vito} />
      <BundleDetails data={data} />
    </section>
  );
};

export default BundleInfo;
