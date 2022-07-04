import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Container,
  CssBaseline,
  Box,
  Avatar,
  Typography,
  TextField,
  Button,
  Snackbar,
  Grid,
} from "@mui/material";
import {
  ChangeEvent,
  createRef,
  FormEvent,
  forwardRef,
  useContext,
  useState,
} from "react";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { AuthContext } from "../../contexts/auth/AuthContext";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import ScaleIcon from "@mui/icons-material/Scale";

const theme = createTheme();
const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export function Profile() {
  const [open, setOpen] = useState(false);
  const InitialState = { user: "", password: "" };
  const [state, setState] = useState(InitialState);
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    const { value, name } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const isLogged = await auth.signin(state.user, state.password);
    if (isLogged) {
      navigate("/home");
    } else {
      setOpen(true);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <ScaleIcon />
          </Avatar>
          <Typography component="h1" variant="h4" sx={{ mt: 1 }}>
            BODY MASS INDEX
          </Typography>
          <Box component="form" onSubmit={onSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="user"
              label="Username"
              id="user"
              autoComplete="current-user"
              onChange={onChange}
              value={state.user}
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
              value={state.password}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Realizar Login
            </Button>
            <Snackbar
              open={open}
              autoHideDuration={6000}
              onClose={() => setOpen(false)}
            >
              <Alert
                onClose={() => setOpen(false)}
                severity="error"
                sx={{ width: "100%" }}
              >
                Acesso negado! Usuario ou senha invalido.
              </Alert>
            </Snackbar>
            <Grid container>
              <Grid item xs>
                <Button variant="outlined" size="small">
                  <Link to="/register" style={{ textDecoration: "none" }}>
                    Não está registrado?
                  </Link>
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
