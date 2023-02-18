import { DetailedHTMLProps, HTMLAttributes } from "react";
import {  ReviewModel } from "../../interfaces/product.inreface";

export interface IReview extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement>{
  review:ReviewModel;
}