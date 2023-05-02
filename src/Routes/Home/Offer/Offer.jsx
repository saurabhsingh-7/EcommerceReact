import React from "react";
import { Heading, Box, Text } from "@chakra-ui/react";
import "./Offer.css";
const Offer = () => {
  return (
    <div className="Offer">
      <Box
        bg="pink.400"
        w="100%"
        p={4}
        color="pink.400"
        textAlign={"center"}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "150px",
        }}
      >
        <Box>
          <Heading textColor={"black"}>
            Upto 50% off cosy gear! give winter the cold shoulder
          </Heading>
          <br />
          <Text textColor={"black"}>
            Limited time deals! Selected styles marked as shown
          </Text>
        </Box>
      </Box>
    </div>
  );
};

export default Offer;
