import { Grid, ThemeProvider, Typography } from '@material-ui/core';
import { FC, createElement } from 'react';
import {
  DropzoneArea,
  FileObject,
  PreviewIconProps,
} from 'material-ui-dropzone';

import {
  AttachFile,
  Audiotrack,
  Description,
  PictureAsPdf,
  Theaters,
} from '@material-ui/icons';
import MuiTheme from 'app/theme/MuiTheme';
import { CreateProjectRequest } from 'app/services/project';

const Gallery: FC<{ handleChange: any; project: CreateProjectRequest }> = ({
  handleChange,
  project,
}) => {
  const handlePreviewIcon = (
    fileObject: FileObject,
    classes: PreviewIconProps
  ) => {
    const { type } = fileObject.file;
    if (type.split('/')[0] === 'image') {
      return createElement('img', {
        // @ts-ignore
        className: classes.image,
        role: 'presentation',
        src: fileObject.data,
      });
    }

    const iconProps = {
      // @ts-ignore
      className: classes.image,
    };

    if (type.startsWith('video/')) return <Theaters {...iconProps} />;
    if (type.startsWith('audio/')) return <Audiotrack {...iconProps} />;

    switch (type) {
      case 'application/msword':
      case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
        return <Description {...iconProps} />;
      case 'application/pdf':
        return <PictureAsPdf {...iconProps} />;
      default:
        return <AttachFile {...iconProps} />;
    }
  };

  return (
    <Grid container spacing={3} direction="column">
      <Grid item>
        <Typography variant="h2">عکس‌ها و فیلم‌ها</Typography>
      </Grid>
      <Grid item>
        <ThemeProvider theme={MuiTheme}>
          <DropzoneArea
            maxFileSize={50000000}
            dropzoneText={'عکس‌ها و یا فیلم‌های خود را بارگذاری کنید.'}
            acceptedFiles={['image/*', 'video/*']}
            onChange={(files) => console.log(files)}
            getPreviewIcon={handlePreviewIcon}
            filesLimit={10}
          />
        </ThemeProvider>
      </Grid>
    </Grid>
  );
};

export default Gallery;
