import React from "react";
import { AppBar, Toolbar, styled, Box, InputBase } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { gmailLogo } from "./constant/Constant";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const StyledAppBar = styled(AppBar)({
  background: "#f5f5f5",
  boxShadow: "none",
});

const Header = ({ setOpenDrawer }) => {
  const toggleDrawer = () => {
    setOpenDrawer((prev) => !prev);
    console.log("openDrawer");
  };
  return (
    <div>
      <StyledAppBar sx={{ position: "relative" }}>
        <Toolbar>
          <MenuIcon color="action" onClick={toggleDrawer} />
          <img
            src={gmailLogo}
            alt="logo"
            style={{ marginLeft: 15, width: 110 }}
          />
          <Box
            style={{
              background: "#EAF1FB",
              marginLeft: 80,
              borderRadius: 8,
              minWidth: 690,
              maxWidth: 720,
              height: 48,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 20px",
            }}
          >
            <SearchIcon color="action" />
            <InputBase
              style={{ width: "100%", padding: "0 10px" }}
              placeholder="Search mail"
            />
            <TuneIcon color="action" />
          </Box>
          <Box
            style={{ display: "flex", width: "100%", justifyContent: "end" }}
          >
            <HelpOutlineOutlinedIcon
              color="action"
              style={{ marginLeft: 20 }}
            />
            <SettingsOutlinedIcon color="action" style={{ marginLeft: 20 }} />
            <AppsOutlinedIcon color="action" style={{ marginLeft: 20 }} />
            <AccountCircleOutlinedIcon
              color="action"
              style={{ marginLeft: 20 }}
            />
          </Box>
        </Toolbar>
      </StyledAppBar>
    </div>
  );
};

export default Header;
