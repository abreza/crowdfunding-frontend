import { Grid, Typography, makeStyles, createStyles } from '@material-ui/core';
import { FC, createElement, useEffect, useCallback, useState } from 'react';
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
import { ProjectDto } from 'types/project';
import axios from 'axios';
import { baseUrl } from 'app/services/baseQuery';

const useStyles = makeStyles((theme) =>
  createStyles({
    previewChip: {
      minWidth: 160,
      maxWidth: 210,
    },
  })
);

const Gallery: FC<{ handleChange: any; project: ProjectDto }> = ({
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
    const res = await axios.post(baseUrl + 'media/image/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    // @ts-ignore
    return res.data.path;
  };

  const updateLinks = () => {
    const imageUrls: string[] = [];
    loadedFiles.forEach((file) => {
      // @ts-ignore
      const url = uploadedFiles[file.path];
      if (url) {
        imageUrls.push(url);
      }
    });
    handleChange({ target: { name: 'imageUrls', value: imageUrls } });
  };

  const onChange = useCallback(async () => {
    for (let i = 0; i < loadedFiles.length; i++) {
      const file = loadedFiles[i];
      // @ts-ignore
      const path = file.path;
      if (!uploadedFiles[path]) {
        const url = await upload(file);
        alert(path);
        alert(url);
        setUploadedFiles({ ...uploadedFiles, [path]: url });
      }
    }
  }, [loadedFiles]);

  useEffect(() => {
    alert(JSON.stringify(uploadedFiles));
    updateLinks();
  }, [uploadedFiles]);

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
