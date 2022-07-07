import { useState, useContext, useEffect } from "react";
import {
  Box,
  Chip,
  Container,
  CssBaseline,
  Divider,
  Grid,
  Paper,
  Skeleton,
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

export function Dashboard() {
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
              <Typography variant="h4" gutterBottom component="div">
                Seu IMC pessoal
              </Typography>
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
          <Stack sx={{ width: "100%", mb: 2 }}>
            <Item>
              <Typography
                variant="caption"
                gutterBottom
                component="div"
                sx={{ m: 1 }}
              >
                Arraste a barra acima para mudar o valor do IMC
              </Typography>
              <Grid container columns={11}>
                <Grid item xs={6}>
                  <Divider orientation="vertical">
                    <Typography variant="body1" gutterBottom component="div">
                      <Chip
                        label={content}
                        sx={{ backgroundColor: sliderColor, color: "white" }}
                        icon={<FaceIcon />}
                      />
                    </Typography>
                  </Divider>
                </Grid>
                <Grid item xs={5}>
                  <Item>
                    <Typography variant="body1" gutterBottom component="div">
                      {content2}
                    </Typography>
                  </Item>
                </Grid>
              </Grid>
              <Typography
                variant="caption"
                gutterBottom
                component="div"
                sx={{ m: 1 }}
              >
                Para ver o resultado correto, confira seus dados em seu perfil
              </Typography>
            </Item>
          </Stack>
          <Stack>
            <Item>
              <Typography variant="h4" gutterBottom component="div">
                Como melhorar o resultado do IMC
              </Typography>
              <Typography variant="body1" gutterBottom>
                Quando o resultado do IMC não é o ideal, existem alguns
                cuidados, principalmente com a alimentação, que podem ajudar a
                atingir o valor ideal:
              </Typography>
              <Typography variant="h4" gutterBottom component="div">
                1. O que fazer para baixar o IMC
              </Typography>
              <Typography variant="body1" gutterBottom>
                Se o resultado do IMC estiver acima do ideal e a pessoa não for
                muito musculosa, nem atleta, pode indicar que é preciso
                emagrecer, eliminando o acúmulo de gordura, que contribui para o
                peso alto. Para isso deve-se comer somente alimentos ricos em
                vitaminas e minerais, tendo o cuidado de diminuir o consumo de
                alimentos industrializados e ricos em gordura, como massa
                folheada, bolos, biscoitos recheados e salgadinhos, por exemplo.
                Para que os resultados sejam alcançados ainda mais rápido é
                aconselhado fazer exercícios para aumentar o gasto calórico e
                aumentar o metabolismo. Recorrer a chás e suplementos naturais
                pode ser um estímulo para ajudar a emagrecer de forma mais
                rápida e saudável, sem ter que passar fome. Alguns exemplos são
                o chá de hibisco ou o chá de gengibre com canela, mas um
                nutricionista poderá indicar outros que sejam mais adequados às
                necessidades de cada pessoa Veja mais sobre reeducação alimentar
                para emagrecer de vez de forma saudável.
              </Typography>
              <Typography variant="h4" gutterBottom component="div">
                2. O que fazer para aumentar o IMC
              </Typography>
              <Typography variant="body1" gutterBottom>
                Se o resultado do IMC estiver abaixo do ideal, o que se deve
                fazer é aumentar a ingestão de alimentos ricos em vitaminas e
                minerais de boa qualidade, mas sem cair no erro de comer
                alimentos processados e ricos em gordura trans. Pizzas,
                frituras, cachorro quente e hambúrguer não são os melhores
                alimentos para quem precisa aumentar o peso de forma saudável,
                porque este tipo de gordura pode se acumular no interior das
                artérias, aumentando o risco de doença cardíaca.
              </Typography>
            </Item>
          </Stack>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
