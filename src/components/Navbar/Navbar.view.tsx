import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Flex,
  HStack,
  IconButton,
  Input,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";

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
        <Link href="/" color="white" as="b">
          MovBrowse
        </Link>

        <SearchBar />
      </Flex>
    </Center>
  );
}

export default Navbar;
