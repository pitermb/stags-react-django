import {
  abaixoPeso,
  pesoNormal,
  acimaPeso,
  obesidadeUm,
  obesidadeDois,
  obesidadeTres,
} from "../colors/Colors";

export const getIMCRepresentation = (
  slider: number
): { color: string; title: string; description: string } => {
  if (slider <= 18.5) {
    return {
      color: abaixoPeso,
      title: "Magreza",
      description: "Fadiga, stress, ansiedade",
    };
  }
  if (slider < 25) {
    return {
      color: pesoNormal,
      title: "Peso normal",
      description: "Menor risco de doenças cardíacas e vasculares",
    };
  }
  if (slider < 30) {
    return {
      color: acimaPeso,
      title: "Sobrepeso",
      description: "Fadiga, má circulação, varizes",
    };
  }
  if (slider < 35) {
    return {
      color: obesidadeUm,
      title: "Obesidade grau I",
      description: "Diabetes, angina, infarto, aterosclerose",
    };
  }
  if (slider < 40) {
    return {
      color: obesidadeDois,
      title: "Obesidade grau II",
      description: "Apneia do sono, falta de ar",
    };
  } else {
    return {
      color: obesidadeTres,
      title: "Obesidade grau III",
      description:
        "Refluxo, dificuldade para se mover, escaras, diabetes, infarto, AVC",
    };
  }
};
