import React from "react";
import SelectedUserDetails from "../UserDetails/SelectedUserDetails";
import { useSelector } from "react-redux";
import { Box, Stack, TextField, Typography } from "@mui/material";

export default function MessageCard() {
  const selectedUserDetails = useSelector(
    (state) => state.agentSlice.selectedUserDetails
  );

  if (selectedUserDetails === null) {
    return <Box />;
  }
  return (
    <Stack
      sx={{
        height: "100%",
      }}
    >
      <Box
        sx={{
          flex: 0.5,
          p: 2,
          background: "white",
          border:"1px solid #D9D9D9",

        }}
      >
        <Typography sx={{ fontWeight: "bold" }}>
          {selectedUserDetails?.name}
        </Typography>
      </Box>
      <Box
        sx={{
          flex: 8.5,
        }}
      >
        Messages Space
      </Box>
      <Box
        className="center"
        sx={{
          flex: 1,
          width: "100%",
        }}
      >
        <TextField
          placeholder={"Message " + selectedUserDetails?.name}
          sx={{
            background: "white",
            borderRadius: "4px",
            width: "90%",
          }}
          InputProps={{ style: { height: 40 } }}
        />
      </Box>
    </Stack>
  );
}
