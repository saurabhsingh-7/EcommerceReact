import React from "react";
import { Box, SimpleGrid, Text, Heading, Image } from "@chakra-ui/react";
import "./Shoping.css";
import { Link } from "react-router-dom";
const Shopping = () => (
  <div className="Shoping">
    <Box textAlign={"center"}>
      <Heading as="h1" size="4xl" textColor={"teal"}>
        Shopping Materials
      </Heading>
    </Box>
    <div className="Shopping-lists">
      <SimpleGrid columns={[1, 1, 2, 4]} spacing="40px">
        <Link to={"/men"}>
          <Box>
            <Image src="https://content.asos-media.com/-/media/homepages/unisex/homepages/2022/11-nov/singles-day---click-frenzy/prime/moments-features-with-borders/ww/ww---self-care.jpg"></Image>
            <Box textAlign={"center"}>
              <Heading>SELF-CARE MOMENTS</Heading>
              <Text fontSize={"20px"}>It's Treat-Yourself Time</Text>
            </Box>
          </Box>
        </Link>
        {/* ------------------------------------ */}
        <Link to={"/women"}>
          <Box>
            <Image src="https://content.asos-media.com/-/media/homepages/unisex/homepages/2022/11-nov/singles-day---click-frenzy/prime/moments-features-with-borders/ww/ww---label-love.jpg"></Image>
            <Box textAlign={"center"}>
              <Heading>LABEL LOVE</Heading>
              <Text fontSize={"20px"}>Nike, Addidas And More!</Text>
            </Box>
          </Box>
        </Link>
        {/* ---------------------------------- */}
        <Link to={"/mix"}>
          <Box>
            <Image src="https://content.asos-media.com/-/media/homepages/unisex/homepages/2022/11-nov/singles-day---click-frenzy/prime/moments-features-with-borders/ww/ww---in-house-brands.jpg"></Image>
            <Box textAlign={"center"}>
              <Heading>IN-HOUSE BRANDS </Heading>
              <Text fontSize={"20px"}>Relationship Status: Exclusive</Text>
            </Box>
          </Box>
        </Link>
        {/* ............................................. */}
        <Box>
          <Image src="https://content.asos-media.com/-/media/homepages/unisex/homepages/2022/11-nov/singles-day---click-frenzy/prime/moments-features-with-borders/ww/ww---go-for-glam.jpg"></Image>
          <Box textAlign={"center"}>
            <Heading>GO FOR GLAM</Heading>
            <Text fontSize={"20px"}>Swipe Right On These</Text>
          </Box>
        </Box>
      </SimpleGrid>
    </div>
  </div>
);

export default Shopping;
