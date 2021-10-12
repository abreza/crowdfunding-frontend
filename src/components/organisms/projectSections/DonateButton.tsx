import { Button } from '@mui/material';
import { FC, useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootStateType } from 'src/app/store';
import { HomepageContext } from 'src/contexts/HomepageContext';
import { ProjectContext } from 'src/contexts/ProjectContext';
import { DonateDialog } from './DonateDialog';

export const DonateButton: FC = () => {
  const { state } = useContext(ProjectContext);
  const token = useSelector<RootStateType, string>((state) => state.auth.token);

  const [openDonate, setOpenDonate] = useState(false);
  const { openAuthDialog } = useContext(HomepageContext);

  return (
    <>
      <Button
        fullWidth
        variant="contained"
        color="primary"
        sx={{ my: 2 }}
        disabled={state !== 'FINANCING'}
        onClick={() => (token ? setOpenDonate(true) : openAuthDialog())}
      >
        سرمایه‌گذاری
      </Button>
      <DonateDialog
        open={openDonate}
        handleClose={() => setOpenDonate(false)}
      />
    </>
  );
};
