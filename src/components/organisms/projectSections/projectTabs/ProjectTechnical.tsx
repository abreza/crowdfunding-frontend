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
import { FC } from 'react';

type ProjectTechnicalProps = {};

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const ProjectTechnical: FC<ProjectTechnicalProps> = () => {
  return (
    <Grid container alignItems="center" justify="center">
      <Grid item xs={12} sm={7}>
        <TableContainer component={Paper}>
          <Table>
            <TableBody>
              <StyledTableRow>
                <TableCell align="center">سرعت</TableCell>
                <TableCell align="center">۲ متر بر ثانیه</TableCell>
              </StyledTableRow>
              <StyledTableRow>
                <TableCell align="center">قدرت</TableCell>
                <TableCell align="center">۱۰ اسب بخار</TableCell>
              </StyledTableRow>
              <StyledTableRow>
                <TableCell align="center">دقت</TableCell>
                <TableCell align="center">۵ نانومتر</TableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default ProjectTechnical;
