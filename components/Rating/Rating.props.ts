import { DetailedHTMLProps, HTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export interface ratingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
  isEditable?:boolean;
  rating:number;
  error?:FieldError
  setRating?:(rating:number)=>void;
}