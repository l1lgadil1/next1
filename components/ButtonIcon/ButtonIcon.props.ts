import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

import up from './Up.svg'
import close from './Close.svg'
import menu from './Menu.svg'

export const icons ={
up,close,menu
}

export type IconName = keyof typeof icons;

export interface IButtonIcon extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement>{
  icon:IconName;
  appearance:'primary' | 'white';
}