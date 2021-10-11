import { Box } from '@mui/system';
import { FC } from 'react';
import styles from 'src/assets/styles/loading.module.css';

const borderColor = {
  border: '10px solid rgba(0, 0, 0, 0)',
  borderBottom: (theme: any) => '10px solid ' + theme.palette.secondary.main,
  borderTop: (theme: any) => '10px solid ' + theme.palette.secondary.main,
};

export const Loading: FC<{ loading?: boolean }> = ({ loading = false }) => {
  return loading ? (
    <Box className={styles.overlay}>
      <Box
        className={styles.spinner}
        sx={{
          ...borderColor,
          '&:after': borderColor,
          '&:before': borderColor,
        }}
      ></Box>
      <Box
        className={styles.label}
        sx={{ color: (theme) => theme.palette.secondary.main }}
      >
        Loading
      </Box>
    </Box>
  ) : (
    <></>
  );
};
