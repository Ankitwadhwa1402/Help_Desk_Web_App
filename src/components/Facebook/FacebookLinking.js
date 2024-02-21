import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";

export default function FacebookLinking() {
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
          {false ? (
            <Box
              sx={{
                my: 2,
              }}
            >
              <Button
                variant="contained"
                sx={{
                  width: "100%",
                  textTransform:"none"

                }}
              >
                Connect Page
              </Button>
            </Box>
          ) : (
            <Stack
              sx={{
                my: 2,
              }}
              spacing = {2}
            >
            <Box className='row'>
            <Typography>
              Integrated Page: &nbsp;
            </Typography>
            <Typography sx={{
              fontWeight:"bold"
            }}>
              Amazon Business
            </Typography>
            </Box>
            
              <Button
                variant="contained"
                color="error"
                sx={{
                  width: "100%",
                  textTransform:"none",
                }}
              >
                Delete Integration
              </Button>
              <Button
                variant="contained"
                sx={{
                  width: "100%",
                  textTransform:"none"
                }}
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
