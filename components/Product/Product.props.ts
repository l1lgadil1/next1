import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ProductModel } from "../../interfaces/product.inreface";

export interface productProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement>{
  product:ProductModel[]
}