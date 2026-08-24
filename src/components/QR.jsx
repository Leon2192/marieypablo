import { Box, Typography, Fade } from "@mui/material";
import { useInView } from "react-intersection-observer";
import SectionArrow from "./SectionArrow";
import { sectionTitleSx } from "./sectionStyles";

const Qr = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Box
      ref={ref}
      id="qr"
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
      <Fade in={inView} timeout={800}>
        <Box
          sx={{
            transform: inView ? "scale(1)" : "scale(0.95)",
            transition: "transform 0.6s ease-out",
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
            Escanea este QR para compartir las fotos del evento
          </Typography>

          <Box display="flex" justifyContent="center" mb={3}>
            <Box
              component="img"
              src="/images/qr.png"
              alt="Código QR"
              sx={{
                width: { xs: 210, md: 240 },
                height: { xs: 210, md: 240 },
                objectFit: "contain",
              }}
            />
          </Box>
        </Box>
      </Fade>

      <SectionArrow href="#song" />
    </Box>
  );
};

export default Qr;
