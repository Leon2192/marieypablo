import {
  Box,
  Typography,
  Modal,
  Fade,
  Backdrop,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import ButtonLinks from "./ButtonLinks/ButtonLInks";
import SectionArrow from "./SectionArrow";
import { sectionTitleSx } from "./sectionStyles";

const Gift = () => {
  const [open, setOpen] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      ref={ref}
      id="gift"
      sx={{
        position: "relative",
        pt: 8,
        pb: 12,
        px: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "#ffffff",
      }}
    >
      <Fade in={inView} timeout={1000}>
        <Box
          sx={{
            transform: inView ? "translateY(0)" : "translateY(30px)",
            transition: "transform 0.8s ease",
          }}
        >
          <Box
            component="img"
            src="/images/demo10/regalo.gif"
            alt="Ceremonia"
            sx={{
              width: 125,
              height: 125,
              mb: 1,
            }}
          />

          <Typography
            variant="h6"
            sx={{
              fontFamily: "var(--font-primary)",
              fontSize: { xs: "1.2rem", md: "2rem" },
              color: "#000000",
              maxWidth: 600,
              mb: 4,
            }}
          >
            Tu compañía es el mejor regalo que podemos recibir.
            <br />
            Pero si deseás, podés contribuir con nuestra luna de miel aquí:
          </Typography>

          <ButtonLinks onClick={handleOpen} label="Ver datos bancarios" newTab />
        </Box>
      </Fade>

      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "#fdfaff",
              borderRadius: 3,
              boxShadow: 24,
              p: 4,
              maxWidth: 600,
              width: "90%",
              textAlign: "center",
            }}
          >
            {/* Botón cerrar */}
            <IconButton
              onClick={handleClose}
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                color: "#666",
                "&:hover": {
                  color: "#9a64ea",
                  backgroundColor: "transparent",
                },
              }}
            >
              <CloseIcon />
            </IconButton>

            {/* Ícono arriba del modal */}
            <Box
              component="img"
              src="/images/demo10/regalo.gif"
              alt="Ceremonia"
              sx={{
                width: 125,
                height: 125,
                mb: 1,
              }}
            />

            <Typography
              variant="h6"
              fontWeight="bold"
              gutterBottom
              sx={{
                ...sectionTitleSx,
                fontSize: { xs: "1.7rem", md: "2.1rem" },
                color: "#000000",
                mb: 1,
              }}
            >
              Datos bancarios
            </Typography>

            <Typography
              variant="body1"
              gutterBottom
              sx={{
                fontFamily: "var(--font-primary)",
                fontSize: { xs: "1.3rem", md: "1.5rem" },
                color: "#000000",
                mb: 1,
                fontWeight: 600,
              }}
            >
              Alias: bodamarieypablo
              {/* <br />
              CBU: 000000000000000
              <br />
              A nombre de:  */}
            </Typography>
          </Box>
        </Fade>
      </Modal>

      <SectionArrow href="#qr" />
    </Box>
  );
};

export default Gift;
