import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import UserCard from "./UserCard";
import {
  Dehaze,
  FormatAlignLeft,
  Menu,
  ReplayRounded,
} from "@mui/icons-material";

export default function Conversations() {
  const userDetails = [
    {
      id: 1,
      name: "Amit RG",
      firstName: "Amit",
      lastName: "RG",
      email: "amit@richpanel.com",
    },
    {
      id: 2,
      name: "Hitesh Saxena",
      firstName: "Hitesh",
      lastName: "Saxena",
      email: "hitesh@richpanel.com",
    },
    {
      id: 3,
      name: "Ankit Wadhwa",
      firstName: "Ankit",
      lastName: "Wadhwa",
      email: "ankit@richpanel.com",
    },
  ];
  return (
    <Stack
      className="column"
      sx={{
        height: "100%",
        borderRight:"1px solid #D9D9D9",
      }}
      
    >
      <Box
        className=" alignCenter"
        sx={{
          p: 1,
          flex: 1,
          width: "100%",

        }}
      >
        <Menu sx={{ color: "grey", mr: 1 }} />
        <Box className=" alignCenter justifySpaceBetween" sx={{ flex: 1 ,pr:2}}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
            }}
          >
            Conversations
          </Typography>
          <ReplayRounded />
        </Box>
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
