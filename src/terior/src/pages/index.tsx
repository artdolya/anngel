import Header from '@/app/component/Header'
import Hero from '@/app/component/Hero'
import { Box, Container, Typography } from '@mui/material'


export default function Home() {
  return (
    <Container maxWidth='xl'>
        <Header/>
        <Hero/>
    </Container>

  )
}
