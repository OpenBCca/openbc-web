'use client';

import { Box, Button, TextField, MenuItem } from '@mui/material';
import React from 'react';

function JoinUsForm() {
  // Function to prevent form submission on Enter key press
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          maxWidth: 400,
          mt: 2,
        }}
      >
        <TextField
          label="Full Name"
          sx={{ width: '150%', mb: 2 }}
          autoComplete="none"
          required
        />
        <TextField
          label="Email"
          sx={{ width: '150%', mb: 2 }}
          autoComplete="none"
          required
        />
        <TextField
          label="Discord Account"
          sx={{ width: '150%', mb: 2 }}
          autoComplete="none"
          required
        />
        <TextField
          label="GitHub Account"
          sx={{ width: '150%', mb: 2 }}
          autoComplete="none"
          required
        />
        <TextField
          label="Preferred Role"
          select
          sx={{ width: '150%', minWidth: 200, mb: 2 }}
          autoComplete="none"
          required
        >
          <MenuItem value="FE">Frontend</MenuItem>
          <MenuItem value="BE">Backend</MenuItem>
          <MenuItem value="FS">Full Stack</MenuItem>
        </TextField>
        <TextField
          label="Message"
          // minimum width for the multiline input
          sx={{ width: '150%', minWidth: 200, mb: 2 }}
          multiline
          rows={5}
          maxRows={5}
          autoComplete="none"
          required
        />
      </Box>
      <Button type="submit">Submit</Button>
    </form>
  );
}

export default JoinUsForm;
