import { pProps } from './P.props';
import styles from './P.module.css';

export const P = ({ size = 'md', children }: pProps): JSX.Element => {
  switch (size) {
    case 'lg':
      return <p className={styles.pLg}>{children}</p>;
    case 'md':
      return <p className={styles.pMd}>{children}</p>;
    case 'sm':
      return <p className={styles.pSm}>{children}</p>;
    default:
      return <></>;
  }
};
