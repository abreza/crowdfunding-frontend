import { Container, Paper, Stack, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { upload } from 'app/services/uploadFile';
import { RootStateType } from 'app/store';
import { LoadingButton } from 'components/atoms/LoadingButton';
import { MyDropzone } from 'components/molecules/dropzone/MyDropzone';
import TinyEditor from 'components/molecules/tinyEditor/reactTiny/TinyEditorComponent';
import { ExtendedFile } from 'pages/new';
import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import Panel from 'templates/Panel';

type CreatePostProps = {};

const CreatePost: FC<CreatePostProps> = () => {
  const [titleImage, setTitleImage] = useState<ExtendedFile | undefined>();
  const [content, setContent] = useState('');
  const token = useSelector<RootStateType, string>((state) => state.auth.token);

  return (
    <Panel>
      <Container sx={{ py: 2 }} maxWidth="md">
        <Paper sx={{ p: 2 }}>
          <Stack spacing={2}>
            <Typography variant="h2" align="center">
              ایجاد پست جدید
            </Typography>
            <Box>
              <Typography variant="h6">موضوع</Typography>
              <TextField fullWidth label="سرتیتر پست" size="small" />
            </Box>
            <Box>
              <Typography variant="h6">متن پست</Typography>
              <TinyEditor content={content} onChange={(a) => setContent(a)} />
            </Box>
            <Box>
              <Typography variant="h6">عکس سرتیتر</Typography>
              <MyDropzone
                multiple={false}
                files={titleImage ? [titleImage] : []}
                onDrop={(acceptedFiles: File[]) => {
                  if (!acceptedFiles.length) return;
                  setTitleImage({ file: acceptedFiles[0], id: Math.random() });
                  upload(acceptedFiles[0], token, (progressEvent) => {
                    setTitleImage((titleImage) => ({
                      ...(titleImage as ExtendedFile),
                      progress:
                        (progressEvent.loaded * 100) / progressEvent.total,
                    }));
                  }).then((url) =>
                    setTitleImage((titleImage) => ({
                      ...(titleImage as ExtendedFile),
                      url,
                    }))
                  );
                }}
                removeFile={() => setTitleImage(undefined)}
              />
            </Box>
            <LoadingButton loading={false} fullWidth variant="contained">
              ثبت
            </LoadingButton>
          </Stack>
        </Paper>
      </Container>
    </Panel>
  );
};

export default CreatePost;