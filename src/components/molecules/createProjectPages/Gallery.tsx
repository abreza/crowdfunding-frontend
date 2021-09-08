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
import { baseUrl } from 'config';
import { LoadedFile } from 'pages/new';
import { toast } from 'react-toastify';

const useStyles = makeStyles((theme) =>
  createStyles({
    previewChip: {
      minWidth: 160,
      maxWidth: 210,
    },
  })
);

const Gallery: FC<{
  handleChange: any;
  project: ProjectDto;
  loadedFiles: LoadedFile[];
  setLoadedFiles: any;
}> = ({ handleChange, project, loadedFiles, setLoadedFiles }) => {
  const classes = useStyles();

  const [uploading, setUploading] = useState(false);

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

  const onChange = async (files: File[]) => {
    const lFiles: LoadedFile[] = [...loadedFiles];

    let haveChange = false;

    for (let i = 0; i < lFiles.length; i++) {
      if (!files.find((f) => f.name === lFiles[i].name)) {
        lFiles.splice(i, 1);
        haveChange = true;
      }
    }

    for (let i = 0; i < files.length; i++) {
      if (!lFiles.find((f) => f.name === files[i].name)) {
        lFiles.push({
          file: files[i],
          name: files[i].name,
          url: undefined,
        });
        haveChange = true;
        toast.success('در حال ارسال فایل!');
      }
    }

    if (haveChange) {
      setUploading(true);
      setLoadedFiles(lFiles);
    }
  };

  const onChangeLoadedFiles = useCallback(async () => {
    const lFiles: LoadedFile[] = [...loadedFiles];
    let haveChange = false;

    for (let i = 0; i < lFiles.length; i++) {
      if (!lFiles[i].url) {
        lFiles[i].url = baseUrl + (await upload(lFiles[i].file));
        haveChange = true;
      }
    }
    if (haveChange) {
      setUploading(false);
      toast.success('ارسال با موفقیت انجام شد!');
      setLoadedFiles(lFiles);
    }
  }, [loadedFiles]);

  useEffect(() => {
    onChangeLoadedFiles();
  }, [onChangeLoadedFiles]);

  return (
    <Grid container spacing={3} direction="column">
      <Grid item>
        <Typography variant="h2">عکس‌ها و فیلم‌ها</Typography>
      </Grid>
      <Grid item>
        <DropzoneArea
          showAlerts={false}
          initialFiles={loadedFiles.map((f: any) => f.file)}
          maxFileSize={50000000}
          dropzoneText={'عکس‌ها و یا فیلم‌های خود را بارگذاری کنید.'}
          acceptedFiles={['image/*', 'video/*']}
          onChange={onChange}
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
