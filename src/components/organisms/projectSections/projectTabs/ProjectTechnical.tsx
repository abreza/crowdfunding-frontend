import {
  Grid,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
  Typography,
  Stack,
} from '@mui/material';
import { ProjectContext } from 'src/contexts/ProjectContext';
import { FC, useContext } from 'react';
import { TechnicalDescriptionDto } from 'src/app/services/api.generated';

const ProjectTechnical: FC = () => {
  const { technicalDescriptions = [] } = useContext(ProjectContext);

  return (
    <Stack spacing={2}>
      <Typography variant="h3">موارد فنی محصول</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            {technicalDescriptions.map((item: TechnicalDescriptionDto) => (
              <TableRow
                key={item.name}
                sx={{
                  '&:nth-of-type(odd)': {
                    backgroundColor: 'action.hover',
                  },
                }}
              >
                <TableCell align="center">{item.name}</TableCell>
                <TableCell align="center">{item.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default ProjectTechnical;
