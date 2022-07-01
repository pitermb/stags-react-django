import {
  FormEvent,
  useState,
  createRef,
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
import Base64 from "../../utils/Base64";

const theme = createTheme();
const ref = createRef();
const Alert = forwardRef<unknown, AlertProps>((props: AlertProps, ref: any) => {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const label = { inputProps: { "aria-label": "Checkbox demo" } };
const Input = styled("input")({
  display: "none",
});

export function Register() {
  const InitialState = {
    user: "",
    name: "",
    password: "",
    age: "",
    peso: "",
    altura: "",
    image: null,
  };
  const [state, setState] = useState<UserRegister>(InitialState);
  const [open, setOpen] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    const { value, name } = event.target;

    setState({
      ...state,
      [name]: value,
    });
  }

  async function onChangeImage(event: ChangeEvent<HTMLInputElement>) {
    const filesList = event.target?.files || null;

    if (!filesList) {
      return false;
    }

    const [file] = filesList;

    const base64Data = await Base64.encode(file);

    setState({
      ...state,
      image: { filecontent: base64Data, filename: file.name },
    });

    setChecked(true);
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log(state);
    /* const isRegister = await auth.signin(state.user, state.password);
    if (isRegister) {
      navigate("/");
    } else {
      setOpen(true);
    } */
  }
  return (
    <ThemeProvider theme={theme}>
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
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <ScaleIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ mt: 1 }}>
            Registre-se em nosso site!
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
              name="name"
              label="Nome"
              id="name"
              autoComplete="current-name"
              onChange={onChange}
              value={state.name}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="age"
              label="Idade"
              id="age"
              autoComplete="current-age"
              type="number"
              onChange={onChange}
              value={state.age}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="peso"
              label="Peso em (Kg)"
              id="peso"
              autoComplete="current-peso"
              onChange={onChange}
              value={state.peso}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="altura"
              label="Altura em (M)"
              id="altura"
              autoComplete="current-altura"
              onChange={onChange}
              value={state.altura}
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
            <Typography component="span" sx={{ mt: 5, fontSize: 24 }}>
              Foto de perfil:
              <label htmlFor="contained-button-file">
                <Input
                  accept="image/*"
                  id="contained-button-file"
                  name="image"
                  multiple
                  type="file"
                  onChange={onChangeImage}
                />
                <Button
                  variant="outlined"
                  component="span"
                  size="small"
                  sx={{ ml: 1, fontSize: 15 }}
                >
                  Upload
                </Button>
              </label>
              <Checkbox {...label} disabled checked={checked} />
            </Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="success"
              sx={{ mt: 2, mb: 2 }}
            >
              Registrar
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
                <Button variant="outlined" size="small" sx={{ mb: 2 }}>
                  <Link to="/" style={{ textDecoration: "none" }}>
                    Já está registrado?
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
