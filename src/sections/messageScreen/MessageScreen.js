import React from "react";
import NavBar from "../../components/navBar/NavBar";
import { Box } from "@mui/material";
import Conversations from "../../components/conversations/Conversations";
import SelectedUserDetails from "../../components/UserDetails/SelectedUserDetails";
import MessageCard from "../../components/messages/MessageCard";
import { useSelector } from "react-redux";

export default function MessageScreen() {
  const selectedUserDetails = useSelector(
    (state) => state.agentSlice.selectedUserDetails
  );
  return (
    <Box
      className="row"
      sx={{
        height: "100%",
      }}
    >
      <Box
        sx={{
          flex: 0.5,
          minWidth:'60px'
        }}
      >
        <NavBar />
      </Box>
      <Box
        sx={{
          flex: 2,
          background: "white",
        }}
      >
        <Conversations />
      </Box>
      {selectedUserDetails !== null ? (
        <>
          <Box
            sx={{
              flex: 5.5,
              background: "lightGrey",
            }}
          >
            <MessageCard />
          </Box>
          <Box
            sx={{
              flex: 2,
              background: "white",
            }}
          >
            <SelectedUserDetails />
          </Box>
        </>
      ) : (
        <Box sx={{ flex: 7, background: "lightGrey" }} />
      )}
    </Box>
  );
}
