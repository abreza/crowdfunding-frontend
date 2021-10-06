import { FC } from 'react';
import { useDropzone } from 'react-dropzone';
import { Box } from '@mui/system';
import { ExtendedFile } from 'pages/new';
import { PreviewFile } from 'components/atoms/PreviewFile';

type FileDropzoneProps = {
  accept?: string;
  onDrop?: any;
  removeFile?: any;
  files?: ExtendedFile[];
  multiple?: boolean;
  placeholder?: string;
};

export const MyDropzone: FC<FileDropzoneProps> = ({
  accept = 'image/*, video/*',
  onDrop,
  removeFile,
  multiple = true,
  files = [],
  placeholder,
}) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept,
    onDrop,
  });

  return (
    <>
      {(multiple || !files.length) && (
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
            backgroundColor: 'background.secondary',
            color: '#bdbdbd',
            outline: 'none',
            transition: 'border .24s ease-in-out',
          }}>
          <input {...getInputProps()} />
          <p>{placeholder}</p>
        </Box>
      )}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          mt: 2,
        }}>
        {files.map((extendedFile: ExtendedFile) => (
          <PreviewFile
            extendedFile={extendedFile}
            key={extendedFile.id}
            removeFile={removeFile}
          />
        ))}
      </Box>
    </>
  );
};
