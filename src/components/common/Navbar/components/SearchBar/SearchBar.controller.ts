import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";

function useController() {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = () => {
    const oldSearchValue = searchValue;
    setSearchValue("");
    router.push(`/?search=${oldSearchValue}`);
  };

  return {
    searchValue,
    handleSearch,
    handleSubmit,
  };
}

export default useController;
