import React, { useEffect, useState } from "react";
import { Image } from "@chakra-ui/react";
import "../Carosel/Carosel.css";
import { Heading, Box } from "@chakra-ui/react";
const Carosel = () => {
  const [count, SetCount] = useState(0);

  const Images = [
    "https://d32baadbbpueqt.cloudfront.net/Homepage/259790f5-3c09-43f3-8dde-49c3de49f0c4.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/32e53a7b-879e-4c34-a5bc-b95c85ee4a9e.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/87591a7c-d8f8-499c-9562-c89000ef7e4a.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/91374506-cc05-46f3-aff6-86a00e501c38.gif",
  ];

  useEffect(() => {
    let i = (count + 1) % Images.length;
    setTimeout(() => {
      SetCount(i);
    }, 3000);
  }, [count]);
  return (
    <div className="Carosel">
      <Box textAlign={"center"}>
        <Heading as="h1" size="4xl" textColor={"teal"}>
          Offer's Going On
        </Heading>
      </Box>
      <div className="Image-Slider">
        <Image src={Images[count]}></Image>
      </div>
    </div>
  );
};

export default Carosel;
