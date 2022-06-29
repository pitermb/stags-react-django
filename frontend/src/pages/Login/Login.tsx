import {
  FormEvent,
  useState,
  createRef,
  forwardRef,
  ChangeEvent,
  useContext,
} from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { AuthContext } from "../../contexts/auth/AuthContext";

const theme = createTheme();

const ref = createRef();
const Alert = forwardRef<unknown, AlertProps>((props: AlertProps, ref: any) => {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export function Login() {
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
            Body Mass Index
          </Typography>
          <Box component="form" onSubmit={onSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="user"
              label="User"
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
            <Snackbar open={open} autoHideDuration={6000}>
              <Alert
                onClose={() => setOpen(false)}
                severity="error"
                sx={{ width: "100%" }}
                ref={ref}
              >
                Acesso negado! Usuario ou senha invalido.
              </Alert>
            </Snackbar>
            <Grid container>
              <Grid item xs>
                <Link to="/register">Não está registrado? Clique aqui!</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
