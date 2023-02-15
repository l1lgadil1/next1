import { DetailedHTMLProps, HTMLAttributes } from "react";

export enum SortEnum {
  Rating,Price
}

export interface SortInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement>{
  sort:SortEnum;
  setSort:(sort:SortEnum)=>void;
}