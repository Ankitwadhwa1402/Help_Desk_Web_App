import { Box, Button, Checkbox, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import "./../App.css"

export default function Signup() {
  const [existingUser,setExistingUser] = useState(true);
  const toggleExistingUser = () =>{
    setExistingUser(!existingUser);
  }
  return (
    <Stack sx={{
      display:'flex',
      width:'100%',
      p:6
    }}>
      <Stack sx={{
        py:2
      }}>
      {existingUser ?
        <Typography variant="h5" sx={{
          textAlign:'center'
        }}>
          Login to your account
        </Typography> 
      :
        <Typography variant="h5" sx={{
          textAlign:'center'
        }}>
          Create Account
        </Typography>
      }
      </Stack>
      {!existingUser ?
      <Stack>
        <Typography>
          Name
        </Typography>
        <TextField className='' placeholder='Enter Your Name' 
            InputProps={{ style: { height: 40, textAlign: 'center' }}} 
            sx={{
              mt:0.5,
              mb:2
            }}
        />
      </Stack>
      :
      <Box />
      }
      <Stack>
        <Typography>
          Email
        </Typography>
        <TextField className='' placeholder='Enter Your Email' 
            InputProps={{ style: { height: 40, textAlign: 'center' }}} 
            sx={{
              mt:0.5,
              mb:2
            }}
        />
      </Stack>
      
      <Stack>
        <Typography >
          Password
        </Typography>
        <TextField className='' type="password" placeholder='Enter Your Password' 
            InputProps={{ style: { height: 40, textAlign: 'center' }}} 
            sx={{
              mt:0.5,
              mb:2
            }}
        />
      </Stack>
      <Box className = 'row alignCenter'>
        <Checkbox  sx={{
          padding:'0px',
          mr:1,
        }}/>
        <Typography>Remember Me</Typography>
      </Box>
      <Box sx={{
        my:2
      }}>
      {existingUser ?
        <Button 
        variant='contained'
        sx={{
          width:'100%',
          textTransform:'none'
        }} >Login</Button>
        :
        <Button 
        variant='contained'
        sx={{
          width:'100%',
          textTransform:'none'
        }} >Sign up</Button>
      }
      </Box>
      {existingUser? 
        <Box className="row alignCenter justifyCenter">
        <Typography sx={{
          display:'inline'
        }}>
          New to myApp?
          </Typography>
        <Typography sx={{
          display:"inline",
          p:0,
          ml:0.5,
          textTransform:'none',
          textAlign:'start',
          color:'#1565c0',
          '&:hover':{
              textDecoration:'underline',
              cursor:'pointer'
            },
        }}
        onClick={()=>toggleExistingUser()}
        >Sign up</Typography>
      </Box>
      :
      <Box className="row alignCenter justifyCenter">
        <Typography sx={{
          display:'inline'
        }}>
          Already have an account?
          </Typography>
        <Typography sx={{
          display:"inline",
          p:0,
          ml:0.5,
          textTransform:'none',
          textAlign:'start',
          color:'#1565c0',
          '&:hover':{
              textDecoration:'underline',
              cursor:'pointer'
            },
        }}
        onClick={()=>toggleExistingUser()}
        >Login</Typography>
      </Box>
      }
    </Stack>
  )
}
