import {
  AppBar,
  Container,
  Drawer,
  Grid,
  Hidden,
  IconButton,
  List,
  ListItem,
  Toolbar,
  useMediaQuery,
  useScrollTrigger,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { cloneElement, FC } from 'react';
import { useState } from 'react';
import HideOnScroll from 'components/atoms/hideOnScroll/HideOnScroll';

import modes from './modes';
import { Box, useTheme } from '@mui/system';

const ElevationScroll: FC<any> = ({ children, disable = false }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  if (disable) return <>{children}</>;

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

const ResponsiveAppBar: FC<any> = ({
  mode = 'LANDING',
  showBackOnScroll = false,
  disableHideOnScroll = true,
  disableElevationScroll = false,
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 30 });

  const {
    desktopLeftItems,
    desktopRightItems,
    mobileLeftItems,
    mobileRightItems,
    mobileMenuListItems,
  } = modes['LANDING']();

  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));

  const rightItems = isXs ? mobileRightItems : desktopRightItems;
  const leftItems = isXs ? mobileLeftItems : desktopLeftItems;

  return (
    <>
      <HideOnScroll disable={disableHideOnScroll}>
        <ElevationScroll disable={disableElevationScroll}>
          <AppBar
            id="appBar"
            sx={{
              zIndex: (theme) => theme.zIndex.drawer + 1,
              transition: '0.2s',
              ...(showBackOnScroll &&
                !trigger && {
                  background: 'transparent',
                  boxShadow: 'none',
                  pt: 4,
                }),
            }}
            color="inherit">
            <Container>
              <Toolbar disableGutters>
                {mobileMenuListItems.length > 0 && (
                  <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{
                      color: 'primary.main',
                      display: { sm: 'flex', md: 'none' },
                    }}
                    onClick={() => setDrawerOpen(!drawerOpen)}
                    size="large">
                    <MenuIcon />
                  </IconButton>
                )}
                <Grid
                  container
                  alignItems="center"
                  justifyContent="space-between">
                  <Grid item>
                    <Grid
                      spacing={1}
                      container
                      justifyContent="flex-start"
                      alignItems="center">
                      {rightItems.map((item, index) => (
                        <Grid key={index} item>
                          {item}
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid
                      spacing={1}
                      container
                      justifyContent="flex-end"
                      alignItems="center">
                      {leftItems.map((item, index) => (
                        <Grid key={index} item>
                          {item}
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
                </Grid>
              </Toolbar>
            </Container>
          </AppBar>
        </ElevationScroll>
      </HideOnScroll>
      {mobileMenuListItems.length > 0 && (
        <Hidden smUp>
          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}>
            <Box
              sx={{
                width: 250,
              }}>
              <List>
                {mobileMenuListItems.map((item, index) => (
                  <ListItem key={index}>{item}</ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
        </Hidden>
      )}
      <Toolbar />
    </>
  );
};

export default ResponsiveAppBar;
