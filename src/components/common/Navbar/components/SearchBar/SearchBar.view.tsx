import React, { useRef } from "react";
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
      mt={[4, 4, 0]}
      alignItems={"flex-begin"}
    >
      <VStack width="97%" position="relative" overflow={"visible"}>
        <Input
          _focus={{ bgColor: "white" }}
          variant="filled"
          placeholder="Search for movies"
          onChange={handleSearch}
          borderRadius="0"
          value={searchValue}
        />
      </VStack>

      <IconButton
        width={"3%"}
        right={0}
        icon={<SearchIcon />}
        aria-label={"search button"}
        colorScheme="orange"
        onClick={handleSubmit}
        borderRadius="0"
      />
    </HStack>
  );
}

export default SearchBar;
