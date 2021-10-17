import { Button, Container, Paper, Stack, Typography } from '@mui/material';
import Homepage from 'src/templates/Homepages';

import Link from 'next/link';
import { useRouter } from 'next/router';

export default function PaymentResult() {
  const { query } = useRouter();
  const { Status, pid } = query;

  return (
    <Homepage>
      <Container maxWidth="md" sx={{ py: 2 }}>
        <Paper sx={{ p: 2 }}>
          <Stack spacing={3}>
            <Typography align="center" variant="h2">
              {Status === 'OK'
                ? 'پرداخت شما با موفقیت انجام شد.'
                : 'پرداخت ناموفق!'}
            </Typography>
            <Stack direction="row">
              <Link href={`/project/${pid}/`} passHref>
                <Button variant="contained" fullWidth>
                  بازگشت به پروژه
                </Button>
              </Link>
              <Link href={`/project/`} passHref>
                <Button fullWidth>مشاهده سایر پروژه‌ها</Button>
              </Link>
            </Stack>
          </Stack>
        </Paper>
      </Container>
    </Homepage>
  );
}
