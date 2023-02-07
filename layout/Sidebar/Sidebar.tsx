import React from 'react';

import { SidebarProps } from './Sibebar.props';
import Menu from '../Menu/Menu';

const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
  return (
    <div {...props}>
      <Menu />
    </div>
  );
};

export default Sidebar;
