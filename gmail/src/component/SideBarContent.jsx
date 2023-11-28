import { CreateOutlined } from "@mui/icons-material";
import { Box, Button, List, ListItem, styled } from "@mui/material";
import { SIDEBAR_DATA } from "../config/sidebar.config";
import React, { useState } from "react";
import ComposeMail from "./ComposeMail";
import { NavLink, useParams } from "react-router-dom";
import { routes } from "../routes/routes";

const Container = styled(Box)({
  padding: 8,
  "& > ul": {
    padding: "10px 0 0 5px",
    fontSize: "14px",
    fontWeight: 500,
    cursor: "pointer",
    "& a": {
      textDecoration: "none",
      color: "inherit",
    },
  },
  "& > ul > a > li >svg": {
    marginRight: 20,
  },
});

const SideBarContent = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const { type } = useParams();
  return (
    <Container>
      <Button
        sx={{
          background: "#c2e7ff",
          color: "#001d35",
          borderRadius: 16,
          minWidth: 140,
          textTransform: "none",
        }}
        onClick={() => setOpenDialog(true)}
      >
        <CreateOutlined />
        Compose
      </Button>
      <List>
        {SIDEBAR_DATA.map((data) => (
          <NavLink key={data.name} to={`${routes.emails.path}/${data.name}`}>
            <ListItem
              style={
                type === data.name.toLowerCase()
                  ? { background: "#d3e3fd", borderRadius: "0 16px 16px 0" }
                  : {}
              }
            >
              <data.icon fontSize="small" style={{ textDecoration: "none" }} />
              {data.title}
            </ListItem>
          </NavLink>
        ))}
      </List>
      <ComposeMail openDialog={openDialog} setOpenDialog={setOpenDialog} />
    </Container>
  );
};

export default SideBarContent;
