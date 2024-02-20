import { Box, Container, Button } from "@mui/material";
import Image from 'next/image';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Hero(){
    return(
        <Container maxWidth='xl'>
            <Box sx={{position: 'relative', width: '100%', height: '641px' }}>
                <Image
                src="/heroImg.png"
                alt="hero"
                layout="fill"
                objectFit="cover"
                />
               <Button
                endIcon={<ArrowForwardIosIcon />}
                sx={{ 
                    color: 'black',
                    fontSize: '24px',
                    fontWeight: '900',
                    backgroundColor: 'white',
                    width: '259px',
                    height: '73px',
                    transition: 'background-color 0.3s ease',
                    position: 'absolute',
                    top: '80%', 
                    left: '0%', 
                    zIndex: 1,
                    '&:hover': {
                      color: 'white', 
                      backgroundColor: 'black',
                    },
                }}>
                Об'єкти
                </Button>
            </Box>
        </Container>
    );
}

export default Hero;