import { Box, Typography } from "@mui/material";
import * as S from "./styles";
import CustomizedButtons from "../../../Default/Button";
import iconClose from '../../../../assets/iconClose.svg'
import { useState } from "react";
export default function Announcement() {
  const [showAnnouncement, setShowAnnouncement] = useState(true)
  return (
    <>
    {showAnnouncement === true && <S.Container>
      <Box className="BoxContent">
        <span onClick={() => {setShowAnnouncement(false)}}>Fechar <img src={iconClose} alt="icon close" /> </span>
        <Typography>
          Não limite sua criatividade, junte-se a familia Blocks por apenas{" "}
          <strong>BRL 19,99</strong>
        </Typography>
        <CustomizedButtons />
      </Box>
    </S.Container>}
    </>
  );
}
