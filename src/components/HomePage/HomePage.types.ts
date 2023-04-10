import { StaticImageData } from "next/image";
import { RefObject } from "react";

export interface HomePageProps {
  search?: string;
}

export interface UseControllerReturnValue {
  data: {
    imdbID: string;
    Title: string;
    Poster?: string | StaticImageData;
    Year: string;
  }[];
  loading: boolean;
  error: any;
}
