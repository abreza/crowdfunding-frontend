import { Grid, Typography } from '@mui/material';
import { FC, createElement, useEffect, useCallback, useState } from 'react';

import {
  AttachFile,
  Audiotrack,
  Description,
  PictureAsPdf,
  Theaters,
} from '@mui/icons-material';
import { ProjectDto } from 'types/project';
import axios from 'axios';
import { baseUrl } from 'config';
import { LoadedFile } from 'pages/new';
import { toast } from 'react-toastify';

const Gallery: FC<{
  handleChange: any;
  project: ProjectDto;
  loadedFiles: LoadedFile[];
  setLoadedFiles: any;
}> = ({ handleChange, project, loadedFiles, setLoadedFiles }) => {
  const [uploading, setUploading] = useState(false);

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
      <Grid item></Grid>
    </Grid>
  );
};

export default Gallery;
