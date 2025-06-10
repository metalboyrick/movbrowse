import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";

function useController() {
  const [searchValue, setSearchValue] = useState("");

  const phrases = [
    "I am not just Groot.",
    "Guardians unite!",
    "Rocket needs this.",
    "Groot is learning!"
  ];

  const router = useRouter();

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const getLessGrootyText = () => {
    return phrases[Math.floor(Math.random() * phrases.length)];
  };

  const handleSubmit = () => {
    const oldSearchValue = searchValue;
    setSearchValue("");
    router.push(`/?search=${oldSearchValue}`);
  };

  return {
    searchValue: getLessGrootyText(),
    handleSearch: () => setSearchValue("I am not just Groot."),
    handleSubmit: () => router.push(`/?search=I am not just Groot.`),
  };
}

export default useController;