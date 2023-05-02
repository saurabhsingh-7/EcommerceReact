import React from "react";
import {
  SimpleGrid,
  Button,
  Heading,
  Text,
  Box,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./Shopping-Brands.css";
const ShoopingBrands = () => {
  return (
    <div className="Shopping-Brands">
      <SimpleGrid columns={[1, 2, 2, 2, 2]} spacing={"70px"}>
        <Box>
          <Image
            src="https://images.asos-media.com/products/the-north-face-sheru-jacket-in-beige/201894399-1-beige?$n_640w$&wid=634&fit=constrain"
            width={"70%"}
          />

          <Box className="About-Shopping">
            <Heading fontSize={"25px"}>TREAT YO'SELF</Heading>
            <Text fontSize={"22px"}>Coz You Deserve The Best</Text>
            <Link to={"/men"}>
              <Button variant="outline" fontSize={"20px"} size="lg">
                Shop the brand
              </Button>
            </Link>
          </Box>
        </Box>
        <Box>
          <Image
            src="https://images.asos-media.com/products/collusion-unisex-joggers-in-stone/202525395-1-stone?$n_640w$&wid=634&fit=constrain"
            width={"70%"}
          ></Image>
          <Box className="About-Shopping">
            <Heading fontSize={"25px"}>Collusion</Heading>
            <Text fontSize={"22px"}>Shop : The Club In 1062</Text>
            <Link to={"/women"}>
              <Button variant="outline" fontSize={"20px"} size="lg">
                Shop The Brand
              </Button>
            </Link>
          </Box>
        </Box>
      </SimpleGrid>
    </div>
  );
};

export default ShoopingBrands;
