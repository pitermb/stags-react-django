import { useState } from "react";
import {
  abaixoPeso,
  pesoNormal,
  acimaPeso,
  obesidadeUm,
  obesidadeDois,
  obesidadeTres,
} from "../colors/Colors";

export const handleSliderBar = (slider: number | number[]) => {
  const [sliderColor, setSliderColor] = useState<string>();
  const [content, setContent] = useState<string>();
  const [content2, setContent2] = useState<string>();

  if (slider >= 40) {
    setSliderColor(obesidadeTres);
    setContent("Obesidade grau III");
    setContent2(
      "Refluxo, dificuldade para se mover, escaras, diabetes, infarto, AVC"
    );
  }
  if (slider < 40) {
    setSliderColor(obesidadeDois);
    setContent("Obesidade grau II");
    setContent2("Apneia do sono, falta de ar");
  }
  if (slider < 35) {
    setSliderColor(obesidadeUm);
    setContent("Obesidade grau I");
    setContent2("Diabetes, angina, infarto, aterosclerose");
  }
  if (slider < 30) {
    setSliderColor(acimaPeso);
    setContent("Sobrepeso");
    setContent2("Fadiga, má circulação, varizes");
  }
  if (slider < 25) {
    setSliderColor(pesoNormal);
    setContent("Peso normal	");
    setContent2("Menor risco de doenças cardíacas e vasculares");
  }
  if (slider < 18.5) {
    setSliderColor(abaixoPeso);
    setContent("Magreza");
    setContent2("Fadiga, stress, ansiedade");
  }

  return { sliderColor, content, content2 };
};
