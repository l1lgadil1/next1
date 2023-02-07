import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface tagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement>{
  size?:'md' | 'sm';
  children:ReactNode;
  color?:'ghost' | 'red' | 'gray' | 'green' | 'primary';
  href?:string;
}