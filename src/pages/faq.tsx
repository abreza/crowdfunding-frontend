import {
  Container,
  Paper,
  Grid,
  Typography,
  AccordionDetails,
  Accordion,
  AccordionSummary,
} from '@mui/material';
import { FC, SyntheticEvent, useState } from 'react';
import Homepage from 'src/templates/Homepages';
import sharif from 'src/assets/images/sharif.jpg';
import Image from 'next/image';
import { Box } from '@mui/system';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';

type FAQProps = {};

const FAQ: FC<FAQProps> = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Homepage>
      <Container sx={{ py: 2 }}>
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
                سوالات متداول
              </Typography>
            </Grid>
          </Grid>
        </Paper>
        <Accordion
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header">
            <Typography
              sx={{ width: { sm: '33%', xs: '100%' }, flexShrink: 0 }}>
              تامین مالی جمعی شریف چیست؟
            </Typography>
            <Typography
              sx={{
                color: 'text.secondary',
                display: { sm: 'unset', xs: 'none' },
              }}>
              سامانه تامین مالی تحقیقات علمی و دانشگاهی
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              تامین مالی جمعی شریف، فضاییست برای معرفی تحقیقات و پروژه‌های
              دانشگاهی و جمع‌آوری سرمایه مورد نیاز آن‌ها.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header">
            <Typography
              sx={{ width: { sm: '33%', xs: '100%' }, flexShrink: 0 }}>
              آیا پروژه‌ها بررسی می‌شوند؟
            </Typography>
            <Typography
              sx={{
                color: 'text.secondary',
                display: { sm: 'unset', xs: 'none' },
              }}>
              تیمی از اساتید دانشگاهی
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              در این سامانه هر پروژه‌ای که تعریف می‌شود، تیمی از اساتید برترین
              دانشگاه‌های کشور آن‌ها را بررسی می‌کنند و نظراتشان را اعلام
              می‌کنند و مشاوره‌های مناسبی به تیم اجرایی می‌دهند.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
    </Homepage>
  );
};

export default FAQ;
