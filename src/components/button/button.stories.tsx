import React from 'react';

import { Button } from '@mui/material';
import { ComponentMeta } from '@storybook/react';

export default {
  component: Button,
  title: 'Components/Buttons/Button',
} as ComponentMeta<typeof Button>;

export const Contained = () => <Button variant="contained">Contained</Button>;

export const TextNoHover = () => <Button variant="text">Text Does Not Show Hover</Button>;
