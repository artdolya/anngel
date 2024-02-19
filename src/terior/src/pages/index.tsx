import { Box, Container, Typography } from '@mui/material'


export default function Home() {
  return (
    <Container sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
      }}>
      <Box>
       <Typography>MAIN PAGE</Typography>
      </Box>

    </Container>

      )
}
