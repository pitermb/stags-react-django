import { useState, useContext, useEffect } from "react";
import {
  Box,
  Chip,
  Container,
  CssBaseline,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import FaceIcon from "@mui/icons-material/Face";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/auth/AuthContext";
import { Header } from "../../components/Header/Header";

import HomeTable from "../../components/Table/HomeTable";

const theme = createTheme();
import { Item } from "../../components/Item/ItemHome";

export function Home() {
  const auth = useContext(AuthContext);

  const handleChange = (event: Event, newValue: number | number[]) => {};

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
                IMC: o que é?
              </Typography>
              <Typography variant="body1" gutterBottom>
                O IMC é um cálculo simples que permite avaliar se a pessoa está
                dentro do peso que é considerado ideal para a sua altura. Também
                conhecido como Índice de Massa Corporal, o IMC é uma fórmula
                utilizada por vários profissionais de saúde, incluindo médicos,
                enfermeiros e nutricionistas, para saber, de uma forma rápida,
                se a pessoa precisa ganhar ou perder peso. Embora seja uma
                ferramenta muito comum, o IMC não é considerada a forma mais
                exata de avaliar o peso, já que não leva em consideração a
                composição corporal. Por isso, é comum que no caso de atletas
                (que possuem uma maior quantidade de massa muscular) seja
                aconselhado o uso de outras técnicas, como a bioimpedância, para
                uma avaliação mais detalhada do peso.
              </Typography>
            </Item>
          </Stack>
          <Stack sx={{ width: "100%", mb: 2 }}>
            <Item>
              <Typography variant="h4" gutterBottom component="div">
                Tabela de resultados de IMC
              </Typography>
              <Typography variant="body1" gutterBottom>
                Cada resultado do IMC deve ser avaliado por um profissional de
                saúde. No entanto, o card a seguir indica os possíveis
                resultados do IMC, de acordo com a Organização Mundial da Saúde,
                sendo que o IMC entre 18,5 a 24,9 representa o peso ideal e o
                menor risco de algumas doenças.
              </Typography>
              <Divider sx={{ m: 2 }} />
              <HomeTable />
            </Item>
          </Stack>
          <Stack sx={{ width: "100%", mb: 2 }}>
            <Item>
              
            </Item>
          </Stack>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
