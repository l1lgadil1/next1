import React from 'react';

import styles from './Menu.module.css';
import format from 'date-fns/format';
import { AppContext } from '../../context/app.context';

import CourseIcon from './icons/hat.svg';
import ServicesIcon from './icons/services.svg';
import BooksIcon from './icons/books.svg';
import ProductsIcon from './icons/courses.svg';
import { firstLevelMenuItem, PageItem } from '../../interfaces/menu.interfase';
import { TopLevelCategory } from '../../interfaces/toppage.interfase';

const firstLevelMenu: firstLevelMenuItem[] = [
  {
    route: 'courses',
    name: 'Курсы',
    icon: <CourseIcon />,
    id: TopLevelCategory.Courses,
  },
  {
    route: 'services',
    name: 'Севисы',
    icon: <ServicesIcon />,
    id: TopLevelCategory.Services,
  },
  {
    route: 'books',
    name: 'Книги',
    icon: <BooksIcon />,
    id: TopLevelCategory.Books,
  },
  {
    route: 'products',
    name: 'Продукты',
    icon: <ProductsIcon />,
    id: TopLevelCategory.Products,
  },
];

const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = React.useContext(AppContext);

  const firstLevel = () => {
    return (
      <>
        {firstLevelMenu.map((menu) => (
          <div className="" key={menu.route}>
            <a href={`/${menu.route}`}>
              <div
                className={`
              ${menu.id == firstCategory && styles.firstLevelActive}
              `}>
                {menu.icon}
                <span>{menu.name}</span>
              </div>
            </a>
            {menu.id == firstCategory && secondLevel(menu)}
          </div>
        ))}
      </>
    );
  };

  const secondLevel = (menuItem: firstLevelMenuItem) => {
    return (
      <div>
        {menu.map((m) => (
          <div className="" key={m._id.secondCategory}>
            <div className={styles.secondLevel}>{m._id.secondCategory}</div>
            <div
              className={`
            ${m.isOpened && styles.secondLevelActive}
            `}>
              {thirdLevel(m.pages, menuItem.route)}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const thirdLevel = (pages: PageItem[], route: string) => {
    return pages.map((p) => (
      <a
        href={`/${route}/${p.alias}`}
        className={`${styles.thirdLevel} ${true && styles.thirdLevelActive}`}>
        {p.category}
      </a>
    ));
  };

  return <div className={styles.menu}>{firstLevel()}</div>;
};

export default Menu;
