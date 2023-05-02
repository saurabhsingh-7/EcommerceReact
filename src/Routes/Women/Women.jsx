import React, { useEffect, useState } from "react";
import axios from "axios";
import { Heading, Image, Box, Button, Text } from "@chakra-ui/react";
import "./Women.css";
import { Link } from "react-router-dom";
const Categories = () => {
  const [data, setData] = useState([]);
  const [page, SetPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const getData = async ({ limit, page }) => {
    try {
      setLoading(true);
      const res = await axios.get(`https://server-2ezz.onrender.com/Female`, {
        params: {
          _limit: limit,
          _page: page,
        },
      });
      setData(res.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("error:", error);
    }
  };

  useEffect(() => {
    getData({ limit: 6, page });
  }, [page]);

  if (loading) {
    return (
      <Image
        src={"https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif"}
        className="loading"
      ></Image>
    );
  }

  return (
    <>
      <Box
        textAlign={"center"}
        style={{
          marginTop: "20px",
        }}
      >
        <Heading size={"3xl"} textColor={"teal"}>
          Women Products
        </Heading>
      </Box>
      <div className={"Card-Details"}>
        {data.map((product) => {
          return (
            <div key={product.price} className="Card-extra_details">
              <img src={product.inImage} alt="" width={"150px"} />
              <Text textAlign={"center"}>{product.cardDetails}</Text>
              <Heading>Price : {product.price}</Heading>
              <Link to={`/women/${product.id}`}>
                <Text fontSize={"15px"} color={"red"}>
                  More Details
                </Text>
              </Link>
            </div>
          );
        })}
      </div>
      <Box textAlign={"center"} className="buttons">
        <Button disabled={page === 1} onClick={() => SetPage(page - 1)}>
          Prev
        </Button>
        <Button>{page}</Button>
        <Button disabled={page === 18} onClick={() => SetPage(page + 1)}>
          Next
        </Button>
      </Box>
    </>
  );
};

export default Categories;
