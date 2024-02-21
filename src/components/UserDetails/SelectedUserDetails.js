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
      }}
    >
      <Stack
        className="alignCenter justifyCenter"
        sx={{
          flex: 4,
        }}
      >
        <Avatar
          src=""
          sx={{
            mb: 2,
          }}
        />
        <Typography sx={{
          fontWeight:'bold'
        }}>{selectedUserDetails?.name}</Typography>
        <Box className="row ">
          <Box 

            sx={{
              width:'5px',
              height:'5px',
              background:"grey",
              borderRadius:'50%',
              display:'flex',
              alignSelf:'center',
              mr:0.5,
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
            }}
            startIcon={<Call />}
          >
            Call
          </Button>
          <Button variant="outlined" startIcon={<AccountCircleRounded />}>
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
              <Typography>amit@richpanel.com</Typography>
            </Box>
            <Box className="row justifySpaceBetween">
              <Typography>First Name:</Typography>
              <Typography>amit</Typography>
            </Box>
            <Box className="row justifySpaceBetween">
              <Typography>Last Name:</Typography>
              <Typography>RG</Typography>
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
