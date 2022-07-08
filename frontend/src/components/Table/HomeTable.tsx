import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import {
  headTable,
  abaixoPeso,
  pesoNormal,
  acimaPeso,
  obesidadeUm,
  obesidadeDois,
  obesidadeTres,
} from "../../colors/Colors";

function createData(
  imc: string,
  classificacao: string,
  consequencia: string,
  backColor: string
) {
  return { imc, classificacao, consequencia, backColor };
}

const rows = [
  createData(
    "Menor que 18,5",
    "Magreza",
    "Fadiga, stress, ansiedade",
    abaixoPeso
  ),
  createData(
    "18,5 a 24,9",
    "Peso normal",
    "Menor risco de doenças cardíacas e vasculares",
    pesoNormal
  ),
  createData(
    "25 a 29,9",
    "Sobrepeso",
    "Fadiga, má circulação, varizes",
    acimaPeso
  ),
  createData(
    "30 a 34,9",
    "Obesidade grau I",
    "Diabetes, angina, infarto, aterosclerose",
    obesidadeUm
  ),
  createData(
    "35 a 40",
    "Obesidade grau II",
    "Apneia do sono, falta de ar",
    obesidadeDois
  ),
  createData(
    "Maior que 40",
    "Obesidade grau III",
    "Refluxo, dificuldade para se mover, escaras, diabetes, infarto, AVC",
    obesidadeTres
  ),
];

export default function HomeTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} aria-label="caption table">
        <TableHead>
          <TableRow sx={{ backgroundColor: headTable }}>
            <TableCell>IMC&nbsp;(kg/m²)</TableCell>
            <TableCell align="right">Classificação</TableCell>
            <TableCell align="right">Consequências para a saúde</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.imc}
              sx={{ backgroundColor: row.backColor, color: "white" }}
            >
              <TableCell>{row.imc}</TableCell>
              <TableCell align="right">{row.classificacao}</TableCell>
              <TableCell align="right">{row.consequencia}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
