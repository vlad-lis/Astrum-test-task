import { ReactElement } from 'react';
import styles from './BundleBuyBox.module.scss';
import box from '../../assets/images/bundle-box.png';

interface IBundleBuyBoxProps {
  price: number;
}

const BundleBuyBox = ({ price }: IBundleBuyBoxProps): ReactElement => {
  return (
    <div className={styles.buybox}>
      <img className={styles.buybox_image} src={box} alt='bundle box' />
      <div className={styles.buybox__btnWrapper}>
        <p className={styles.buybox__price}>{price} ₽</p>
        <button className={styles.buybox__btn} type='button'>
          ПРИОБРЕСТИ
        </button>
      </div>
    </div>
  );
};

export default BundleBuyBox;
