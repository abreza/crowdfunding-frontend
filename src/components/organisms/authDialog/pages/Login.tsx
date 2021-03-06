import {
  Grid,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import {
  AuthPageName,
  PageProps,
} from 'src/components/organisms/authDialog/AuthDialog';
import React, { FC, useState } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  LoginDto,
  useAuthControllerLoginMutation,
} from 'src/app/services/api.generated';

const Login: FC<PageProps> = ({ handleClose, changePage, afterAuth }) => {
  const { push } = useRouter();
  const [formState, setFormState] = useState<LoginDto>({
    username: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const [login, { isLoading }] = useAuthControllerLoginMutation();

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    setFormState((prev) => ({ ...prev, [name]: value }));

  const submitLogin = async () => {
    try {
      await login({ loginDto: formState }).unwrap();
      toast.success('خوش آمدید');
      if (afterAuth) {
        push(afterAuth);
      }
      handleClose();
    } catch (err: any) {
      toast.error(err?.data?.message?.toString() || err?.error?.toString());
    }
  };

  return (
    <>
      <Grid item>
        <TextField
          autoFocus
          size="small"
          label="نام‌کاربری"
          name="username"
          type="text"
          fullWidth
          InputProps={{ className: 'ltr-input' }}
          onChange={handleChange}
        />
      </Grid>
      <Grid item>
        <TextField
          size="small"
          label="گذرواژه"
          name="password"
          fullWidth
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            className: 'ltr-input',
            startAdornment: (
              <InputAdornment position="start">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          onChange={handleChange}
        />
      </Grid>
      <Grid item>
        <LoadingButton
          fullWidth
          variant="contained"
          color="primary"
          onClick={submitLogin}
          loading={isLoading}
        >
          ورود
        </LoadingButton>
      </Grid>
      <Grid container item direction="row">
        <Grid item sm={6} xs={12}>
          <Typography sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
            {'کاربر جدید؟ '}
            <Link href="#" onClick={() => changePage(AuthPageName.SIGN_UP)}>
              {'ثبت‌نام'}
            </Link>
          </Typography>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Typography sx={{ textAlign: { xs: 'center', sm: 'right' } }}>
            {'فراموشی '}
            <Link
              href="#"
              onClick={() => changePage(AuthPageName.FORGOT_PASSWORD)}
            >
              {'گذرواژه'}
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
