import { Box } from "@mui/material";
import { useInView } from "react-intersection-observer";
import SectionArrow from "../SectionArrow";

const Hero = () => {
  const heroImage = "/images/portada.webp";

  const { ref } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Box
      ref={ref}
      id="hero"
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
      <SectionArrow href="#countdown" />
    </Box>
  );
};

export default Hero;
