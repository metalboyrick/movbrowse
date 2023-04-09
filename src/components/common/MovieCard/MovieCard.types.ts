import type { StaticImageData } from "next/image";

export interface MovieCardProps {
  title: string;
  year: string;
  rating: number;
  starring: string;
  img?: StaticImageData | string;
  imdbID: string;
}
