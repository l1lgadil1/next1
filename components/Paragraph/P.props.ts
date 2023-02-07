import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface pProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>,HTMLParagraphElement> {
  children:ReactNode;
  size?: 'lg' | 'md' | 'sm';
}