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
            marginTop: 5,
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
          <Typography
            component="h1"
            variant="h4"
            sx={{ mt: 2, textAlign: "center" }}
          >
            Alterar Dados
          </Typography>
          <Box component="form" onSubmit={onSubmit} sx={{ mt: 1, mb: 2 }}>
            <TextField
              margin="normal"
              disabled
              fullWidth
              name="idPerson"
              label="ID do Usuario"
              id="idPerson"
              autoComplete="current-idPerson"
              type="idPerson"
              onChange={onChange}
              value={state.idPerson}
            />
            <TextField
              margin="normal"
              disabled
              fullWidth
              name="user"
              label="Username do Usuario"
              id="user"
              autoComplete="current-user"
              onChange={onChange}
              value={state.user}
            />
            <TextField
              margin="normal"
              sx={{ width: "22%", mr: 1 }}
              required
              name="age"
              label="Idade"
              id="age"
              autoComplete="current-age"
              type="age"
              onChange={onChange}
              value={state.age}
            />
            <TextField
              margin="normal"
              sx={{ width: "75%" }}
              required
              name="name"
              label="Nome do Usuario"
              id="name"
              autoComplete="current-name"
              type="name"
              onChange={onChange}
              value={state.name}
            />
            <TextField
              margin="normal"
              sx={{ width: "49%", mr: 1 }}
              required
              name="peso"
              label="Peso do Usuario em (Kg)"
              id="peso"
              autoComplete="current-peso"
              type="peso"
              onChange={onChange}
              value={state.peso}
            />
            <TextField
              margin="normal"
              sx={{ width: "48%" }}
              required
              name="altura"
              label="Altura do Usuario em (M)"
              id="altura"
              autoComplete="current-altura"
              type="altura"
              onChange={onChange}
              value={state.altura}
            />
            <TextField
              margin="normal"
              required
              sx={{ width: "99%", mb: 2 }}
              name="password"
              label="Alterar senha do Usuario"
              id="password"
              autoComplete="current-password"
              type="password"
              onChange={onChange}
              value={state.password}
            />
            <Button
              type="submit"
              variant="contained"
              color="success"
              sx={{ width: "48%" }}
            >
              Salvar Alterações
            </Button>{" "}
            <Button
              type="submit"
              variant="outlined"
              color="error"
              sx={{ width: "50%" }}
            >
              Excluir Alterações
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
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
