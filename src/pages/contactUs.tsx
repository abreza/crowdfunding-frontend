import { Container, Paper } from '@mui/material';
import { FC } from 'react';
import Homepage from 'templates/Homepages';
import GoogleMapReact from 'google-map-react';

type ContactUsProps = {};

const ContactUs: FC<ContactUsProps> = () => {
  return (
    <Homepage>
      <Container sx={{ py: 2 }}>
        <Paper
          sx={{
            overflow: 'hidden',
            position: 'relative',
            height: 500,
            mb: 2,
          }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: 'AIzaSyC6nlGw86xpoijb2miwL1DwUtp8TTvaUd4',
            }}>
            {/* @ts-ignore */}
            {/* <div lat={59.955413} lng={30.337844}>
              ما اینجاییم
            </div> */}
          </GoogleMapReact>
        </Paper>
      </Container>
    </Homepage>
  );
};

export default ContactUs;
