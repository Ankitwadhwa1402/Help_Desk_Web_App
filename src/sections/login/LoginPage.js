import React from 'react'
import "./LoginPage.css"
import Signup from '../../components/Signup'
import { Box } from '@mui/material'
import "./../../App.css"

export default function LoginPage() {
  return (
    <Box className="loginBox  justifyCenter alignCenter">
      <Box className='whiteBox'>
        <Signup />
      </Box>
    </Box>

  )
}
