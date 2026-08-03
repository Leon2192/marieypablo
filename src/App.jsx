import { useEffect, useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import "./App.css";

import Hero from "./components/Hero/HeroPremium";
import Countdown from "./components/CountDown/CountDownPremium";
import InfoEvent from "./components/InfoEvent";
import Gift from "./components/Gift";
import QR from "./components/QR";
import Song from "./components/SugerirCancion";
import Dresscode from "./components/Dresscode";
import Confirm from "./components/Confirm";
import Thanks from "./components/Thanks";


function Loader() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 2,
        background: "#ffffff",
        color: "#fff",
      }}
    >
      <Box
        component="img"
        src="/images/logo2.jpeg"
        alt="Logo"
        sx={{
          width: 175,
          height: "auto",
          mb: 2,
        }}
      />

      <CircularProgress sx={{ color: "#536449", }} />
      {/* Texto */}
      <Typography sx={{ fontFamily: "var(--font-primary)", color: "#536449" }}>
        Cargando…
      </Typography>
    </Box>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Hero />
      <Countdown />
      <InfoEvent />
      <Gift />
      <QR />
      <Song />
      <Dresscode />
      <Confirm />
      <Thanks />
    </>
  );
}

export default App;
