import React, { useContext, useState } from "react";
import { AppContext } from "../../Context/Context";
import "./cart.css";
import {
  SimpleGrid,
  Button,
  Heading,
  Text,
  Box,
  Image,
} from "@chakra-ui/react";
const Cart = () => {
  const value = useContext(AppContext);
  const state = value.state;
  const dispatch = value.dispatch;
  const total = state.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <>
      <Heading textAlign={"center"} mt={"30px"} textColor={"teal.400"}>
        Your Total Price Of 🛒 Cart is Rs :
        <Heading textColor={"black"}>
          {total === 0 ? "YOUR CART IS EMPTY 😟" : `😈 ${total}`}
        </Heading>
      </Heading>
      <SimpleGrid
        columns={[1, 2, 3, 4]}
        spacing="40px"
        className="Cart-Deatils"
      >
        {state.map((items, index) => {
          return (
            <Box key={index} textAlign={"center"} className="cart-items">
              <Image src={items.inImage} width={"60%"}></Image>
              <Text>{items.cardDetails}</Text>
              <Text fontSize={"20px"}>Category :{items.category}</Text>
              <Box>
                <Heading>Price: Rs.{items.quantity * items.price} </Heading>
              </Box>
              <Box
                style={{
                  display: "flex",
                  gap: "10px",
                }}
              >
                <Button
                  onClick={() => dispatch({ type: "INCREASE", payload: items })}
                >
                  +
                </Button>
                <Button
                  onClick={() => dispatch({ type: "DECREASE", payload: items })}
                  disabled={items.quantity * items.price === 0}
                >
                  -
                </Button>
              </Box>
              <Button
                onClick={() => dispatch({ type: "REMOVE", payload: items })}
              >
                Remove
              </Button>
            </Box>
          );
        })}
      </SimpleGrid>
    </>
  );
};

export default Cart;
