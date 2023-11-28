import { Box, Divider, Typography } from "@mui/material";
import React from "react";

const NoMails = ({ message }) => {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", flexDirection: "column" , marginTop:"20px", opacity:"0.8px"}}
    >
      <Typography>{message.heading}</Typography>
      <Typography>{message.subHeading}</Typography>
      <Divider />
    </Box>
  );
};

export default NoMails;
