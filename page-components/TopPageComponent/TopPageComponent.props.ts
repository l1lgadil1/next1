import { ProductModel } from "../../interfaces/product.inreface";
import { TopLevelCategory, TopPageModel } from "../../interfaces/toppage.interfase";

export interface TopPageProps extends Record<string, unknown> {
  firstCategory: TopLevelCategory;
  page: TopPageModel;
  products: ProductModel[];
}
