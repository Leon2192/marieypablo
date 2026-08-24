import {
  Box,
  Typography,
  Fade,
  Modal,
  Backdrop,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import ButtonLinks from "./ButtonLinks/ButtonLInks";
import SectionArrow from "./SectionArrow";
import { sectionTitleSx } from "./sectionStyles";

const Dresscode = () => {
  const [open, setOpen] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Box
      ref={ref}
      id="dresscode"
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
          <Box
            component="img"
            src="/images/dresscode.gif"
            alt="Dresscode"
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
              fontSize: { xs: "1.7rem", md: "2.1rem" },
              color: "#000000",
              fontWeight: "semibold",
              mb: 2,
            }}
          >
            Dresscode
          </Typography>

          <Box sx={{ mb: 4 }} />

          <ButtonLinks label="Ver" onClick={() => setOpen(true)} />
        </Box>
      </Fade>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{ backdrop: { timeout: 300 } }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "#ffffff",
              borderRadius: 3,
              boxShadow: 24,
              p: 4,
              width: "90%",
              maxWidth: 500,
              textAlign: "center",
            }}
          >
            <IconButton
              onClick={() => setOpen(false)}
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                color: "#666",
              }}
            >
              <CloseIcon />
            </IconButton>

            <Typography
              variant="body1"
              sx={{
                ...sectionTitleSx,
                fontSize: { xs: "1.7rem", md: "2.1rem" },
                color: "#000000",
              }}
            >
              Elegante Sport
            </Typography>
          </Box>
        </Fade>
      </Modal>

      <SectionArrow href="#confirm" />
    </Box>
  );
};

export default Dresscode;
