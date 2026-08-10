import { Box, useMediaQuery, useTheme } from "@mui/material";

const Thanks = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const thanksImage = "/images/gracias.jpeg";

  return (
    <Box
      sx={{
        height: "50vh",
        m: 0,
        p: { xs: 2, sm: 3, md: 4 },
        backgroundColor: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          backgroundImage: `url(${thanksImage})`,
          backgroundSize: isMobile ? "contain" : "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
    </Box>
  );
};

export default Thanks;
