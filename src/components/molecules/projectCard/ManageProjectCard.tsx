import { Button, ButtonGroup, Paper } from '@mui/material';
import { Delete, Edit, Settings } from '@mui/icons-material';
import { FC, useState } from 'react';
import { DeleteProjectDialog } from './dialogs/DeleteProjectDialog';
import { ProjectRo } from 'src/app/services/api.generated';
import { useRouter } from 'next/router';
import { ProjectSettingsDialog } from './dialogs/ProjectSettingsDialog';

export const ManageProjectCard: FC<{ project?: ProjectRo }> = ({ project }) => {
  const { push } = useRouter();
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [openSettingsDialog, setOpenSettingsDialog] = useState(false);

  return (
    <Paper elevation={2}>
      <ButtonGroup variant="text" fullWidth color="secondary">
        <Button onClick={() => setOpenDeleteDialog(true)}>
          <Delete />
        </Button>
        <Button
          onClick={() => project?.id && push('/project/edit/' + project.id)}
        >
          <Edit />
        </Button>
        <Button onClick={() => setOpenSettingsDialog(true)}>
          <Settings />
        </Button>
      </ButtonGroup>
      {project && (
        <>
          <DeleteProjectDialog
            open={openDeleteDialog}
            handleClose={() => setOpenDeleteDialog(false)}
            projectId={project.id}
          />
          <ProjectSettingsDialog
            open={openSettingsDialog}
            handleClose={() => setOpenSettingsDialog(false)}
            project={project}
          />
        </>
      )}
    </Paper>
  );
};
