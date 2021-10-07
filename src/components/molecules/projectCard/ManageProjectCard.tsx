import { Button, ButtonGroup, Paper } from '@mui/material';
import { Delete, Edit, Settings } from '@mui/icons-material';
import { FC, useState } from 'react';
import { DeleteProjectDialog } from './dialogs/DeleteProjectDialog';
import { ProjectRo } from 'src/app/services/api.generated';

export const ManageProjectCard: FC<{ project?: ProjectRo }> = ({ project }) => {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openSettingsDialog, setOpenSettingsDialog] = useState(false);

  return (
    <Paper elevation={2}>
      <ButtonGroup variant="text" fullWidth color="secondary">
        <Button onClick={() => setOpenDeleteDialog(true)}>
          <Delete />
        </Button>
        <Button onClick={() => alert()}>
          <Edit />
        </Button>
        <Button onClick={() => alert()}>
          <Settings />
        </Button>
      </ButtonGroup>
      <DeleteProjectDialog
        open={!!project && openDeleteDialog}
        handleClose={() => setOpenDeleteDialog(false)}
        projectId={project?.id as string}
      />
    </Paper>
  );
};