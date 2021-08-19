import { createTheme } from "@material-ui/core/styles";
import typography from "./typography";
import theme from "./theme";

const MuiTheme = createTheme({
  ...theme,
  typography,
} as any);

export default MuiTheme;
