import { ReactElement } from 'react';
import styles from './Banner.module.scss';
import femaleCostume from '../../../public/images/mafia-costume-female.png';
import maleCostume from '../../../public/images/mafia-costume-male.png';
import logo from '../../../public/images/logo.png';
import boxes from '../../../public/images/boxes.png';
import * as staticData from '../../utils/static/banner.json';

const Banner = (): ReactElement => {
  const { banner } = staticData;

  return (
    <div className={styles.banner}>
      <img
        className={styles.banner__costume}
        src={femaleCostume}
        alt='mafia-costume'
      />
      <div className={styles.banner__infobox}>
        <img className={styles.banner__logo} src={logo} alt='allods-logo' />
        <img className={styles.banner__boxes} src={boxes} alt='allods-boxes' />
        <div className={styles.banner__description}>
          <h1 className={styles.banner__heading}>{banner.title}</h1>
          <p className={styles.banner__motto}>{banner.motto}</p>
        </div>
      </div>
      <img
        className={styles.banner__costume}
        src={maleCostume}
        alt='mafia-costume'
      />
    </div>
  );
};

export default Banner;
