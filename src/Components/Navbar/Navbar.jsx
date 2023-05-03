import React, { useContext, useState } from "react";
import "../Navbar/Navbar.css";

import { FaCartArrowDown, FaHouseUser, FaStore } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaHamburger } from "react-icons/fa";
import { Button, Text } from "@chakra-ui/react";
import { useAuth, logout } from "../../firebase";
import { LoginContext } from "../../Context/LoginContext";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const currentUser = useAuth();
  const [loading, setLoading] = useState(false);
  const { hdllogout } = useContext(LoginContext);
  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
    } catch (error) {
      console.log("error:", error);
    }
    setLoading(false);
    hdllogout();
  }

  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <Link to={"/"}>
            <h2>
              {/* <span>E</span>wc */}
            </h2>
            <Text>Saurabh Ecommerce</Text>
          </Link>
        </div>

        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <Link to="/">Home </Link>
            </li>
            <li>
              <Link to="/men">Men </Link>
            </li>
            <li>
              <Link to="/women">Women </Link>
            </li>
            <li>
              <Link to="/mix">All Products</Link>
            </li>
            <li>
              <div>{currentUser?.email}</div>
            </li>
            <li>
              {currentUser ? (
                <Button
                  disabled={loading || !currentUser}
                  onClick={handleLogout}
                >
                  Log-Out
                </Button>
              ) : (
                currentUser
              )}
            </li>
          </ul>
        </div>

        <div className={"social-media"}>
          <ul className="social-media-desktop">
            <li>
              <Link to={"/users"}>
                <FaHouseUser />
              </Link>
            </li>
            <li>
              <Link to={"/wishlist"}>
                <FaStore />
              </Link>
            </li>
            <li>
              <Link to={"/cart"}>
                <FaCartArrowDown />
              </Link>
            </li>
          </ul>

          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <FaHamburger />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
