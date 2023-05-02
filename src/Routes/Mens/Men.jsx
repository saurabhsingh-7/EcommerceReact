import React, { useEffect, useState } from "react";
import axios from "axios";
import { Heading, Box, Image, Button, Text } from "@chakra-ui/react";
import "./Men.css";
import { Link } from "react-router-dom";

const Categories = () => {
  const [data, setData] = useState([]);
  const [page, SetPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const getData = async ({ limit, page }) => {
    try {
      setLoading(true);
      const res = await axios.get(`https://server-2ezz.onrender.com/Male`, {
        params: {
          _limit: limit,
          _page: page,
        },
      });
      setData(res.data);
      console.log(res.data);
      setLoading(false);
    } catch (error) {
      console.log("error:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData({ limit: 6, page });
  }, [page]);

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
      <Box
        textAlign={"center"}
        style={{
          marginTop: "20px",
        }}
      >
        <Heading size={"3xl"} textColor={"teal"}>
          Mens Products
        </Heading>
      </Box>
      <div className={"Card-Details"}>
        {data.map((product) => {
          return (
            <div key={product.price} className="Card-extra_details">
              <img src={product.inImage} alt="" width={"150px"} />
              <Text textAlign={"center"}>{product.cardDetails}</Text>
              <Heading>Price : {product.price}</Heading>
              <Link
                to={`/men/${product.id}`}
                style={{ fontSize: "15px", color: "red" }}
              >
                More Details
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
