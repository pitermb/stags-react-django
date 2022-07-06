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
  Chip,
  Container,
  CssBaseline,
  Divider,
  Grid,
  Paper,
  Slider,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import ScaleIcon from "@mui/icons-material/Scale";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/auth/AuthContext";
import { Header } from "../../components/Header/Header";

const theme = createTheme();
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export function Home() {
  const auth = useContext(AuthContext);
  const [slider, setSlider] = useState(auth.user?.imc);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setSlider(newValue as number);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container component="main" maxWidth="xl">
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Stack sx={{ width: "100%" }}>
            <Item>
              <Divider sx={{ margin: 1 }}>
                <Chip label={`Progresso da barra de IMC: ${slider}`}/>
              </Divider>
              <Slider
                aria-label="Default"
                valueLabelDisplay="auto"
                value={slider}
                onChange={handleChange}
                sx={{ width: "95%" }}
              />
            </Item>
          </Stack>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
