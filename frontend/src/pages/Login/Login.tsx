import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link as LinkHref,
  Grid,
  Box,
  Typography,
  Container,
  Snackbar,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const theme = createTheme();

type AlertInterface = {
  children: string;
  onClose: (event: any, reason: string) => void;
  severity: string;
  sx: { width: string };
}

const Alert = React.forwardRef(function Alert(props: any, ref: any) {
  return <MuiAlert elevation={6} key={ref} variant="filled" {...props} />;
});

export function Login() {
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState();
  const navigate = useNavigate();

  function onChange(e: { target: { value: any; name: any } }) {
    const { value, name } = e.target;
  }

  function onSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();

    return navigate("/");
    setOpen(true);
  }

  function handleClose(event: any, reason: string) {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 28,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h4">
            People's List
          </Typography>
          <Box component="form" onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="user"
              label="User"
              id="user"
              autoComplete="current-user"
              autoFocus
              onChange={onChange}
              value={values}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              id="password"
              autoComplete="current-password"
              type="password"
              onChange={onChange}
              value={values}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Realizar Login
            </Button>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity="error"
                sx={{ width: "100%" }}
              >
                Acesso negado! Usuario ou senha invalido.
              </Alert>
            </Snackbar>
            <Grid container>
              <Grid item xs>
                <LinkHref href="#" variant="body2">
                  Esqueceu a senha?
                </LinkHref>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
