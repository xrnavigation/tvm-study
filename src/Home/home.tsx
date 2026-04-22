import * as React from 'react';
import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Typography, Link } from '@mui/material';

const Home = () => {
  useEffect(() => {
    document.title = 'Table vs. Map Study Condition Site';
  }, []);

  return (
    <Container style={{ padding: '2rem', maxWidth: '900px' }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Table vs. Map Study Condition Site
      </Typography>

      <Typography variant="h4" component="h2" gutterBottom>
        Code
      </Typography>
      <Typography variant="body1" paragraph>
        <Link
          href="https://github.com/xrnavigation/tvm-study"
          target="_blank"
          rel="noopener noreferrer"
        >
          The code for this site can be found on the tvm-study GitHub repository.
        </Link>
      </Typography>

      <Typography variant="h4" component="h2" gutterBottom>
        Conditions
      </Typography>
      <Typography variant="body1" paragraph>
        Each condition (Visual Map, Table, and Audiom Map) has four maps
        (Map 1, Map 2, Map 3, and Map 4). Each of these maps is rendered
        from the same GeoJSON data.
      </Typography>
      <Typography variant="body1" paragraph>
        Each participant was asked to select one of the four conditions.
        During training, participants reviewed the same map number
        (e.g., Map 1) across all three conditions. They were asked to
        open all three maps in different tabs so they could quickly
        switch between them.
      </Typography>
      <Typography variant="body1" paragraph>
        During the experimental condition, participants were asked to
        select one of the maps from one of the conditions.
      </Typography>
    </Container>
  );
};

export default Home;
