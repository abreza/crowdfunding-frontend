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
import { toast } from 'react-toastify';
import { useProjectControllerDeleteMutation } from 'src/app/services/api.generated';

export const DeleteProjectDialog: FC<{
  open: boolean;
  handleClose: () => void;
  projectId: string;
}> = ({ open, handleClose, projectId }) => {
  const [deleteProject, { isLoading }] = useProjectControllerDeleteMutation();

  const submit = () => {
    deleteProject({ projectId })
      .unwrap()
      .then(() => {
        toast.success('پروژه با موفقیت حذف شد.');
        handleClose();
      })
      .catch(() => toast.error('ایرادی رخ‌داده است! دوباره تلاش کنید.'));
  };

  return (
    <Dialog maxWidth="sm" fullWidth open={open} onClose={handleClose}>
      <DialogTitle>حذف پروژه از سامانه؟</DialogTitle>
      <DialogContent>
        <DialogContentText>
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
        <LoadingButton
          onClick={submit}
          loading={isLoading}
          variant="outlined"
          color="error"
        >
          بله
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};
