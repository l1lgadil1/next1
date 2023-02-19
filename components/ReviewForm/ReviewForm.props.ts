import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IReviewForm extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement>{
  productId:string;
}
export interface IReviewSentResponse {
  message:string;
}