import { ChangeEvent, useState } from "react";

function useController() {
  const [searchValue, setSearchValue] = useState("");

  const recommendation = {
    data: [
      {
        Title: "todo1",
        imdbID: "todo1",
      },
      {
        Title: "todo2",
        imdbID: "todo2",
      },
      ,
      {
        Title: "todo3",
        imdbID: "todo3",
      },
    ],
    loading: false,
    error: false,
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = () => {
    console.log("SUBMIT", searchValue);
  };

  const handleClickRecommendation = (imdbID: string) => {
    console.log("CLICK RECOMMENDATION", imdbID);
  };

  return {
    searchValue,
    recommendation,
    handleClickRecommendation,
    handleSearch,
    handleSubmit,
  };
}

export default useController;
