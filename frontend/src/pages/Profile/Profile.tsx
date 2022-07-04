import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import {
  Container,
  CssBaseline,
  Box,
  Avatar,
  Typography,
  TextField,
  Button,
  Snackbar,
  IconButton,
  InputAdornment,
  OutlinedInput,
  InputLabel,
  FormControl,
  Badge,
} from "@mui/material";
import {
  ChangeEvent,
  FormEvent,
  forwardRef,
  useContext,
  useState,
  MouseEvent,
} from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { AuthContext } from "../../contexts/auth/AuthContext";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";
import Base64 from "../../utils/Base64";

const theme = createTheme();
const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const Input = styled("input")({
  display: "none",
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
    showPassword: false,
  };
  const [state, setState] = useState(InitialState);
  const [profileImage, setProfileImage] = useState(state.image);

  const handleClickShowPassword = () => {
    setState({
      ...state,
      showPassword: !state.showPassword,
    });
  };

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
    console.log(base64Data);
    /* setState({
      ...state,
      image: { filecontent: base64Data, filename: file.name },
    }); */
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
            marginTop: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            badgeContent={
              <label htmlFor="icon-button-file">
                <Input
                  accept="image/*"
                  id="icon-button-file"
                  name="image"
                  type="file"
                  onChange={onChangeImage}
                />
                <IconButton
                  sx={{ backgroundColor: "deepskyblue", color: "white" }}
                  color="default"
                  aria-label="upload picture"
                  size="large"
                  component="span"
                >
                  <EditIcon />
                </IconButton>
              </label>
            }
          >
            <Avatar
              sx={{ width: 175, height: 175 }}
              alt="Usuario..."
              src={profileImage}
            />
          </Badge>
          <Typography
            component="h1"
            variant="h4"
            sx={{ mt: 2, textAlign: "center" }}
          >
            Alterar Dados
          </Typography>
          <Box component="form" onSubmit={onSubmit} sx={{ mt: 1, mb: 2 }}>
            <TextField
              size="small"
              margin="normal"
              InputProps={{
                readOnly: true,
              }}
              fullWidth
              name="idPerson"
              label="ID (somente leitura):"
              id="idPerson"
              type="idPerson"
              value={state.idPerson}
            />
            <TextField
              size="small"
              margin="normal"
              InputProps={{
                readOnly: true,
              }}
              fullWidth
              name="user"
              label="Username (somente leitura):"
              id="user"
              value={state.user}
            />
            <TextField
              size="small"
              margin="normal"
              sx={{ width: "22%", mr: 1 }}
              required
              name="age"
              label="Idade:"
              id="age"
              type="age"
              onChange={onChange}
              value={state.age}
            />
            <TextField
              size="small"
              margin="normal"
              sx={{ width: "75%" }}
              required
              name="name"
              label="Nome:"
              id="name"
              type="name"
              onChange={onChange}
              value={state.name}
            />
            <TextField
              size="small"
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Kg</InputAdornment>
                ),
              }}
              sx={{ width: "49%", mr: 1 }}
              required
              name="peso"
              label="Peso:"
              id="peso"
              type="peso"
              onChange={onChange}
              value={state.peso}
            />
            <TextField
              size="small"
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">M</InputAdornment>
                ),
              }}
              sx={{ width: "48%" }}
              required
              name="altura"
              label="Altura:"
              id="altura"
              type="altura"
              onChange={onChange}
              value={state.altura}
            />
            <FormControl sx={{ width: "99%", mb: 2, mt: 2 }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Alterar senha: *
              </InputLabel>
              <OutlinedInput
                label="Alterar senha: "
                size="small"
                required
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {state.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                name="password"
                id="outlined-adornment-password"
                type={state.showPassword ? "text" : "password"}
                onChange={onChange}
                value={state.password}
              />
            </FormControl>
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
