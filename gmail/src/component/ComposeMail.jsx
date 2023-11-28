import { Close, DeleteOutline } from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  InputBase,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import useApi from "../hooks/useApi";
import { API_URLS } from "../services/api.url";

const dialogStyle = {
  height: "90%",
  width: "80%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  borderRadius: "10px 10px 0 0",
};

const config = {
  Host: "smtp.elasticemail.com",
  Username: "arunkanojiya455@gmail.com",
  Password: "AE18C3FF80D737C714B7428855D03C136CB3",
  Port: 2525,
};

const ComposeMail = ({ openDialog, setOpenDialog }) => {
  const [data, setData] = useState({});
  const sentEmailService = useApi(API_URLS.saveSentEmail);
  const saveDraftService = useApi(API_URLS.saveDraftEmails);

  const handleClose = (e) => {
    e.preventDefault();
    const payload = {
      to: data.to,
      from: "arunkanojiya455@gmail.com",
      subject: data.subject,
      body: data.body,
      date: new Date(),
      image: "",
      name: "Arun",
      starred: false,
      type: "drafts",
    };

    saveDraftService.call(payload);

    if (!saveDraftService.error) {
      setOpenDialog(false);
      setData({});
    }

    setOpenDialog(false);

    setOpenDialog(false);
  };

  const sendMail = (e) => {
    e.preventDefault();
    if (window.Email) {
      window.Email.send({
        ...config,
        To: data.to,
        From: "arunkanojiya455@gmail.com",
        Subject: data.subject,
        Body: data.body,
      }).then((message) => alert(message));
    }
    const payload = {
      to: data.to,
      from: "arunkanojiya455@gmail.com",
      subject: data.subject,
      body: data.body,
      date: new Date(),
      image: "",
      name: "Arun",
      starred: false,
      type: "sent",
    };

    sentEmailService.call(payload);

    if (!sentEmailService.error) {
      setOpenDialog(false);
      setData({});
    }

    setOpenDialog(false);
  };

  const onValueChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <Dialog
      open={openDialog}
      PaperProps={{ sx: dialogStyle }}
      close={handleClose}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 15px",
          background: "#f2f6fc",
        }}
      >
        <Typography>New Message</Typography>
        <Close fontSize="small" onClick={handleClose} />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", padding: "0 15px" }}>
        <InputBase
          placeholder="recipients"
          sx={{ borderBottom: "1px solid #F5F5F5", marginTop: "10p" }}
          onChange={(e) => onValueChange(e)}
          name="to"
        />
        <InputBase
          placeholder="Subject"
          sx={{ borderBottom: "1px solid #F5F5F5", marginTop: "10px" }}
          onChange={(e) => onValueChange(e)}
          name="subject"
        />
      </Box>
      <TextField
        multiline
        rows={15}
        sx={{ " &  .MuiOutlinedInput-notchedOutline": { border: "none" } }}
        onChange={(e) => onValueChange(e)}
        name="body"
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "5px 15px",
        }}
      >
        <Button variant="contained" onClick={sendMail}>
          Send
        </Button>
        <DeleteOutline onClick={() => setOpenDialog(false)} />
      </Box>
    </Dialog>
  );
};

export default ComposeMail;
