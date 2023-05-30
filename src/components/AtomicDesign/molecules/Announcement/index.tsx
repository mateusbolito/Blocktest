import { Box, Typography } from "@mui/material";
import * as S from "./styles";
import CustomizedButtons from "../../../Default/Button";
export default function Announcement() {
  return (
    <S.Container>
      <Box className="BoxContent">
        <Typography>
          Não limite sua criatividade, junte-se a familia Blocks por apenas{" "}
          <strong>BRL 19,99</strong>
        </Typography>
        <CustomizedButtons />
      </Box>
    </S.Container>
  );
}
