import { Box, Button, Container, Typography } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import React from 'react'
import { Cards } from './Cards';

export const Main: React.FC = () => {
  return (
    <Container sx={{ py: 5 }} maxWidth="xl">
      <Typography mb={7} textAlign='center' variant='h1'>Portfolio</Typography>
      <Box mb={5} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button color='secondary' variant='contained' target='_blank' href='https://github.com/BATIA007' size="large" endIcon={<GitHubIcon />}>Github</Button>
      </Box>
      <Typography mb={5} textAlign='center' variant='h3' component='h2'>Contact</Typography>
      <Box mb={5} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button variant='contained' target='_blank' href='https://t.me/dimitriy_senkevich' size="large" endIcon={<EmailIcon />}>Telegram</Button>
      </Box>
      <Typography textAlign='center' variant='h6' component='p' mb={10}>Sorry, I'm not designer, so portfolio looks terrible</Typography>
      <Cards />
    </Container >
  )
}
