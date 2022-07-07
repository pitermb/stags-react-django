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
      setContent("Obesidade grau III");
      setContent2(
        "Refluxo, dificuldade para se mover, escaras, diabetes, infarto, AVC"
      );
    }
    if ((slider as number) < 40) {
      setSliderColor(obesidadeDois);
      setContent("Obesidade grau II");
      setContent2("Apneia do sono, falta de ar");
    }
    if ((slider as number) < 35) {
      setSliderColor(obesidadeUm);
      setContent("Obesidade grau I");
      setContent2("Diabetes, angina, infarto, aterosclerose");
    }
    if ((slider as number) < 30) {
      setSliderColor(acimaPeso);
      setContent("Sobrepeso");
      setContent2("Fadiga, má circulação, varizes");
    }
    if ((slider as number) < 25) {
      setSliderColor(pesoNormal);
      setContent("Peso normal	");
      setContent2("Menor risco de doenças cardíacas e vasculares");
    }
    if ((slider as number) < 18.5) {
      setSliderColor(abaixoPeso);
      setContent("Magreza");
      setContent2("Fadiga, stress, ansiedade");
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
              <Item>
                <h2> Tabela de resultados de IMC</h2>
                Cada resultado do IMC deve ser avaliado por um profissional de
                saúde. No entanto, a tabela a seguir indica os possíveis
                resultados do IMC, de acordo com a Organização Mundial da Saúde,
                sendo que o IMC entre 18,5 a 24,9 representa o peso ideal e o
                menor risco de algumas doenças.
              </Item>
              <Divider sx={{ margin: 1 }}>
                <Chip
                  label={`Progresso da barra de IMC: ${(
                    slider as number
                  ).toFixed(2)}`}
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
              <Grid container columns={11}>
                <Grid item xs={6}>
                  <Divider orientation="vertical">
                    <Chip
                      label={content}
                      sx={{ backgroundColor: sliderColor, color: "white" }}
                      icon={<FaceIcon />}
                    />
                  </Divider>
                </Grid>
                <Grid item xs={5}>
                  <Item>{content2}</Item>
                </Grid>
              </Grid>
            </Item>
          </Stack>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
