import React from "react";
import "./Header.css";
import logo from "./logo.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        <img className="header_logo" src={logo} />
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <div className="header_option">
          <span className="header_lineone">Hello</span>
          <span className="header_linetwo">Sign in</span>
        </div>

        <div className="header_option">
          <span className="header_lineone">Returns</span>
          <span className="header_linetwo">& Orders</span>
        </div>

        <div className="header_option">
          <span className="header_lineone">Your</span>
          <span className="header_linetwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_basketCount header_lineone">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
