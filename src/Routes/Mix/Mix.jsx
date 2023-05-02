import React, { useEffect, useState } from "react";
import axios from "axios";
import { Text, Heading, Image, Box, Button } from "@chakra-ui/react";
import "./Mix.css";
const Mix = () => {
  const [data, setData] = useState([]);
  const [page, SetPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const getdata = async ({ page, limit }) => {
    try {
      setLoading(true);
      const res = await axios.get(`https://server-2ezz.onrender.com/Mix`, {
        params: {
          _page: page,
          _limit: limit,
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
    getdata({ page, limit: 6 });
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
          All Products
        </Heading>
      </Box>
      <div className={"Card-Details"}>
        {data.map((el) => {
          return (
            <div key={el.price} className="Card-extra_details">
              <img src={el.inImage} alt="" width={"150px"} />
              <Text textAlign={"center"}>{el.cardDetails}</Text>
              <Heading>Price : {el.price}</Heading>
            </div>
          );
        })}
      </div>
      <Box textAlign={"center"} className="buttons">
        <Button disabled={page === 1} onClick={() => SetPage(page - 1)}>
          Prev
        </Button>
        <Button>{page}</Button>
        <Button disabled={page === 34} onClick={() => SetPage(page + 1)}>
          Next
        </Button>
      </Box>
    </>
  );
};

export default Mix;
