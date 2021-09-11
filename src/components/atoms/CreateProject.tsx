import { Button } from '@material-ui/core';
import { RootState } from 'app/store';
import { HomepageContext } from 'context/HomepageContext';
import Link from 'next/link';
import React, { FC, useContext } from 'react';
import { useSelector } from 'react-redux';

const CreateProjectButton: FC = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  const { openAuthDialog } = useContext(HomepageContext);

  return token ? (
    <Link href="/new" passHref>
      <Button variant="contained" color="primary">
        ایجاد پروژه جدید
      </Button>
    </Link>
  ) : (
    <Button onClick={openAuthDialog} variant="contained" color="primary">
      ایجاد پروژه جدید
    </Button>
  );
};

export default CreateProjectButton;
