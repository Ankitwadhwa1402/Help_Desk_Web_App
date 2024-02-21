import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import UserCard from "./UserCard";
import { Dehaze, FormatAlignLeft, Menu } from "@mui/icons-material";

export default function Conversations() {
  const userDetails = [
    {
      id: 1,
      name: "Amit RG",
    },
    {
      id: 2,
      name: "Hitesh Saxena",
    },
    {
      id: 3,
      name: "Ankit Wadhwa",
    },
  ];
  return (
    <Stack
      className="column"
      sx={{
        height: "100%",
      }}
    >
      <Box
        className=" alignCenter"
        sx={{
          p: 1,
          flex: 1,
        }}
      >
        <Menu sx={{ color: "grey", mr: 1 }} />
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
          }}
        >
          Conversations
        </Typography>
      </Box>
      <Box
        sx={{
          flex: 9,
        }}
      >
        {userDetails.map((user) => (
          <UserCard userDetails={user} />
        ))}
      </Box>
    </Stack>
  );
}
