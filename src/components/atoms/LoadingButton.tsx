import { Button, ButtonProps, CircularProgress } from '@mui/material';
import React, { FC } from 'react';

export const LoadingButton: FC<
  {
    loading: boolean;
  } & ButtonProps
> = ({ loading, children, ...buttonProps }) => {
  return (
    <Button disabled={loading} {...buttonProps}>
      {loading && <CircularProgress size={14} />}
      {!loading && children}
    </Button>
  );
};
