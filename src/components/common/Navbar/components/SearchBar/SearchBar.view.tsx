import React from "react";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  HStack,
  IconButton,
  Input,
  VStack,
} from "@chakra-ui/react";

import useController from "./SearchBar.controller";

function SearchBar() {
  const { searchValue, handleSearch, handleSubmit } = useController();

  return (
    <HStack
      width={["100%", "100%", "50%"]}
      marginTop={[4, 4, 0]}
      align={"start"}
    >
      <VStack width="97%" position="relative" overflow={"visible"}>
        <Input
          focusStyle={{ backgroundColor: "white" }}
          design="solid"
          placeholder="Search for movies"
          onChange={handleSearch}
          shape="straight"
          value={searchValue}
        />
      </VStack>

      <IconButton
        width={"3%"}
        rightAlign={0}
        icon={<SearchIcon />}
        label={"search button"}
        colorScheme="orange"
        clickAction={handleSubmit}
        shape="straight"
      />
    </HStack>
  );
}

export default SearchBar;