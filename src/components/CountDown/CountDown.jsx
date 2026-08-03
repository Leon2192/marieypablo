import { Box, Typography, Grid } from "@mui/material";
import { useEffect, useState } from "react";

const targetDate = new Date();
targetDate.setFullYear(targetDate.getFullYear() + 1); // Cuenta regresiva de 1 año

const getTimeLeft = () => {
  const now = new Date();
  const difference = targetDate.getTime() - now.getTime();

  const totalSeconds = Math.max(0, Math.floor(difference / 1000));
  const dias = Math.floor(totalSeconds / (3600 * 24));
  const horas = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutos = Math.floor((totalSeconds % 3600) / 60);
  const segundos = totalSeconds % 60;

  return { dias, horas, minutos, segundos };
};

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const unidades = Object.entries(timeLeft);

  return (
    <Box
      id="info"
      sx={{
        minHeight: "25vh",
        py: 6,
        px: 2,
        // Fondo con imagen
        backgroundImage: "url('/images/demo10/cuentaregresiva.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        // Layout
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          mb: 2,
          fontFamily: "'Great Vibes', cursive",
          fontWeight: "bold",
          color: "#333",
          textShadow: "0 0 6px rgba(255,255,255,0.8)",
        }}
      >
        Bienvenidos a nuestra boda
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        {unidades.map(([unit, value]) => (
          <Grid item key={unit}>
            <Box textAlign="center">
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  color: "#e91e63",
                  fontFamily: "'Great Vibes', cursive",
                  textShadow: "0 0 4px rgba(255,255,255,0.9)",
                }}
              >
                {String(value).padStart(2, "0")}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  textTransform: "capitalize",
                  fontSize: "0.9rem",
                  fontFamily: "'Great Vibes', cursive",
                  color: "#555",
                  textShadow: "0 0 4px rgba(255,255,255,0.9)",
                }}
              >
                {unit}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Countdown;
