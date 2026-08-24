import { Box, Typography, Button, Fade } from "@mui/material";
import { useInView } from "react-intersection-observer";
import SectionArrow from "./SectionArrow";
import { sectionTitleSx } from "./sectionStyles";

const SuggestSong = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Box
      ref={ref}
      id="song"
      sx={{
        minHeight: "40vh",
        position: "relative",
        pt: 8,
        pb: 12,
        px: 2,
        backgroundColor: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Fade in={inView} timeout={1000}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src="/images/song.gif"
            alt="Cancion"
            sx={{
              width: 125,
              height: 125,
              mb: 1,
            }}
          />

          <Typography
            variant="h4"
            sx={{
              ...sectionTitleSx,
              fontSize: { xs: "1.8rem", md: "2.3rem" },
              color: "#000000",
              mb: 1,
            }}
          >
            Recomenda tu cancion
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontFamily: "var(--font-primary)",
              fontSize: { xs: "1.2rem", md: "1.5rem" },
              color: "#000000",
              mb: 4,
            }}
          >
            Sumanos esa cancion que no puede faltar en la fiesta.
          </Typography>

          <Button
            component="a"
            href="https://docs.google.com/forms/d/e/1FAIpQLSf7R0GNRgpvEo5LD3ldDi4H8U3kyo9hxMG_pEh4EdfAUVyARw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            sx={{
              borderRadius: 999,
              px: 4,
              backgroundColor: "#000000",
              fontFamily: "var(--font-primary)",
              color: "#ffffff",
              boxShadow: "none",
              animation: "bounceBtn 2s infinite",
              transition: "all 0.3s ease",
              "@keyframes bounceBtn": {
                "0%, 20%, 50%, 80%, 100%": {
                  transform: "translateY(0)",
                },
                "40%": {
                  transform: "translateY(-6px)",
                },
                "60%": {
                  transform: "translateY(-3px)",
                },
              },
              "&:hover": {
                backgroundColor: "#333333",
                color: "#ffffff",
                transform: "scale(1.05)",
              },
            }}
          >
            Recomendar
          </Button>

        </Box>
      </Fade>

      <SectionArrow href="#dresscode" />
    </Box>
  );
};

export default SuggestSong;
