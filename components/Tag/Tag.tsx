import { tagProps } from './Tag.props';
import styles from './Tag.module.css';

export const Tag = ({
  children,
  color = 'ghost',
  size = 'md',
  href,
  className,
  ...props
}: tagProps): JSX.Element => {
  return (
    <div
      className={`
      ${styles.tag}
      ${size == 'md' ? styles.md : styles.sm}  ${color == 'ghost' && styles.ghost}  
      ${color == 'red' && styles.red}
      ${color == 'gray' && styles.gray}
      ${color == 'green' && styles.green}
      ${color == 'primary' && styles.primary}
      `}
      {...props}>
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};
