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

const theme = createTheme();
const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export function Profile() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  console.log(auth.user);
  const InitialState = {
    user: auth.user?.user,
    name: auth.user?.name,
    password: auth.user?.password,
    age: auth.user?.age,
    peso: auth.user?.peso,
    altura: auth.user?.altura,
    imc: auth.user?.imc,
    idPerson: auth.user?.id_person,
    image: auth.user?.image as string,
  };
  const [state, setState] = useState(InitialState);

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    const { value, name } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    //const isUpdate = await auth.signin(state.user, state.password);
    /* if (isUpdate) {
      navigate("/home");
    } else {
      setOpen(true);
    } */
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
          <Avatar
            sx={{ width: 175, height: 175 }}
            alt="Usuario..."
            src={state.image}
          />
          <Typography component="h1" variant="h4" sx={{ mt: 1 }}>
            Alterar Dados do Usuario
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
