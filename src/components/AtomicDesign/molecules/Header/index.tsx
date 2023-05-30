import { Box } from "@mui/material";
import Logo from "../../../../assets/Logo.svg";

export default function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        heigth: "80px",
        padding: "24px",
      }}
    >
      <img src={Logo} alt="logo" />
    </Box>
  );
}
