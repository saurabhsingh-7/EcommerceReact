import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  SimpleGrid,
  Button,
  Image,
  Text,
  Heading,
  Box,
} from "@chakra-ui/react";
import Footer from "../Footer/Footer";
const SingleProductWomen = () => {
  const params = useParams();
  console.log("params:", params);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const getdata = async (id) => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://server-2ezz.onrender.com/Female/${id}`
      );
      setData(res.data);
      console.log(res);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("error:", error);
    }
  };

  useEffect(() => {
    getdata(params.id);
  }, []);

  if (loading) {
    return (
      <Image
        className="loading"
        src={"https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif"}
      ></Image>
    );
  }

  return (
    <>
      <div>
        <SimpleGrid
          columns={[1, 2, 2, 2, 2, 3]}
          spacing="40px"
          className="Single-Product"
        >
          <Image src={data.inImage} width={"60%"}></Image>
          <Box className="Single-Details" alignItems={"center"}>
            <Text textAlign={"center"} fontSize="14px">
              {data.cardDetails}
            </Text>
            <Heading> $ {data.price}</Heading>
            <Text fontSize={"14px"}>Category : {data.category}</Text>
            <Button
              size="md"
              height="40px"
              width="100px"
              border="2px"
              borderColor="teal.500"
            >
              Add To Cart
            </Button>
          </Box>
        </SimpleGrid>
      </div>
      <Footer />
    </>
  );
};

export default SingleProductWomen;
