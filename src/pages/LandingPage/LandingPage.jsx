import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const LandingPage = () => {
  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        <Typography variant="h1" component="div" gutterBottom>
          Caffeine Quay
        </Typography>
        <Typography variant="h6" component="div" gutterBottom>
          Your family's favorite lakeside cafe
        </Typography>
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
