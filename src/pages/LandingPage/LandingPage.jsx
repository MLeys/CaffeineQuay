import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function LandingPage() {
  return (
    <Container>
{/* Main Title Block */}
      <Box
        sx={{
          // pt: 6,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'top',
          height: '100vh',
        }}
      >
{/* Title Block */}
        <Box 
          sx={{
            display: 'flex',
            flexDirection: 'column',
            pt: 0,
            alignItems: 'center',
            justifyContent: 'top',
            }}
        >
          <Typography variant="h1" component="div" >
            Caffeine Quay
          </Typography>
          <Typography variant="h6" component="div" >
            Your family's favorite lakeside cafe
          </Typography>
        </Box>
{/* Title Buttons */}
        <Box
          sx={{
            display: 'flex',
            gap: '1rem',
            marginTop: '2rem',
          }}
        >
          <Button variant="contained" color="neonPink">
            Order
          </Button>
          <Button variant="contained" color="secondary">
            Signin
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default LandingPage;
