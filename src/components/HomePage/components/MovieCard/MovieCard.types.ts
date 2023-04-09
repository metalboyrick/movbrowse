import type { StaticImageData } from "next/image";

export interface MovieCardProps {
  title: string;
  year: string;
  img?: StaticImageData | string;
  imdbID: string;
}
