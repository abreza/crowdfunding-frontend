import { LoadingButton } from '@mui/lab';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  MenuItem,
  TextField,
} from '@mui/material';
import { FC, useState } from 'react';
import { toast } from 'react-toastify';
import {
  ProjectRo,
  useProjectControllerUpdateMutation,
} from 'src/app/services/api.generated';
import { projectStates } from 'src/constants/projectStates';

export const ProjectSettingsDialog: FC<{
  open: boolean;
  handleClose: () => void;
  project: ProjectRo;
}> = ({ open, handleClose, project }) => {
  const [updateProject, { isLoading }] = useProjectControllerUpdateMutation();

  const [projectState, setProjectState] = useState(project.state);

  const submit = () => {
    updateProject({
      projectId: project.id,
      projectUpdateDto: { state: projectState },
    })
      .unwrap()
      .then(() => {
        toast.success('پروژه با موفقیت تغییر وضعیت داد.');
        handleClose();
      })
      .catch(() => toast.error('ایرادی رخ‌داده است! دوباره تلاش کنید.'));
  };
  return (
    <Dialog maxWidth="sm" fullWidth open={open} onClose={handleClose}>
      <DialogTitle>تنظیمات پروژه</DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ py: 1 }}>
          <TextField
            select
            label="وضعیت پروژه"
            value={projectState}
            sx={{ minWidth: 150 }}
            onChange={(e) => setProjectState(e.target.value as any)}
          >
            {projectStates.map((state) => (
              <MenuItem key={state.value} value={state.value}>
                {state.label}
              </MenuItem>
            ))}
          </TextField>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleClose}
          variant="contained"
          color="primary"
          autoFocus
        >
          لغو
        </Button>
        <LoadingButton
          onClick={submit}
          variant="outlined"
          color="error"
          loading={isLoading}
        >
          ثبت
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};
