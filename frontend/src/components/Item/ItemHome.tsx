import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { stackComponent } from "../../colors/Colors";

export const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  backgroundColor: stackComponent,
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
