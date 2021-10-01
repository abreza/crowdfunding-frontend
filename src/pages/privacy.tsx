import { Container, Grid, Paper, Typography } from '@mui/material';
import { FC } from 'react';
import Homepage from 'templates/Homepages';

import sharif from 'assets/images/sharif.jpg';
import Image from 'next/image';
import { Box } from '@mui/system';

type PrivacyProps = {};

const Privacy: FC<PrivacyProps> = () => {
  return (
    <Homepage>
      <Container sx={{ py: 2 }} maxWidth="md">
        <Paper
          sx={{
            overflow: 'hidden',
            position: 'relative',
            mb: 2,
          }}>
          <Box
            sx={{
              height: 450,
              position: 'relative',
              filter: 'blur(2px) grayscale(70%) brightness(0.70)',
            }}>
            <Image
              src={sharif}
              alt="about"
              layout="fill"
              quality={50}
              objectFit="cover"
            />
          </Box>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              top: 0,
              right: 0,
              width: '100%',
              height: '100%',
            }}>
            <Grid item xs={12}>
              <Typography
                variant="h1"
                align="center"
                color="white"
                sx={{ textShadow: '#ccc 1px 3px' }}>
                حریم خصوصی
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Homepage>
  );
};

export default Privacy;
