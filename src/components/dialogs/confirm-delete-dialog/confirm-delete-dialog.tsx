import React, { memo } from 'react';

import { Delete as DeleteIcon } from '@mui/icons-material';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogTitle-root': {
    backgroundColor: theme.palette.brand.main,
    color: theme.palette.common.white,
    position: 'relative',
    '&:before': {
      content: '""',
      position: 'absolute',
      left: 0,
      top: 0,
      height: '64px',
      width: '10px',
      backgroundColor: theme.palette.secondary.main,
    },
  },
  '& .MuiDialogContent-root': {
    padding: '24px !important',
  },
  '& .MuiDialogActions-root': {
    padding: '0 0 16px 0',
    '& .MuiButton-root': {
      margin: '0 16px 0 0',
    },
  },
}));

interface ConfirmDeleteDialogProps {
  id: string;
  title: string;
  isOpen: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

export const ConfirmDeleteDialog = memo(({ id, isOpen, onCancel, onConfirm, title }: ConfirmDeleteDialogProps) => (
  <StyledDialog
    disableEscapeKeyDown
    fullWidth
    aria-labelledby={`${id}_confirm_title`}
    id={id}
    maxWidth="sm"
    open={isOpen}
  >
    <DialogTitle id={`${id}_confirm_title`}>{title}</DialogTitle>
    <DialogContent id={`${id}_confirm_content`}>
      <Typography component="h3" variant="body1">
        Please be aware that this action cannot be undone.
      </Typography>
    </DialogContent>
    <DialogActions>
      <Button color="primary" id={`${id}_cancel_btn`} variant="outlined" onClick={onCancel}>
        Cancel
      </Button>
      <Button color="primary" id={`${id}_confirm_btn`} startIcon={<DeleteIcon />} onClick={onConfirm}>
        Confirm
      </Button>
    </DialogActions>
  </StyledDialog>
));

export default ConfirmDeleteDialog;
