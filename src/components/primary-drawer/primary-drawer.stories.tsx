import React from 'react';

import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { Box, Button, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { ComponentMeta } from '@storybook/react';

import { PrimaryDrawer } from './primary-drawer';

export default {
  component: PrimaryDrawer,
  title: 'Components/Drawer/PrimaryDrawer',
} as ComponentMeta<typeof PrimaryDrawer>;

export const Default = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const list = () => (
    <Box role="presentation">
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={() => setIsDrawerOpen(true)}>Open Drawer</Button>
      <PrimaryDrawer header="Drawer" isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        {list()}
      </PrimaryDrawer>
    </div>
  );
};
