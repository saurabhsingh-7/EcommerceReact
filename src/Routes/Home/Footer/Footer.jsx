import React from "react";
import { SimpleGrid, Box, Heading, Text } from "@chakra-ui/react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="Footer">
      <SimpleGrid
        columns={[1, 2, 2, 4]}
        spacing="40px"
        className="Footer-Items"
      >
        <Box className="Footer-Container">
          <Heading>HELP & INFORMATION</Heading>
          <Text>Help</Text>
          <Text>Track order</Text>
          <Text>Delivery & returns</Text>
          <Text>Sitemap</Text>
        </Box>
        <Box className="Footer-Container">
          <Heading>ABOUT ASOS</Heading>
          <Text>About us</Text>
          <Text>Careers at ASOS</Text>
          <Text>Corporate responsibility</Text>
          <Text>Investors' site</Text>
        </Box>
        <Box className="Footer-Container">
          <Heading>MORE FROM ASOS</Heading>
          <Text>Mobile and ASOS Apps</Text>
          <Text>Gift Vouchers</Text>
          <Text>Black Friday</Text>
          <Text>ASOS Y Thrift</Text>
        </Box>
        <Box className="Footer-Container">
          <Heading>SHOPPING FROM : </Heading>
          <Text>You are in : India</Text>
          <Text>Copyright © 2022 Saurabh Ecommerce</Text>
          <Text>Email : saurabhsinghup123@gmail.com</Text>
          
        </Box>
      </SimpleGrid>
    </div>
  );
};

export default Footer;
