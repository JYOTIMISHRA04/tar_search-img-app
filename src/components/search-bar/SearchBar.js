import { Card, CardContent, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const SearchBar = (props) => {
  return (
    <Card>
      <CardContent
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: 500,
            maxWidth: '100%',
          }}
        >
          <TextField
            type='search'
            id='outlined-basic'
            label='Image Search '
            variant='outlined'
            placeholder='Enter Search Query'
            fullWidth
            InputLabelProps={{
              shrink: true
            }}
            value={props.query}
            onChange={
              (e) => {
                props.setQuery(e.target.value)
              }
            }
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default SearchBar;
