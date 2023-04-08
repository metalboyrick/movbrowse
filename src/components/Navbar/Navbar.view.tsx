import { Center, Flex } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";

import SearchBar from "./components/SearchBar";

function Navbar() {
  return (
    <Center width="100%" bgColor={"teal"} paddingX={6} paddingY={4}>
      <Flex
        as="nav"
        width="80%"
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Link
          href="/"
          color="white"
          fontWeight={"bold"}
          cursor="pointer"
          _hover={{ textDecoration: "none" }}
        >
          MovBrowse
        </Link>

        <SearchBar />
      </Flex>
    </Center>
  );
}

export default Navbar;
