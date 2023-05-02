import { Heading, Box, SimpleGrid, Image } from "@chakra-ui/react";
import React from "react";
import "./Tranding.css";
const Tranding = () => {
  return (
    <div className="Tranding">
      <Box textAlign={"center"}>
        <Heading size={"3xl"} textColor={"teal"}>
          TRENDING BRANDS
        </Heading>
        <SimpleGrid columns={[1, 2, 3, 3, 6]} spacing="10px" className="brands">
          <Box>
            <Image src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/monkl-hp-logos-256x256.jpg"></Image>
          </Box>
          <Box>
            <Image src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/never-fully-dressed-hp-logos-256x256.png"></Image>
          </Box>
          <Box>
            <Image src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/1x12x---test.png"></Image>
          </Box>
          <Box>
            <Image src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/weekday-hp-logos-256x256.jpg"></Image>
          </Box>
          <Box>
            <Image src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/reclaimed-vintage-hp-logos-256x256.jpg"></Image>
          </Box>
          <Box>
            <Image src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/collusion-hp-logos-256x256.jpg"></Image>
          </Box>
        </SimpleGrid>
      </Box>
    </div>
  );
};

export default Tranding;
