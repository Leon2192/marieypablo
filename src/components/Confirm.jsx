import { Box, Typography } from "@mui/material";
import ButtonLinks from "./ButtonLinks/ButtonLInks";
import SectionArrow from "./SectionArrow";
import { sectionTitleSx } from "./sectionStyles";

const Confirm = () => {
  return (
    <Box
      id="confirm"
      sx={{
        minHeight: "40vh",
        position: "relative",
        pt: 8,
        pb: 12,
        px: 2,
        backgroundColor: "#ffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      {/* Contenedor interno */}
      <Box>
        {/* Icono animado */}
        <Box
          component="img"
          src="/images/demo10/confirm.gif"
          alt="Ceremonia"
          sx={{
            width: 125,
            height: 125,
            mb: 1,
          }}
        />

        {/* Título principal cursiva */}
        <Typography
          variant="h4"
          sx={{
            ...sectionTitleSx,
            fontSize: { xs: "1.9rem", md: "2.6rem" },
            color: "#000000",
            fontWeight: "semibold",
            mb: 2,
          }}
        >
          Confirmacion de asistencia
        </Typography>

        {/* Subtítulo más pequeño */}
        <Typography
          variant="body1"
          sx={{
            fontFamily: "var(--font-primary)",
            fontSize: { xs: "1.2rem", md: "1.5rem" },
            color: "#000000",
            mb: 4,
          }}
        >
          Esperamos que seas parte de esta gran celebración. ¡Confirmanos tu asistencia!
        </Typography>

        {/* Botón */}
        <ButtonLinks
          label="Confirmar Asistencia"
          href="https://docs.google.com/forms/d/e/1FAIpQLSea6_7RLxvM_wfraAMRkhTlOG-t3RP7kzHRjW_ok9uQhFPFIA/viewform"
          newTab
        />
      </Box>

      <SectionArrow href="#thanks" />
    </Box>
  );
};

export default Confirm;
