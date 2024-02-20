import { Box, Button, Typography, styled } from '@mui/material'
import Image from 'next/image';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

  
function Header() {

const pages = ["Об'єкти", 'Контакти', 'Про нас'];
const logoTexts = ['Terior', 'Design', 'Studio'];

return (

<AppBar position="static" sx={{backgroundColor: 'white', boxShadow: 'none'}}>
<Container maxWidth='xl'>
  <Toolbar disableGutters>
    <Box sx={{
        display:'flex',
        justifyContent: 'center',
        alignItems:'center'
    }}>
        <Image
        src="/logo.png"
        alt="logo"
        width={62}
        height={73}
        />
        <Box 
            sx={{
            display:'flex',
            flexDirection:'column',
            ml:'4px'
        }}>
            {logoTexts.map((logoText) => (
                <Typography
                key={logoText}
                sx={{color: 'black',
                fontWeight: '900',
                fontSize: '10px',
                textTransform: 'uppercase'
                }}
                >
                {logoText}
                </Typography>
            ))}
        </Box>
    </Box>
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      {pages.map((page) => (
        <Button
          key={page}
          sx={{ 
            my: 2, 
            color: 'black', 
            display: 'block', 
            fontSize:'20px', 
            fontWeight:'900', 
            ml: '40px'
        }}>
          {page}
        </Button>
      ))}
    </Box>
  </Toolbar>
</Container>
</AppBar>
  )
}

export default Header;