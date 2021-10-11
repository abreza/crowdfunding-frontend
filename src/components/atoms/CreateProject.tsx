import { Button, ButtonProps } from '@mui/material';
import { RootStateType } from 'src/app/store';
import { HomepageContext } from 'src/contexts/HomepageContext';
import Link from 'next/link';
import React, { FC, useContext } from 'react';
import { useSelector } from 'react-redux';

const CreateProjectButton: FC<ButtonProps> = (props) => {
  const token = useSelector<RootStateType, string>((state) => state.auth.token);
  const { openAuthDialog } = useContext(HomepageContext);

  return token ? (
    <Link href="/project/new" passHref>
      <Button variant="contained" color="primary" {...props}>
        ایجاد پروژه جدید
      </Button>
    </Link>
  ) : (
    <Button
      onClick={() => openAuthDialog({ afterAuth: '/project/new' })}
      variant="contained"
      color="primary"
      {...props}
    >
      ایجاد پروژه جدید
    </Button>
  );
};

export default CreateProjectButton;
