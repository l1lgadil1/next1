import { DetailedHTMLProps, HTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export interface inputInterface extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>,HTMLInputElement>{
  error?:FieldError
}