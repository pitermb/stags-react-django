import { useState, useContext } from "react";
import {
  Box,
  Chip,
  Container,
  CssBaseline,
  Divider,
  Grid,
  Slider,
  Stack,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FaceIcon from "@mui/icons-material/Face";
import { AuthContext } from "../../contexts/auth/AuthContext";
import { Header } from "../../components/Header/Header";
import { getIMCRepresentation } from "../../utils/SliderBar";
import { Item } from "../../components/Item/ItemDashboard";
const theme = createTheme();

export function Dashboard() {
  const { user } = useContext(AuthContext);
  const [slider, setSlider] = useState(user?.imc);
  const [imcRepresentation, setImcRepresentation] = useState<any>(
    getIMCRepresentation(user?.imc as number)
  );

  const handleChange = (event: Event, newValue: number | number[]) => {
    const { color, title, description } = getIMCRepresentation(
      newValue as number
    ) as any;
    setImcRepresentation({ color, title, description });
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
                  sx={{
                    backgroundColor: imcRepresentation.color,
                    color: "white",
                  }}
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
                        label={imcRepresentation.title}
                        sx={{
                          backgroundColor: imcRepresentation.color,
                          color: "white",
                        }}
                        icon={<FaceIcon />}
                      />
                    </Typography>
                  </Divider>
                </Grid>
                <Grid item xs={5}>
                  <Item>
                    <Typography variant="body1" gutterBottom component="div">
                      {imcRepresentation.description}
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
              <Stack sx={{ mt: 2 }}>
                <Item>
                  <Typography variant="h4" gutterBottom component="div">
                    Como melhorar o resultado do IMC
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Quando o resultado do IMC n??o ?? o ideal, existem alguns
                    cuidados, principalmente com a alimenta????o, que podem ajudar
                    a atingir o valor ideal:
                  </Typography>
                </Item>
              </Stack>
              <Stack sx={{ mt: 2 }}>
                <Item>
                  <Typography variant="h4" gutterBottom component="div">
                    1. O que fazer para baixar o IMC
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Se o resultado do IMC estiver acima do ideal e a pessoa n??o
                    for muito musculosa, nem atleta, pode indicar que ?? preciso
                    emagrecer, eliminando o ac??mulo de gordura, que contribui
                    para o peso alto. Para isso deve-se comer somente alimentos
                    ricos em vitaminas e minerais, tendo o cuidado de diminuir o
                    consumo de alimentos industrializados e ricos em gordura,
                    como massa folheada, bolos, biscoitos recheados e
                    salgadinhos, por exemplo. Para que os resultados sejam
                    alcan??ados ainda mais r??pido ?? aconselhado fazer exerc??cios
                    para aumentar o gasto cal??rico e aumentar o metabolismo.
                    Recorrer a ch??s e suplementos naturais pode ser um est??mulo
                    para ajudar a emagrecer de forma mais r??pida e saud??vel, sem
                    ter que passar fome. Alguns exemplos s??o o ch?? de hibisco ou
                    o ch?? de gengibre com canela, mas um nutricionista poder??
                    indicar outros que sejam mais adequados ??s necessidades de
                    cada pessoa Veja mais sobre reeduca????o alimentar para
                    emagrecer de vez de forma saud??vel.
                  </Typography>
                </Item>
              </Stack>
              <Stack sx={{ mt: 2 }}>
                <Item>
                  <Typography variant="h4" gutterBottom component="div">
                    2. O que fazer para aumentar o IMC
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Se o resultado do IMC estiver abaixo do ideal, o que se deve
                    fazer ?? aumentar a ingest??o de alimentos ricos em vitaminas
                    e minerais de boa qualidade, mas sem cair no erro de comer
                    alimentos processados e ricos em gordura trans. Pizzas,
                    frituras, cachorro quente e hamb??rguer n??o s??o os melhores
                    alimentos para quem precisa aumentar o peso de forma
                    saud??vel, porque este tipo de gordura pode se acumular no
                    interior das art??rias, aumentando o risco de doen??a
                    card??aca.
                  </Typography>
                </Item>
              </Stack>
            </Item>
          </Stack>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
