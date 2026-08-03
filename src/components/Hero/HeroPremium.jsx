import { Box } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const heroImage = "/images/portada.webp";

  const { ref } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Box
      ref={ref}
      sx={{
        position: "relative",
        height: "100vh",
        width: "100vw",
        margin: 0,
        padding: 0,
        backgroundColor: "#ffffff",
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* Capa oscura */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "transparent",
          zIndex: 1,
        }}
      />
      {/* Flecha animada */}
      <Box
        sx={{
          position: "absolute",
          bottom: 20,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          animation: "bounce 2s infinite",
          fontSize: "3rem",
          "@keyframes bounce": {
            "0%, 20%, 50%, 80%, 100%": {
              transform: "translateX(-50%) translateY(0)",
            },
            "40%": {
              transform: "translateX(-50%) translateY(-10px)",
            },
            "60%": {
              transform: "translateX(-50%) translateY(-5px)",
            },
          },
        }}
      >
        <a href="#info" style={{ color: "#000000", textDecoration: "none" }}>
          <KeyboardArrowDownIcon fontSize="inherit" />
        </a>
      </Box>
    </Box>
  );
};

export default Hero;
