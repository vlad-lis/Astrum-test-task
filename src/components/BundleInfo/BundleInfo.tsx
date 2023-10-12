import { ReactElement } from 'react';
import styles from './BundleInfo.module.scss';
import vito from '../../../public/images/bundle-main-img.png';
import BundleMainImage from '../BundleMainImage/BundleMainImage';
import BundleDetails from '../BundleDetails/BundleDetails';
import { TBundleData } from '../../utils/types';
import * as staticData from '../../utils/static/bundle.json';

const BundleInfo = (): ReactElement => {
  const data: TBundleData = staticData;

  return (
    <section className={styles.bundleWrapper}>
      <div className={styles.bundle}>
        <BundleMainImage imageUrl={vito} />
        <BundleDetails data={data} />
      </div>
    </section>
  );
};

export default BundleInfo;
