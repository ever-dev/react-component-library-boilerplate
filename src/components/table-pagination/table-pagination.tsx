import React from 'react';

import {
  Box,
  InputLabel,
  MenuItem,
  Pagination,
  PaginationProps,
  TablePaginationProps as MuiTablePaginationProps,
  TextField,
  Typography,
} from '@mui/material';

export interface TablePaginationProps extends Omit<PaginationProps, 'onChange'> {
  rowsPerPage: MuiTablePaginationProps['rowsPerPage'];
  rowsPerPageOptions?: MuiTablePaginationProps['rowsPerPageOptions'];
  onRowsPerPageChange: MuiTablePaginationProps['onRowsPerPageChange'];
  onPageChange: PaginationProps['onChange'];
}

export const TablePagination = ({
  onRowsPerPageChange,
  onPageChange,
  rowsPerPage,
  rowsPerPageOptions = [10, 25, 50, 100],
  ...props
}: TablePaginationProps) => (
  <Box sx={{ alignItems: 'center', display: 'inline-flex', justifyContent: 'center' }}>
    <Pagination onChange={onPageChange} {...props} />
    <Box sx={{ alignItems: 'center', display: 'inline-flex', justifyContent: 'center' }}>
      <InputLabel size="small" sx={{ ml: 2, mr: 1, transform: 'none' }}>
        <Typography sx={{ fontSize: 14 }}>Rows Per Page:</Typography>
      </InputLabel>
      <TextField
        select
        id="outlined-select-currency"
        size="small"
        value={rowsPerPage}
        variant="standard"
        onChange={onRowsPerPageChange}
      >
        {rowsPerPageOptions?.map((option) => (
          <MenuItem
            key={typeof option === 'number' ? option : option.value}
            value={typeof option === 'number' ? option : option.value}
          >
            {typeof option === 'number' ? option : option.label}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  </Box>
);
