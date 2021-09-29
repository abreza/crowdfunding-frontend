import { useState, useContext, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DarkModeOutlined from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlined from '@mui/icons-material/LightModeOutlined';
import { getCookie } from 'utils/getCookies';
import { DispatchContext } from 'contexts/DispatchContext';

const ThemeModeToggle = () => {
  const [mode, setMode] = useState<string>('dark');

  const changeTheme = useContext(DispatchContext);

  useEffect(() => {
    setMode(getCookie('paletteMode') || 'system');
  }, [setMode]);

  const handleChangeThemeMode = (mode: string) => {
    const paletteMode = mode === 'light' ? 'dark' : 'light';
    document.cookie = `paletteMode=${paletteMode};path=/;max-age=31536000`;
    setMode(paletteMode);
    changeTheme(paletteMode);
  };

  return (
    <Tooltip
      title={mode === 'dark' ? 'Turn on the light' : 'Turn off the light'}>
      <IconButton
        disableTouchRipple
        onClick={() => handleChangeThemeMode(mode)}
        sx={{
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.100' : 'primary.main',
          borderRadius: 1,
          p: '6.5px',
          border: '1px solid',
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? 'primaryDark.800' : 'transparent',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'primaryDark.500' : 'grey.200',
          '& svg': {
            fontSize: (theme) => theme.typography.pxToRem(18),
          },
        }}>
        {mode === 'dark' ? (
          <LightModeOutlined fontSize="small" />
        ) : (
          <DarkModeOutlined fontSize="small" />
        )}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeModeToggle;
