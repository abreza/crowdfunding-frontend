import { Grid, Typography } from '@mui/material';
import { FC } from 'react';

import { ExtendedFile } from 'pages/new';
import { toast } from 'react-toastify';
import { baseUrl } from 'config';
import { RootStateType } from 'app/store';
import { useSelector } from 'react-redux';
import { MyDropzone } from 'components/molecules/dropzone/MyDropzone';
import { upload } from 'app/services/uploadFile';

const Gallery: FC<{
  files: ExtendedFile[];
  addFile: (uploadingFiles: ExtendedFile) => void;
  setUrl: (params: { id: number; url: string }) => void;
  setProgress: (params: { id: number; progress: number }) => void;
  removeFile: (id: number) => void;
}> = ({ files, addFile, setUrl, setProgress, removeFile }) => {
  const token = useSelector<RootStateType, string>((state) => state.auth.token);

  return (
    <Grid container spacing={3} direction="column">
      <Grid item>
        <Typography variant="h2">عکس‌ها و فیلم‌ها</Typography>
      </Grid>
      <Grid item>
        <MyDropzone
          onDrop={(acceptedFiles: File[]) => {
            acceptedFiles.forEach((file) => {
              const id = Math.random();
              addFile({ file, id });
              upload(file, token, (progressEvent) => {
                setProgress({
                  id,
                  progress: (progressEvent.loaded * 100) / progressEvent.total,
                });
              })
                .then((url) => setUrl({ id, url: baseUrl + url }))
                .catch(() => {
                  toast.error(
                    `در ارسال فایل ${file.name} مشکلی رخ‌داده است. لطفا دوباره تلاش کنید.`
                  );
                  removeFile(id);
                });
            });
          }}
          files={files}
          removeFile={removeFile}
        />
      </Grid>
    </Grid>
  );
};

export default Gallery;
