import { storyblokEditable } from '@storyblok/react';
import styles from './styles.module.scss';

const Header = ({ blok }: { blok: any }) => {
  return (
    <div className={styles.container} {...storyblokEditable(blok)}>
      Header
      {blok.title}
      <p>More text</p>
    </div>
  );
};

export default Header;
