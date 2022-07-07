import { useState, useContext, useEffect } from "react";
import {
  Box,
  Chip,
  Container,
  CssBaseline,
  Divider,
  Grid,
  Paper,
  Slider,
  Stack,
  Typography,
} from "@mui/material";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import FaceIcon from "@mui/icons-material/Face";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/auth/AuthContext";
import { Header } from "../../components/Header/Header";
import {
  mtoAbaixoPeso,
  abaixoPeso,
  pesoNormal,
  acimaPeso,
  obesidadeUm,
  obesidadeDois,
  obesidadeTres,
} from "../../colors/Colors";

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
  const [sliderColor, setSliderColor] = useState<string>();
  const [content, setContent] = useState<string>();
  const [content2, setContent2] = useState<string>();

  useEffect(() => {
    if ((slider as number) >= 40) {
      setSliderColor(obesidadeTres);
    }
    if ((slider as number) < 40) {
      setSliderColor(obesidadeDois);
    }
    if ((slider as number) < 35) {
      setSliderColor(obesidadeUm);
    }
    if ((slider as number) < 30) {
      setSliderColor(acimaPeso);
    }
    if ((slider as number) < 25) {
      setSliderColor(pesoNormal);
    }
    if ((slider as number) < 18.5) {
      setSliderColor(abaixoPeso);
    }
    if ((slider as number) < 17) {
      setSliderColor(mtoAbaixoPeso);
      setContent("Fadiga")
      setContent2("Fadiga, stress, ansiedade")
    }
  }, [slider]);

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
          <Stack sx={{ width: "100%", mb: 2 }}>
            <Item>
              <Divider sx={{ margin: 1 }}>
                <Chip
                  label={`Progresso da barra de IMC: ${slider}`}
                  sx={{ backgroundColor: sliderColor, color: "white" }}
                />
              </Divider>
              <Slider
                max={50}
                aria-label="Default"
                valueLabelDisplay="auto"
                value={slider}
                onChange={handleChange}
                sx={{ width: "95%" }}
              />
            </Item>
          </Stack>
          <Stack sx={{ width: "100%" }}>
            <Item>
              <Grid container>
                <Grid item xs>
                  {content}
                </Grid>
                <Divider orientation="vertical" flexItem>
                  <Chip
                    label={`Info:`}
                    sx={{ backgroundColor: sliderColor, color: "white" }}
                    icon={<FaceIcon />}
                  />
                </Divider>
                <Grid item xs>
                  {content2}
                </Grid>
              </Grid>
            </Item>
          </Stack>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
