import { Container, Paper, Stack, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { LoadingButton } from 'components/atoms/LoadingButton';
import TinyEditor from 'components/molecules/tinyEditor/reactTiny/TinyEditorComponent';
import { FC, useState } from 'react';
import Panel from 'templates/Panel';

type CreatePostProps = {};

const CreatePost: FC<CreatePostProps> = () => {
  const [content, setContent] = useState('');

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
            </Box>
            <TinyEditor content={content} onChange={(a) => setContent(a)} />
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
