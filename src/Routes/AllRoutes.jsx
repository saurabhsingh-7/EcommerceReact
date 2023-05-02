import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Men from "./Mens/Men";
import Users from "./Users";
import Cart from "./cart/Cart";
import Wishlist from "./Wishlist";
import Women from "./Women/Women";
import Mix from "./Mix/Mix";
import SingleProduct from "./SingleProductMen/SingleProductMen";
import SingleProductWomen from "./Home/SingleProductWomen/SingleProductWomen";
import PrivateRoute from "./PrivateRoute";
import Login from "./Login";
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/women" element={<Women />}></Route>
        <Route path="/men" element={<Men />}></Route>
        <Route path="/mix" element={<Mix />}></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/wishlist"
          element={
            <PrivateRoute>
              <Wishlist />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/men/:id" element={<SingleProduct />}></Route>
        <Route
          path="/women/:id"
          element={
            <PrivateRoute>
              <SingleProductWomen />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
