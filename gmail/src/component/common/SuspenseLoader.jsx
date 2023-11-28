import { CircularProgress, Typography } from "@mui/material";
import React from "react";

const SuspenseLoader = () => {
  return (
    <div>
      <CircularProgress />
      <Typography>Loading...</Typography>
    </div>
  );
};

export default SuspenseLoader;
