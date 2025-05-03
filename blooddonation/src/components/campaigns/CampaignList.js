import React from 'react';
import { List, ListItem, ListItemText, Divider, Chip, Box } from '@mui/material';
import { format } from 'date-fns';

const CampaignList = ({ campaigns }) => {
  return (
    <List>
      {campaigns.map((campaign, index) => (
        <React.Fragment key={campaign.id}>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary={campaign.title}
              secondary={
                <>
                  <Box component="span" display="block">
                    {format(new Date(campaign.date), 'PPP')}
                  </Box>
                  <Box component="span" display="block">
                    {campaign.location}
                  </Box>
                  {campaign.description}
                </>
              }
            />
            <Chip
              label={campaign.status}
              color={campaign.status === 'Upcoming' ? 'primary' : 'default'}
            />
          </ListItem>
          {index < campaigns.length - 1 && <Divider component="li" />}
        </React.Fragment>
      ))}
    </List>
  );
};

export default CampaignList;