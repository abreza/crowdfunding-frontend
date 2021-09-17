import {
  Grid,
  Typography,
  CircularProgress,
  CircularProgressProps,
} from '@mui/material';
import { FC } from 'react';

import { MyFile } from 'pages/new';
import { useDropzone } from 'react-dropzone';
import { Box } from '@mui/system';
import { toast } from 'react-toastify';
import axios from 'axios';
import { baseUrl } from 'config';
import IconButton from '@mui/material/IconButton';
import { Cancel as CancelIcon } from '@mui/icons-material';

function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number }
) {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        mt: '-12px',
        ml: '-12px',
      }}>
      <CircularProgress
        variant="determinate"
        {...props}
        sx={{ borderRadius: '50%', background: '#ccccccaa' }}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          width: '100%',
          height: '100%',
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Typography variant="caption" color="primary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

const Gallery: FC<{
  files: MyFile[];
  addFile: (uploadingFiles: MyFile) => void;
  setUrl: (params: { id: number; url: string }) => void;
  setProgress: (params: { id: number; progress: number }) => void;
  removeFile: (id: number) => void;
}> = ({ files, addFile, setUrl, setProgress, removeFile }) => {
  const upload = async (file: File, id: number): Promise<string> => {
    const formData = new FormData();
    formData.append('file', file);
    const res = await axios.post(baseUrl + 'media/image/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress: function (progressEvent) {
        setProgress({
          id,
          progress: (progressEvent.loaded * 100) / progressEvent.total,
        });
      },
    });
    // @ts-ignore
    return res.data.path;
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*, video/*',
    onDrop: (acceptedFiles: File[]) => {
      acceptedFiles.forEach((file) => {
        const id = Math.random();
        addFile({ file, id });
        upload(file, id)
          .then((url) => setUrl({ id, url: baseUrl + url }))
          .catch(() => {
            toast.error(
              `در ارسال فایل ${file.name} مشکلی رخ‌داده است. لطفا دوباره تلاش کنید.`
            );
            removeFile(id);
          });
      });
    },
  });

  return (
    <Grid container spacing={3} direction="column">
      <Grid item>
        <Typography variant="h2">عکس‌ها و فیلم‌ها</Typography>
      </Grid>
      <Grid item>
        <Box
          {...getRootProps()}
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 3,
            borderWidth: 2,
            borderRadius: 2,
            borderColor: '#eeeeee',
            borderStyle: 'dashed',
            backgroundColor: '#fafafa',
            color: '#bdbdbd',
            outline: 'none',
            transition: 'border .24s ease-in-out',
          }}>
          <input {...getInputProps()} />
          <p>عکس‌ها و فیلم‌های مورد نظر خود را ارسال کنید.</p>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            mt: 2,
          }}>
          {files.map((file) => (
            <Box key={file.id} sx={{ width: 150, mx: 1 }}>
              <Box
                sx={{
                  display: 'inline-flex',
                  borderRadius: 2,
                  border: '1px solid #eaeaea',
                  maxWidth: '100%',
                  height: 140,
                  p: 0.5,
                  boxSizing: 'border-box',
                  position: 'relative',
                }}>
                <IconButton
                  onClick={() => removeFile(file.id)}
                  sx={{ position: 'absolute', top: -15, left: -15 }}
                  color="error">
                  <CancelIcon />
                </IconButton>
                <Box
                  sx={{
                    display: 'flex',
                    minWidth: 0,
                    overflow: 'hidden',
                  }}>
                  <img
                    src={URL.createObjectURL(file.file)}
                    style={{
                      display: 'block',
                      width: 'auto',
                      height: '100%',
                    }}
                    alt={file.file.name}
                  />
                  {!file.url && (
                    <CircularProgressWithLabel
                      value={file.progress ? file.progress : 0}
                      size={40}
                    />
                  )}
                </Box>
              </Box>
              <Typography variant="caption" align="center">
                {file.file.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Gallery;
