import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import AnalyticsIcon from '@mui/icons-material/Analytics';
import { NavLink } from 'react-router-dom'

const Header = () => {
  const [data, setdata] = useState(0)
  return (
    <AppBar position='sticky' sx={{ backgroundColor: '#1b55de'}}>
      <Toolbar>

        <Typography>
          <AnalyticsIcon sx={{cursor:'pointer'}}/>
        </Typography>

        <Tabs textColor='inherit' sx={{ ml: 'auto'}} indicatorColor='secondary'
          value={data} onChange={(e, val) => setdata(val)}>
          <Tab LinkComponent={NavLink} to='/signup' label='SignUp' />
          <Tab LinkComponent={NavLink} to='/login' label='LogIn' />
          {/* <Tab LinkComponent={NavLink} to='/welcome' label='Welcome' /> */}
        </Tabs>

      </Toolbar>
    </AppBar>
  )
}

export default Header
