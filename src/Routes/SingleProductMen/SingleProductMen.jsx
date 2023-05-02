import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../Home/Footer/Footer";
import "./SingleProductMen.css";
import {
  Image,
  Text,
  Button,
  Box,
  SimpleGrid,
  Heading,
} from "@chakra-ui/react";
import { AppContext } from "../../Context/Context";
const SingleProduct = () => {
  const params = useParams();

  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(false);

  const getdata = async (id) => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://server-2ezz.onrender.com/Male/${id}`
      );
      setData(res.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("error:", error);
    }
  };

  const global = useContext(AppContext);
  const dispatch = global.dispatch;
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

  const handleCart = () => {
    dispatch({ type: "ADD", payload: data });
    alert("Product ADDED TO CART");
  };

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
              onClick={handleCart}
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

export default SingleProduct;
