import React from 'react';

import styles from './Menu.module.css';
import format from 'date-fns/format';
import { AppContext } from '../../context/app.context';
import { motion } from 'framer-motion';

import CourseIcon from './icons/hat.svg';
import ServicesIcon from './icons/services.svg';
import BooksIcon from './icons/books.svg';
import ProductsIcon from './icons/courses.svg';
import { firstLevelMenuItem, PageItem } from '../../interfaces/menu.interfase';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { firstLevelMenu } from '../../helpers/helpers';

const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = React.useContext(AppContext);

  const router = useRouter();

  const variants = {
    visible: {
      marginBottom: 20,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.05,
      },
    },
    hidden: {
      marginBottom: 0,
    },
  };

  const variantsChildren = {
    visible: {
      opacity: 1,
      height: 29,
    },
    hidden: {
      opacity: 0,
      height: 0,
    },
  };

  const firstLevel = () => {
    return (
      <>
        {firstLevelMenu.map((menu) => (
          <div className="" key={menu.route}>
            <Link legacyBehavior href={`/${menu.route}`}>
              <a>
                <div
                  className={`
                ${styles.firstLevel}
              ${menu.id == firstCategory && styles.firstLevelActive}
              `}>
                  {menu.icon}
                  <span>{menu.name}</span>
                </div>
              </a>
            </Link>
            {menu.id == firstCategory && secondLevel(menu)}
          </div>
        ))}
      </>
    );
  };

  const secondLevel = (menuItem: firstLevelMenuItem) => {
    const openSecondLevel = (secondCategory: string) => {
      setMenu &&
        setMenu(
          menu.map((m) => {
            if (m._id.secondCategory == secondCategory) {
              m.isOpened = !m.isOpened;
            }
            return m;
          }),
        );
    };
    return (
      <div className={styles.secondBlock}>
        {menu &&
          menu.map((m) => {
            if (m.pages.map((p) => p.alias).includes(router.asPath.split('/')[2])) {
              m.isOpened = true;
            }
            return (
              <div key={m._id.secondCategory}>
                <div
                  className={styles.secondLevel}
                  onClick={() => openSecondLevel(m._id.secondCategory)}>
                  {m._id.secondCategory}
                </div>
                <motion.div
                  layout
                  initial={'hidden'}
                  animate={m.isOpened ? 'visible' : 'hidden'}
                  variants={variants}
                  className={`
              ${styles.secondLevelBlock}
            `}>
                  {thirdLevel(m.pages, menuItem.route)}
                </motion.div>
              </div>
            );
          })}
      </div>
    );
  };

  const thirdLevel = (pages: PageItem[], route: string) => {
    return pages.map((p) => (
      <motion.div key={p._id} variants={variantsChildren}>
        <Link legacyBehavior href={`/${route}/${p.alias}`}>
          <a
            className={`
        ${styles.thirdLevel}
         ${`/${route}/${p.alias}` == router.asPath && styles.thirdLevelActive}
         `}>
            {p.category}
          </a>
        </Link>
      </motion.div>
    ));
  };

  return <div className={styles.menu}>{firstLevel()}</div>;
};

export default Menu;
