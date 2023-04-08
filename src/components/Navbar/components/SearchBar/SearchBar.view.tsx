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
  const {
    searchValue,
    recommendation,
    handleSearch,
    handleSubmit,
    handleClickRecommendation,
  } = useController();

  const inputBoxRef = useRef<HTMLInputElement>(null);

  // use a "portal" method to produce the dropdown due to time constraint
  const getDropdownOffset = () => {
    if (inputBoxRef.current) {
      const { width, height, bottom, left } =
        inputBoxRef.current.getBoundingClientRect();
      return {
        top: bottom,
        left,
        width,
      };
    }

    return {
      top: 0,
      left: 0,
      width: 0,
    };
  };

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
          ref={inputBoxRef}
          value={searchValue}
        />
        {searchValue.length > 0 && (
          <Box
            width={`${getDropdownOffset().width}px`}
            zIndex={10}
            position="fixed"
            top={`${getDropdownOffset().top}px`}
            left={`${getDropdownOffset().left}px`}
            boxShadow={"9px 8px 38px -17px rgba(0,0,0,0.35)"}
          >
            {recommendation.data.map((item) => (
              <Box
                bgColor="white"
                _hover={{
                  bgColor: "gray.50",
                }}
                width="100%"
                borderRadius="0"
                py={2}
                px={3}
                my={0}
                key={item?.imdbID}
                cursor={"pointer"}
              >
                {item?.Title}
              </Box>
            ))}
          </Box>
        )}
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
