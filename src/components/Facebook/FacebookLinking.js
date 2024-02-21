import React, { useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function FacebookLinking() {
  const navigate = useNavigate();
  const [facebookIntegrated, setFacebookIntergrated] = useState(true);

  const deleteFacebookIntegration = () => {
    setFacebookIntergrated(false);
  };
  const connectFacebookPage = () => {
    setFacebookIntergrated(true);
  };
  const replyToMessages = () => {
      navigate("messages")
  };
  return (
    <Box className="loginBox  justifyCenter alignCenter">
      <Box className="whiteBox">
        <Stack
          className="justifyCenter "
          sx={{
            p: 6,
            width: "100%",
          }}
        >
          <Box
            sx={{
              my: 2,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                textAlign: "center",
                fontWeight: "600",
              }}
            >
              Facebook Page Integration
            </Typography>
          </Box>
          {!facebookIntegrated ? (
            <Box
              sx={{
                my: 2,
              }}
            >
              <Button
                variant="contained"
                sx={{
                  width: "100%",
                  textTransform: "none",
                }}
                onClick={() => connectFacebookPage()}
              >
                Connect Page
              </Button>
            </Box>
          ) : (
            <Stack
              sx={{
                my: 2,
              }}
              spacing={2}
            >
              <Box className="row">
                <Typography>Integrated Page: &nbsp;</Typography>
                <Typography
                  sx={{
                    fontWeight: "bold",
                  }}
                >
                  Amazon Business
                </Typography>
              </Box>

              <Button
                variant="contained"
                color="error"
                sx={{
                  width: "100%",
                  textTransform: "none",
                }}
                onClick={() => deleteFacebookIntegration()}
              >
                Delete Integration
              </Button>
              <Button
                variant="contained"
                sx={{
                  width: "100%",
                  textTransform: "none",
                }}
                onClick={() => replyToMessages()}
              >
                Reply to Messages
              </Button>
            </Stack>
          )}
        </Stack>
      </Box>
    </Box>
  );
}
