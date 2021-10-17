import { LoadingButton } from '@mui/lab';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  InputAdornment,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material';
import { FC, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { usePaymentControllerDonateMutation } from 'src/app/services/api.generated';
import { PriceFormat } from 'src/components/atoms/PriceFormat';
import { ProjectContext } from 'src/contexts/ProjectContext';

export const DonateDialog: FC<{ open: boolean; handleClose: () => void }> = ({
  open,
  handleClose,
}) => {
  const { id, subject } = useContext(ProjectContext);
  const [donate, { isLoading }] = usePaymentControllerDonateMutation();

  const [amount, setAmount] = useState(0);

  const submit = () => {
    if (!amount) {
      toast.error('لطفا مبلغ مورد نظر را وارد کنید.');
      return;
    }
    donate({
      donateDto: {
        amount,
        projectId: id as string,
        callbackUrl: 'https://funding.amaj.dev/payment/result/',
      },
    })
      .unwrap()
      .then(({ link }) => {
        window.location.href = link;
      });
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm">
      <DialogTitle>
        {' '}
        <Typography variant="h4">حمایت از پروژه {subject}</Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Typography sx={{ mb: 2 }}>
            اگر از این پروژه خوشتون اومده، می‌تونید با حمایت از اون سهمی در
            توسعه بهتر اون داشته باشید.
            <br />
            برای مطالعه بیشتر قوانین موجود حمایت در سامانه به{' '}
            <a
              target="_blank"
              href="https://twitter.com/"
              rel="noopener noreferrer"
            >
              صفحه قوانین
            </a>{' '}
            و در صورت داشتن پرسش به صفحه{' '}
            <a
              target="_blank"
              href="https://twitter.com/"
              rel="noopener noreferrer"
            >
              به صفحه پرسش‌های متداول
            </a>{' '}
            مراجعه کنید
          </Typography>
          <TextField
            value={amount ? amount : ''}
            onChange={(e) => setAmount(+e.target.value)}
            fullWidth
            size="small"
            label="مبلغ حمایت"
            placeholder="۱۰۰٫۰۰۰٫۰۰۰"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">تومان</InputAdornment>
              ),
              inputComponent: PriceFormat as any,
            }}
            sx={{ mb: 2 }}
          />
          <TextField select fullWidth value="z" label="درگاه پرداخت">
            <MenuItem value="z" selected>
              زرین‌پال
            </MenuItem>
          </TextField>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <LoadingButton
          onClick={submit}
          loading={isLoading}
          variant="contained"
          fullWidth
        >
          حمایت
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};
