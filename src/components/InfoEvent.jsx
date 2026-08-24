import { Box, Typography, Fade, Button } from "@mui/material";
import { useInView } from "react-intersection-observer";
import SectionArrow from "./SectionArrow";
import { sectionTitleSx } from "./sectionStyles";

const InfoEvent = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const direccionLinea1 = "Altos Olivos Eventos";
  const direccionLinea2 = "Francisco Borges 100, Olivos, Buenos Aires";

  const mapsUrl =
    "https://www.google.com/maps/place/Altos+de+Olivos+Eventos/@-34.5020279,-58.4834616,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcb179e418b69d:0x91bcea26081c2913!8m2!3d-34.5020279!4d-58.4808867!16s%2Fg%2F11t53l4kwp?entry=ttu&g_ep=EgoyMDI2MDcyOS4wIKXMDSoASAFQAw%3D%3D";

  return (
    <Box
      ref={ref}
      id="info"
      sx={{
        position: "relative",
        pt: 8,
        pb: 12,
        px: 2,
        backgroundColor: "#ffffff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Fade in={inView} timeout={800}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            maxWidth: { xs: 320, sm: 420, md: 520 },
            mx: "auto",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              ...sectionTitleSx,
              fontSize: { xs: "1.7rem", md: "2.1rem" },
              color: "#000000",
              mb: 2,
            }}
          >
            Ceremonia & Fiesta
          </Typography>

          <Typography
            sx={{
              mb: 1,
              fontFamily: "var(--font-primary)",
              fontSize: { xs: "1rem", md: "1.2rem" },
              color: "#000000",
              fontWeight: "bold",
              lineHeight: 1.4,
            }}
          >
            Domingo 6 de diciembre de 2026
          </Typography>

          <Typography
            sx={{
              mb: 1,
              fontFamily: "var(--font-primary)",
              fontSize: { xs: "1rem", md: "1.2rem" },
              color: "#000000",
              fontWeight: "bold",
              lineHeight: 1.4,
            }}
          >
            12:00 hs
          </Typography>

          <Typography
            sx={{
              mb: 3,
              fontFamily: "var(--font-primary)",
              fontSize: { xs: "1rem", md: "1.2rem" },
              color: "#000000",
              fontWeight: "bold",
              lineHeight: 1.4,
              maxWidth: { xs: 260, sm: 320, md: 420 },
            }}
          >
            {direccionLinea1}
            <br />
            {direccionLinea2}
          </Typography>

          <Button
            variant="contained"
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              backgroundColor: "#000000",
              color: "#ffffff",
              borderRadius: "50px",
              px: 2,
              py: 1,
              fontFamily: "var(--font-primary)",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#333333",
              },
            }}
          >
            CÓMO LLEGAR
          </Button>
        </Box>
      </Fade>

      <SectionArrow href="#gift" />
    </Box>
  );
};

export default InfoEvent;
