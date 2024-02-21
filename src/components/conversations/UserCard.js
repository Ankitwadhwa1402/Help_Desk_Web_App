import { Box, Checkbox, Stack, Typography } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import { setSelectedUserDetails } from "../slices/agentSlice";
import { useSelector } from "react-redux";
import { dispatch } from "../redux/store";

UserCard.propTypes = {
  userDetails: PropTypes.object,
};

export default function UserCard({ userDetails }) {
  const selectedUserDetails = useSelector((state)=>
  state.agentSlice.selectedUserDetails
   );
  const handleSelectUserCardDetails = () => {
    dispatch(setSelectedUserDetails(userDetails));
  };
  return (
    <Stack
      sx={{
        ...(selectedUserDetails?.id === userDetails?.id && {
          background: "#D9D9D9",
        }),
        p: 2,
      }}
      onClick={() => handleSelectUserCardDetails()}
    >
      <Box className="row">
        <Box
          sx={{
            flex: 1,
          }}
        >
          <Checkbox
            sx={{
              ml: -1,
            }}
          />
        </Box>
        <Stack
          sx={{
            flex: 7,
          }}
        >
          <Typography>{userDetails?.name}</Typography>
          <Typography
            sx={{
              fontWeight: "bold",
            }}
          >
            Facebook DM
          </Typography>
        </Stack>
        <Box
          sx={{
            flex: 2,
          }}
        >
          <Typography>10m</Typography>
        </Box>
      </Box>
      <Box>
        <Typography>Awesome Product</Typography>
        <Typography>last message</Typography>
      </Box>
    </Stack>
  );
}
