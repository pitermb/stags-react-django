import {
  FormEvent,
  useState,
  forwardRef,
  ChangeEvent,
  useContext,
} from "react";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import ScaleIcon from "@mui/icons-material/Scale";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/auth/AuthContext";
import { UserRegister } from "../../types/UserRegister";
import { Header } from "../../components/Header/Header";

const theme = createTheme();

export function Home() {
  const auth = useContext(AuthContext);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          OIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOoioioioi
        </Box>
      </Container>
    </ThemeProvider>
  );
}
