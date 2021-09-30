import { Search as SearchIcon } from '@mui/icons-material';
import { InputBase } from '@mui/material';
import { alpha, Box } from '@mui/system';
import { FC } from 'react';

const NavbarSearch: FC = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        borderRadius: 1,
        backgroundColor: (theme) => alpha(theme.palette.common.black, 0.15),
        '&:hover': {
          backgroundColor: (theme) => alpha(theme.palette.common.black, 0.25),
        },
        marginRight: 2,
        marginLeft: { sm: 0, md: 3 },
        transition: '0.3s',
      }}>
      <Box
        sx={{
          width: 56,
          height: '100%',
          position: 'absolute',
          pointerEvents: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <SearchIcon />
      </Box>
      <InputBase
        placeholder="جستجو..."
        sx={{
          color: 'inherit',
          pl: 5,
          transition: (theme) => theme.transitions.create('width'),
          width: { sm: 120, md: 200 },
          '&:focus': {
            width: { sm: 170, md: 220 },
          },
        }}
        inputProps={{
          'aria-label': 'search',
          form: {
            autocomplete: 'off',
          },
        }}
      />
    </Box>
  );
};

export default NavbarSearch;
