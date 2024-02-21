import { AccountCircleRounded, Call } from "@mui/icons-material";
import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

export default function SelectedUserDetails() {
  const selectedUserDetails = useSelector(
    (state) => state.agentSlice.selectedUserDetails
  );

  return (
    <Stack
      className="column"
      sx={{
        height: "100%",
        border: "1px solid #D9D9D9",
      }}
    >
      <Stack
        className="alignCenter justifyCenter"
        sx={{
          flex: 4,
          borderBottom: "1px solid #D9D9D9",
        }}
      >
        <Avatar
          src=""
          sx={{
            mb: 2,
          }}
        />
        <Typography
          sx={{
            fontWeight: "bold",
          }}
        >
          {selectedUserDetails?.name}
        </Typography>
        <Box className="row ">
          <Box
            sx={{
              width: "5px",
              height: "5px",
              background: "grey",
              borderRadius: "50%",
              display: "flex",
              alignSelf: "center",
              mr: 0.5,
            }}
          />
          <Typography
            sx={{
              fontSize: "14px",
              color: "grey",
            }}
          >
            Offline
          </Typography>
        </Box>

        <Box
          className="row justifyCenter"
          sx={{
            width: "100%",
            p: 2,
          }}
        >
          <Button
            variant="outlined"
            sx={{
              mr: 2,
              color: "darkGrey",
              borderColor: "#D9D9D9",
            }}
            startIcon={<Call />}
          >
            Call
          </Button>
          <Button
            sx={{
              color: "darkGrey",
              borderColor: "#D9D9D9",
            }}
            variant="outlined"
            startIcon={<AccountCircleRounded />}
          >
            Profile
          </Button>
        </Box>
      </Stack>
      <Box
        sx={{
          flex: 6,
          p: 2,
          background: "#acacd0",
        }}
      >
        <Stack
          sx={{
            background: "white",
            p: 2,
            borderRadius: 2,
            border: "1px solid #D9D9D9",
          }}
        >
          <Box
            sx={{
              mb: 1,
            }}
          >
            <Typography>Customer Details</Typography>
          </Box>
          <Stack spacing={0.5}>
            <Box className="row justifySpaceBetween">
              <Typography>Email:</Typography>
              <Typography>{selectedUserDetails?.email}</Typography>
            </Box>
            <Box className="row justifySpaceBetween">
              <Typography>First Name:</Typography>
              <Typography>{selectedUserDetails?.firstName}</Typography>
            </Box>
            <Box className="row justifySpaceBetween">
              <Typography>Last Name:</Typography>
              <Typography>{selectedUserDetails?.lastName}</Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  color: "#1565c0",
                  fontWeight: "bold",
                }}
              >
                View more details
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
}
