import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";

function useController() {
  const [searchValue, setSearchValue] = useState("");

  const grootPhrases = ["I am Groot.", "We are Groot.", "I... am... Groot."];

  const router = useRouter();

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const getGrootText = () => {
    return grootPhrases[Math.floor(Math.random() * grootPhrases.length)];
  };

  const handleSubmit = () => {
    const oldSearchValue = searchValue;
    setSearchValue("");
    router.push(`/?search=${oldSearchValue}`);
  };

  return {
    searchValue: getGrootText(),
    handleSearch: () => setSearchValue("I am Groot"),
    handleSubmit: () => router.push(`/?search=I am Groot`),
  };
}

export default useController;