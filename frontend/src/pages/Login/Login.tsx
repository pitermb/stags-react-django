import { FormEvent, useState, createRef, forwardRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
  Snackbar,
} from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { customAxios } from "../../api/customAxios";

const theme = createTheme();

const ref = createRef();
const Alert = forwardRef(function Alert(props: AlertProps, ref: any) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const superuser = { username: "admin", password: "admin" };

export function Login(props: any) {
  const [open, setOpen] = useState(false);
  const InitialState = { user: "", password: "" };
  const [state, setState] = useState(InitialState);
  const navigate = useNavigate();
  let { personLogged } = useParams();

  function onChange(e: { target: { value: string; name: string } }) {
    const { value, name } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const { data: token } = await customAxios.post(`token/`, {
        ...superuser,
      });

      const { data: DataPerson } = await customAxios.get(`api/person/`, {
        headers: { Authorization: "Bearer " + token.access },
      });

      DataPerson.filter((person: any) => {
        if (person.name === state.user) {
          personLogged = DataPerson;
          return navigate("/home");
        } else {
          setOpen(true);
        }
      });
    } catch {
      alert("Deu ruim");
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
            People's List
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
