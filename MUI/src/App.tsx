import {
  Button,
  FormControl,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { useState } from 'react'

export function App() {
  const [colorMode, setColorMode] = useState('normal')

  const appTheme = createTheme({
    palette: {
      mode: 'light',
      ...(colorMode === 'deuteranopia' && {
        primary: {
          main: '#5c7c5c',
        },
        secondary: {
          main: '#5c7c7c',
        },
        background: {
          default: '#808080',
          paper: '#9c9c64',
        },
        text: {
          primary: '#000000',
          secondary: '#333333',
        },
      }),
      ...(colorMode === 'protanopia' && {
        primary: {
          main: '#7c5c5c',
        },
        secondary: {
          main: '#7c5c7c',
        },
        background: {
          default: '#808080',
          paper: '#9c649c',
        },
        text: {
          primary: '#000000',
          secondary: '#333333',
        },
      }),
      ...(colorMode === 'tritanopia' && {
        primary: {
          main: '#5c5c7c',
        },
        secondary: {
          main: '#5c7c7c',
        },
        background: {
          default: '#808080',
          paper: '#649c9c',
        },
        text: {
          primary: '#000000',
          secondary: '#333333',
        },
      }),
      ...(colorMode === 'monochromacy' && {
        primary: {
          main: '#808080',
        },
        secondary: {
          main: '#9c9c9c',
        },
        background: {
          default: '#bcbcbc',
          paper: '#d0d0d0',
        },
        text: {
          primary: '#000000',
          secondary: '#333333',
        },
      }),
    },
  })

  return (
    <ThemeProvider theme={appTheme}>
      <Paper elevation={0} sx={{ height: '100vh' }} square>
        <Typography sx={{ color: (theme) => theme.palette.text.primary }}>
          Qual seu daltonismo?
        </Typography>
        <Select
          value={colorMode}
          onChange={(event) => setColorMode(event.target.value)}
        >
          <MenuItem value={'normal'}>Não possuo</MenuItem>
          <MenuItem value={'deuteranopia'}>Deuteranopia</MenuItem>
          <MenuItem value={'protanopia'}>Protanopia</MenuItem>
          <MenuItem value={'tritanopia'}>Tritanopia</MenuItem>
          <MenuItem value={'monochromacy'}>Monocromático</MenuItem>
        </Select>
        <FormControl
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Stack spacing={4} alignItems='center'>
            <Typography
              sx={{ color: (theme) => theme.palette.text.secondary }}
              variant='h4'
            >
              Qual o seu nome?
            </Typography>
            <TextField
              sx={{
                bgcolor: (theme) => theme.palette.background.paper,
                color: (theme) => theme.palette.text.primary,
                borderColor: (theme) => theme.palette.text.primary,
                width: '21rem',
              }}
              variant='outlined'
              type='text'
            />
            <Button
              sx={{
                bgcolor: (theme) => theme.palette.primary.main,
                color: (theme) => theme.palette.text.primary,
                width: '12.375rem',
                height: '3.5rem',
                border: '1px solid #000',
              }}
              variant='contained'
              color='secondary'
            >
              Entrar na sala
            </Button>
          </Stack>
        </FormControl>
      </Paper>
    </ThemeProvider>
  )
}
