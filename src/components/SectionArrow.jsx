import { Box } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const SectionArrow = ({ href, color = "#000000", ariaLabel = "Ir a la siguiente sección" }) => {
  return (
    <Box
      component="a"
      href={href}
      aria-label={ariaLabel}
      sx={{
        position: "absolute",
        bottom: 20,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 2,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        color,
        textDecoration: "none",
        animation: "sectionArrowBounce 2s infinite",
        fontSize: "3rem",
        "@keyframes sectionArrowBounce": {
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
      <KeyboardArrowDownIcon fontSize="inherit" />
    </Box>
  );
};

export default SectionArrow;
