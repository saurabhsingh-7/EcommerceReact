import React, { useContext } from "react";
import { useRef, useState } from "react";
import { useAuth, login } from "../firebase";
import signup from "../firebase";
import { Button, Input } from "@chakra-ui/react";
import { LoginContext } from "../Context/LoginContext";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Checkbox,
  Stack,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Users() {
  const { login } = useContext(LoginContext);
  const exmailRef = useRef();
  const passwordRef = useRef();
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();

  async function handleSignup() {
    setLoading(true);
    try {
      await signup(exmailRef.current.value, passwordRef.current.value);
    } catch (error) {
      alert("error:", error);
    }
    setLoading(false);
    login();
  }

  async function handleLogin() {
    setLoading(true);
    try {
      await login(exmailRef.current.value, passwordRef.current.value);
    } catch (error) {
      alert("error:", error);
    }
    setLoading(false);
    login();
  }

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"5xl"}>Sign in Or Log In to your account</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel fontSize={"30px"}>Email address</FormLabel>
              <Input
                size={"lg"}
                ref={exmailRef}
                htmlSize={4}
                placeholder="Email"
                type={"email"}
              ></Input>
            </FormControl>
            <FormControl id="password">
              <FormLabel fontSize={"30px"}>Password</FormLabel>
              <Input
                size={"lg"}
                ref={passwordRef}
                placeholder="Password must be 6 characters"
                type={"password"}
              ></Input>
            </FormControl>
            <Stack spacing={10}>
              <Link to={"/men"}>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  disabled={loading || currentUser}
                  onClick={handleSignup}
                >
                  Login
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
