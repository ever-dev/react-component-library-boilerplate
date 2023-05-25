import React, { PropsWithChildren, memo } from 'react';

import { Clear } from '@mui/icons-material';
import { Drawer, DrawerProps, IconButton, LinearProgress, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledDrawer = styled(Drawer)(() => ({
  '& .MuiDrawer-paper': {
    width: '500px',
  },
}));

const StyledHeader = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.brand.main,
  height: '64px',
  flex: '0 0 64px',
  display: 'flex',
  alignItems: 'center',
  padding: '0 10px 0 30px',
  '&:before': {
    content: '""',
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
    width: '10px',
    backgroundColor: theme.palette.secondary.main,
  },
  '& .MuiTypography-root': {
    flex: '1 1 100%',
    color: theme.palette.common.white,
    fontSize: '1rem',
  },
  '& .MuiIconButton-root': {
    flex: '0 0 auto',
    color: theme.palette.common.white,
  },
}));

const StyledContent = styled('div')(() => ({
  position: 'relative',
  padding: '8px 20px 16px 20px',
}));

const StyledFooter = styled('div')(() => ({
  width: '100%',
  display: 'inline-block',
  padding: '0 20px 16px 20px',
  '& > *': {
    marginRight: '16px',
    '&:last-child': {
      marginRight: '0',
    },
  },
}));

const StyledLoader = styled(LinearProgress)(() => ({
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
}));

interface PrimaryDrawerProps {
  id?: string;
  anchor?: DrawerProps['anchor'];
  header: string;
  isOpen: boolean;
  onClose: () => void;
}

export const PrimaryDrawer = memo(
  ({ anchor = 'right', children, header, id, isOpen, onClose }: PropsWithChildren<PrimaryDrawerProps>) => (
    <StyledDrawer anchor={anchor} id={id} open={isOpen} onClose={onClose}>
      <StyledHeader>
        <Typography component="h1" variant="body1">
          {header}
        </Typography>
        <IconButton aria-label="close drawer" color="primary" id={`${id}_close`} size="large" onClick={onClose}>
          <Clear />
        </IconButton>
      </StyledHeader>
      {children}
    </StyledDrawer>
  ),
);

export const PrimaryDrawerContent = ({ children }: PropsWithChildren<unknown>) => (
  <StyledContent>{children}</StyledContent>
);

export const PrimaryDrawerFooter = ({ children }: PropsWithChildren<unknown>) => (
  <StyledFooter>{children}</StyledFooter>
);

export const PrimaryDrawerLoader = memo(() => <StyledLoader />);
