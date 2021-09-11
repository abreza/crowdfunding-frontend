import {
  Grid,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
  withStyles,
} from '@material-ui/core';
import { ProjectContext } from 'context/ProjectContext';
import { FC, useContext } from 'react';

type ProjectTechnicalProps = {};

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const ProjectTechnical: FC<ProjectTechnicalProps> = () => {
  const { technicalDescriptions } = useContext(ProjectContext);

  return (
    <Grid container alignItems="center" justifyContent="center">
      <Grid item xs={12} sm={7}>
        <TableContainer component={Paper}>
          <Table>
            <TableBody>
              {technicalDescriptions.map((item) => (
                <StyledTableRow key={item.name}>
                  <TableCell align="center">{item.name}</TableCell>
                  <TableCell align="center">{item.value}</TableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default ProjectTechnical;
