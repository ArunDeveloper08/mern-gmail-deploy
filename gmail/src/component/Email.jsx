import React, { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { API_URLS } from "../services/api.url";
import useApi from "../hooks/useApi";
import { Box, Checkbox, List, Typography, styled } from "@mui/material";
import { CheckBox, DeleteOutline, Star, StarBorder } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { routes } from "../routes/routes";
import NoMails from "./NoMails";
import { EMPTY_TABS } from "./constant/Constant";

const Text = styled(Typography)`
  font-size: 14px;
`;

const Email = () => {
  const navigate = useNavigate();
  const { openDrawer } = useOutletContext();
  const toggleStarredService = useApi(API_URLS.toggleStarredMails);
  const { type } = useParams();
  const [selectedEmails, setSelectedEmails] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const getEmailsService = useApi(API_URLS.getEmailFromType);
  const moveEmailsToBinServices = useApi(API_URLS.moveEmailstoBin);
  useEffect(() => {
    getEmailsService.call({}, type);
  }, [type, refresh]);

  const selectedAllEmails = (e) => {
    if (e.target.checked) {
      const emails = getEmailsService?.response?.map((email) => email._id);
      setSelectedEmails(emails);
    } else {
      setSelectedEmails([]);
    }
  };
  const deleteSelectedEmails = (e) => {
    if (type === "bin") {
    } else {
      moveEmailsToBinServices?.call(selectedEmails);
    }
    setRefresh((prev) => !prev);
  };
  const toggleStarredMails = (email) => {
    toggleStarredService?.call({ id: email._id, value: !email.starred });
    setRefresh((prev) => !prev);
  };
  return (
    <Box
      style={
        openDrawer
          ? { marginLeft: 250, width: "calc(100% - 250px)" }
          : { width: "100%" }
      }
    >
      <Box
        style={{
          padding: "20px 10px 0 10px ",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Checkbox size="small" onChange={(e) => selectedAllEmails(e)} />
        <DeleteOutline onClick={(e) => deleteSelectedEmails(e)} />
      </Box>
      <List>
        {getEmailsService &&
          getEmailsService?.response?.map((email) => {
            return (
              <>
                <Box
                  style={{
                    padding: "0px 0px 0px 10px",
                    cursor: "pointer",
                    background: "#f2f6fc",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Checkbox
                    size="small"
                    checked={selectedEmails.includes(email._id)}
                  />
                  {email.starred ? (
                    <Star
                      size="small"
                      style={{ marginRight: 10, color: "#F8DE7E" }}
                      onClick={() => toggleStarredMails(email)}
                    />
                  ) : (
                    <StarBorder
                      size="small"
                      style={{ marginRight: 10 }}
                      onClick={() => toggleStarredMails(email)}
                    />
                  )}

                  <Box
                    style={{ display: "flex", width: "100%" }}
                    onClick={() =>
                      navigate(routes.view.path, { state: { email: email } })
                    }
                  >
                    <Text style={{ width: 200, overflow: "hidden" }}>
                      {email.name}
                    </Text>
                    <Typography
                      style={{
                        fontSize: 12,
                        background: "#ddd",
                        color: "#222",
                        padding: "0 4px",
                        borderRadius: 4,
                        marginRight: 6,
                      }}
                    >
                      Inbox
                    </Typography>
                    <Text>
                      {email?.subject} {email.body && "-"} {email.body}
                    </Text>
                    <Text
                      style={{
                        marginLeft: "auto",
                        marginRight: 20,
                        color: "#5f6368",
                        fontSize: 12,
                      }}
                    >
                      {new window.Date(email.date).getDate()}
                      {new window.Date(email.date).toLocaleString("default", {
                        month: "long",
                      })}
                    </Text>
                  </Box>
                </Box>
              </>
            );
          })}
      </List>
      {
        getEmailsService?.response?.length===0 &&
        <NoMails message={EMPTY_TABS[type]}/>
      }
    </Box>
  );
};

export default Email;
