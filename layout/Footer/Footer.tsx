import React from 'react';
import styles from './Footer.module.css';
import { FooterProps } from './Footer.props';
import { format } from 'date-fns';

const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={`${className} ${styles.footer} `} {...props}>
      <div className="">OwlTop © {format(new Date(), 'yyyy')} Все права защищены</div>
      <a href="#" target="_blank">
        Пользовательское соглашение
      </a>
      <a href="#" target="_blank">
        Политики конфиденциальности
      </a>
    </footer>
  );
};

export default Footer;
