import { Box, Typography, Slide, Button } from "@mui/material";
import { useInView } from "react-intersection-observer";

const InfoEvent = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const direccionLinea1 = "Altos Olivos Eventos";
  const direccionLinea2 = "Francisco Birges 100, Olivos, Buenos Aires";

  const mapsUrl =
    "https://www.google.com/maps/place/Altos+de+Olivos+Eventos/@-34.5020279,-58.4834616,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcb179e418b69d:0x91bcea26081c2913!8m2!3d-34.5020279!4d-58.4808867!16s%2Fg%2F11t53l4kwp?entry=ttu&g_ep=EgoyMDI2MDcyOS4wIKXMDSoASAFQAw%3D%3D";

  return (
    <Box
      ref={ref}
      sx={{
        width: "100%",
        py: 8,
        px: 2,
        backgroundColor: "#ffffff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Slide in={inView} direction="up" timeout={800}>
        <Box
          sx={{
            width: "100%",
            maxWidth: { xs: 340, sm: 420, md: 520 },
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
            <Typography
              variant="h4"
              sx={{
                fontFamily: "var(--font-secondary)",
                fontSize: { xs: "2.1rem", md: "2.8rem" },
                color: "#000000",
                textAlign: "center",
                mb: 2,
                width: "100%",
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
                width: "100%",
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
                width: "100%",
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
                width: "100%",
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
      </Slide>
    </Box>
  );
};

export default InfoEvent;
