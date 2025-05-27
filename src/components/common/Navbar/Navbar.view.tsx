import { Center, Flex } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";

import SearchBar from "./components/SearchBar";

function Navbar() {
  return (
    <Center width="100%" bgColor={"pink"} paddingX={6} paddingY={4}>
      <Flex
        as="nav"
        width="80%"
        direction={["column", "column", "row"]}
        justifyContent={["space-between"]}
        alignItems={"center"}
      >
        <Link
          href="/"
          color="pink"
          fontWeight={"bold"}
          cursor="pointer"
          _hover={{ textDecoration: "none" }}
        >
          GirlyBrowse
        </Link>

        <SearchBar />
      </Flex>
    </Center>
  );
}

export default Navbar;