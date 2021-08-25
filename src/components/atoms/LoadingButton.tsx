import { Button, CircularProgress } from '@material-ui/core';
import React, { FC } from 'react';

export const LoadingButton: FC<any> = (props) => {
  const { loading, children } = props;
  return (
    <Button disabled={loading} {...props}>
      {loading && <CircularProgress size={14} />}
      {!loading && children}
    </Button>
  );
};
