import { makeStyles, Paper } from '@material-ui/core';
import { FC } from 'react';
import { ResponsiveCirclePackingCanvas } from '@nivo/circle-packing';
import { fakeData } from 'constants/fakeData';
import 'react-image-gallery/styles/css/image-gallery.css';
import 'assets/styles/gallery.css';

type ProjectFoundsProps = {};

const useStyles = makeStyles((theme) => ({}));

const ProjectFounds: FC<ProjectFoundsProps> = () => {
  const classes = useStyles();

  return (
    <Paper style={{ height: 300 }}>
      <ResponsiveCirclePackingCanvas
        data={fakeData}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        id="name"
        colors={{ scheme: 'spectral' }}
        colorBy="id"
        childColor={{ from: 'color', modifiers: [['brighter', 0.4]] }}
        padding={1}
        leavesOnly={true}
        enableLabels={true}
        label="value"
        labelTextColor={{ from: 'color', modifiers: [['darker', 2.4]] }}
        borderColor={{ from: 'color', modifiers: [['darker', 0.3]] }}
        animate={false}
        valueFormat={(v) => `${v} میلیون تومان`}
      />
    </Paper>
  );
};

export default ProjectFounds;
