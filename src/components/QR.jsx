import { Box, Typography, Fade } from "@mui/material";
import { useInView } from "react-intersection-observer";
import ButtonLinks from "./ButtonLinks/ButtonLInks";

const Qr = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Box
      ref={ref}
      sx={{
        minHeight: "40vh",
        py: 8,
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
              fontFamily: "var(--font-secondary)",
              fontSize: { xs: "2.2rem", md: "3rem" },
              color: "#000000",
              mb: 2,
            }}
          >
            Escanea este QR
          </Typography>

          <Box display="flex" justifyContent="center" mb={3}>
            <Box
              component="img"
              src="/images/qr-placeholder.svg"
              alt="Código QR"
              sx={{
                width: { xs: 210, md: 240 },
                height: { xs: 210, md: 240 },
                objectFit: "contain",
              }}
            />
          </Box>

          <Typography
            variant="body1"
            sx={{
              fontFamily: "var(--font-primary)",
              fontSize: { xs: "1.2rem", md: "1.5rem" },
              color: "#000000",
              mb: 2,
            }}
          >
            Para compartir las fotos del evento!
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontFamily: "var(--font-primary)",
              fontSize: { xs: "1.2rem", md: "1.5rem" },
              color: "#000000",
              mb: 2,
            }}
          >
            O puedes presionar aqui
          </Typography>

          <Box mt={2}>
            <ButtonLinks
              label="Ir al album"
              href="https://photos.google.com/share/AF1QipMF4Niy7oe5VTaE9V4WC7LanXP3kaQVgsRL9nHsI6i5FX5jOpjJKcJxK8JW9Ar8eg?key=V2ZJMWMyZ0hpcHNnbVhmYno1LUpBLTd4bTdYV1pn"
              newTab
            />
          </Box>
        </Box>
      </Fade>
    </Box>
  );
};

export default Qr;
