import { Button } from '@mui/material';
import { RootStateType } from 'app/store';
import { HomepageContext } from 'contexts/HomepageContext';
import Link from 'next/link';
import React, { FC, useContext } from 'react';
import { useSelector } from 'react-redux';

const CreateProjectButton: FC = () => {
  const token = useSelector<RootStateType, string>((state) => state.auth.token);
  const { openAuthDialog } = useContext(HomepageContext);

  return token ? (
    <Link href="/new" passHref>
      <Button variant="contained" color="primary">
        ایجاد پروژه جدید
      </Button>
    </Link>
  ) : (
    <Button
      onClick={() => openAuthDialog({ after: '/new' })}
      variant="contained"
      color="primary">
      ایجاد پروژه جدید
    </Button>
  );
};

export default CreateProjectButton;
