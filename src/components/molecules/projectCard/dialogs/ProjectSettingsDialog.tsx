import { LoadingButton } from '@mui/lab';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { FC } from 'react';

export const ProjectSettingsDialog: FC<{
  open: boolean;
  handleClose: any;
  projectId: string;
}> = ({ open, handleClose, projectId }) => {
  const submit = () => {};

  return (
    <Dialog maxWidth="sm" fullWidth open={open} onClose={handleClose}>
      <DialogTitle id="alert-dialog-title">حذف پروژه از سامانه؟</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          آیا مایل به حذف این پروژه از سامانه هستید؟
          <br />
          در صورت حذف پروژه امکان بازیابی آن وجود ندارد.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleClose}
          variant="contained"
          color="primary"
          autoFocus
        >
          خیر
        </Button>
        <LoadingButton onClick={submit} variant="outlined" color="error">
          بله
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};
