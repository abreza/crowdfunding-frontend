import {
  Grid,
  ThemeProvider,
  Typography,
  makeStyles,
  createStyles,
} from '@material-ui/core';
import { FC, createElement, useState, useEffect, useCallback } from 'react';
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
import axios from 'axios';

const useStyles = makeStyles((theme) =>
  createStyles({
    previewChip: {
      minWidth: 160,
      maxWidth: 210,
    },
  })
);

const Gallery: FC<{ handleChange: any; project: CreateProjectRequest }> = ({
  handleChange,
  project,
}) => {
  const classes = useStyles();

  const [loadedFiles, setLoadedFiles] = useState<File[]>([]);
  const [uploadedFiles, setUploadedFiles] = useState<any>({});

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

  const upload = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    const res = await axios.post(
      'https://crowdfunding.mamalan.ir/api/v1/media/image/upload',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    // @ts-ignore
    return res.path;
  };

  const updateLinks = () => {
    const imageUrls: string[] = [];
    loadedFiles.forEach((file) => {
      // @ts-ignore
      const path = uploadedFiles[file.path];
      if (path) {
        imageUrls.push(path);
      }
    });
    handleChange({ name: 'imageUrls', value: imageUrls });
  };

  const onChange = useCallback(async () => {
    for (let i = 0; i < loadedFiles.length; i++) {
      const file = loadedFiles[i];
      // @ts-ignore
      const path = file.path;
      if (!uploadedFiles[path]) {
        setUploadedFiles({ ...uploadedFiles, [path]: await upload(file) });
        updateLinks();
      }
    }
  }, [loadedFiles]);

  useEffect(() => {
    onChange();
  }, [onChange]);

  return (
    <Grid container spacing={3} direction="column">
      <Grid item>
        <Typography variant="h2">عکس‌ها و فیلم‌ها</Typography>
      </Grid>
      <Grid item>
        <DropzoneArea
          maxFileSize={50000000}
          dropzoneText={'عکس‌ها و یا فیلم‌های خود را بارگذاری کنید.'}
          acceptedFiles={['image/*', 'video/*']}
          onChange={setLoadedFiles}
          getPreviewIcon={handlePreviewIcon}
          showPreviews={true}
          showPreviewsInDropzone={false}
          previewText="فایل‌های انتخاب شده:"
          previewGridProps={{ container: { spacing: 2, direction: 'row' } }}
          useChipsForPreview
          previewChipProps={{ classes: { root: classes.previewChip } }}
          filesLimit={10}
        />
      </Grid>
    </Grid>
  );
};

export default Gallery;
