import {
  Grid,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
} from '@mui/material';
import { ProjectContext } from 'contexts/ProjectContext';
import { FC, useContext } from 'react';

type ProjectTechnicalProps = {};

const ProjectTechnical: FC<ProjectTechnicalProps> = () => {
  const { technicalDescriptions = [] } = useContext(ProjectContext);

  return (
    <Grid container alignItems="center" justifyContent="center">
      <Grid item xs={12} sm={7}>
        <TableContainer component={Paper}>
          <Table>
            <TableBody>
              {technicalDescriptions.map((item) => (
                <TableRow
                  key={item.name}
                  sx={{
                    '&:nth-of-type(odd)': {
                      backgroundColor: 'action.hover',
                    },
                  }}>
                  <TableCell align="center">{item.name}</TableCell>
                  <TableCell align="center">{item.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default ProjectTechnical;
