import React from 'react';
import { IButtonIcon, icons } from './ButtonIcon.props';
import styles from './ButtonIcon.module.css';

const ButtonIcon: React.FC<IButtonIcon> = ({ appearance, icon, className, ...props }) => {
  const iconComponent = icons[icon];
  return (
    <div
      className={` ${styles.button} ${className} ${appearance == 'primary' && styles.primary} ${
        appearance == 'white' && styles.white
      }`}
      {...props}>
      <img src={iconComponent} alt="" />
    </div>
  );
};

export default ButtonIcon;
