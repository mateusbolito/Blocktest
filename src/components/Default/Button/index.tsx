import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { purple } from "@mui/material/colors";
import arrowRight from "../../../assets/arrow-right.svg";

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  width: "235px",
  height: "43px",
  marginLeft: "20px",
  background:
    "linear-gradient(90deg, rgba(161, 28, 243, 0.6) 0%, rgba(216, 53, 197, 0.6) 100%)",
  fontFamily: "Open sans",
  fontSize: "16px",
  textTransform: "none",
  fontStyle: "normal",
  borderRadius: "8px",
  "&:hover": {
    background: "rgba(223, 172, 255, 0);",
    backdropFilter: 'blur(3.5px);',
    border: '1px solid #A11CF3'
  },
  img: {
    marginLeft: "5px",
  },
}));

export default function CustomizedButtons() {
  return (
    <Stack spacing={2} direction="row">
      <ColorButton variant="contained">
        Quero ser Premium <img src={arrowRight} />{" "}
      </ColorButton>
    </Stack>
  );
}
