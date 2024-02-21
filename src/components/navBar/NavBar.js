import { Forum, Group, HomeRounded, TrendingUp } from "@mui/icons-material";
import { Avatar, Box, Stack } from "@mui/material";
import React from "react";

export default function NavBar() {
  return (
    <Stack
      sx={{
        height: "100%",
      }}
    >
      <Stack
        className="alignCenter"
        sx={{
          flex: 9,
        }}
      >
        <Box
          className="justifyCenter"
          sx={{
            py: 2,
          }}
        >
          <HomeRounded
            sx={{
              color: "white",
            }}
          />
        </Box>
        <Box
          className="justifyCenter"
          sx={{
            background: "white",
            py: 2,
            width: "100%",
          }}
        >
          <Forum
            sx={{
              color: "#0c3e76",
            }}
          />
        </Box>
        <Box
          className="justifyCenter"
          sx={{
            py: 2,
          }}
        >
          <Group
            sx={{
              color: "white",
            }}
          />
        </Box>{" "}
        <Box
          className="justifyCenter"
          sx={{
            py: 2,
          }}
        >
          <TrendingUp
            sx={{
              color: "white",
            }}
          />
        </Box>
      </Stack>
      <Box
        className="justifyCenter"
        sx={{
          position: "relative",
          alignItems: "end",
          flex: 1,
          mb: 2,
        }}
      >
        <Avatar />
        <Box
          sx={{
            height: "10px",
            width: "10px",
            background: "#00AB55",
            borderRadius: "50%",
            position:'absolute',
            top: "90%",
            right: "27%",
          }}
        />
      </Box>
    </Stack>
  );
}
