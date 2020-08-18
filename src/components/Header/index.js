import React from "react";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { useStateValue } from "../../stateProvider";

import "./style.css";

function Header() {
  const [{ user }] = useStateValue();
  return (
    <div className="header">
      <div className="header-left">
        {/* Avatar */}
        <Avatar alt={user?.displayName} src={user?.photoURL} />
        {/* Time icon */}
        <AccessTimeIcon />
      </div>
      <div className="header-search">
        <SearchIcon />
        {/* Search icon */}
        <input placeholder="Search" />
        {/* input */}
      </div>
      <div className="header-right">
        <HelpOutlineIcon />
        {/* Help icon */}
      </div>
    </div>
  );
}

export default Header;
