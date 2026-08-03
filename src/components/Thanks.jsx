import { Box, useMediaQuery, useTheme } from "@mui/material";

const Thanks = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const thanksImage = "/images/gracias.jpeg";

  return (
    <Box
      sx={{
        position: "relative",
        height: "50vh",
        m: 0,
        p: 0,
        backgroundColor: "#ffffff",
        backgroundImage: `url(${thanksImage})`,
        backgroundSize: isMobile ? "cover" : "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <Box />
    </Box>
  );
};

export default Thanks;
