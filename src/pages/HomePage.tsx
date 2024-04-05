import { useCallback, useEffect, useState } from 'react';

import AppAppBar from './../components/AppAppBar';
import Hero from './../components/Hero';
import LogoCollection from './../components/LogoCollection';
import Highlights from './../components/Highlights';
import Features from './../components/Features';
import Footer from './../components/Footer';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { PaletteMode } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useAppDispatch, useAppSelector } from '../utils/redux/store';
import { clearMethod } from '../utils/redux/userSlice';

const defaultTheme = createTheme({});

export default function HomePage() {
  const [mode, setMode] = useState<PaletteMode>('dark');
  const { user, method } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const toggleColorMode = useCallback(() => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  useEffect(() => {
    if (!user && method) {
      dispatch(clearMethod());
    }
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Hero />
      <Box sx={{ bgcolor: 'background.default' }}>
        <LogoCollection />
        <Features />
        <Divider />
        <Highlights />
        <Divider />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
