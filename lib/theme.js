import { extendTheme } from "@chakra-ui/react";

const styles = {
  global: {
    body: {
      bg: "#ffffff",
      fontFamily: "Gilroy",
    },
  },
};

const breakpoints = {
  // for mobile and below
  sm: "350px",
  // here starts ipad
  md: "768px",
  // ipad+ size 11 inch plus
  lg: "960px",
  // desktops
  xl: "1200px",
  // desktops+
  "2xl": "1536px",
  // desktops++
  "3xl": "2000px",
};

const colors = {
  primary: "#2B2D33",
  proficient: "#F7F9FE"
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const components = {
  Link: {
    baseStyle: () => ({
      textDecoration: "none",
      _hover: {
        textDecoration: "none",
        color: "white",
      },
    }),


    variants: {
      navButton: {
        fontSize: "14px",
        fontFamily: "Gilroy",
        height: "46px",
        width: "100px",
      },
    },
  },

  Button: {
    baseStyle: {
      fontFamily: "Gilroy",
    },

    variants: {
      navTransparentBg: {
        fontSize: "13px",
        color: "white",
        bgColor: "transparent",
        border: "1px",
        borderColor: "#000929",
        borderRadius: "12px",
        padding: ["0.7rem", "1.4rem", "0.8rem", "1.4rem"],
        _hover: {
          bgColor: "white",
          color: "#000929",
        },
      },
      navWhiteBg: {
        fontSize: "13px",
        color: "#0D01B8",
        bgColor: "white",
        border: "1px",
        borderColor: "white",
        borderRadius: "12px",
        padding: ["0.7rem", "1.4rem", "0.8rem", "1.4rem"],
        _hover: {
          bgColor: "#100F1F",
          color: "white",
          borderColor: "#100F1F",
        },
      },
      blueBg: {
        fontSize: "13px",
        my: "1",
        color: "white",
        bgColor: "#000929",
        fontWeight: "500",
        border: "1px",
        borderColor: "#000929",
        borderRadius: "12px",
        paddingRight: "3rem",
        paddingLeft: "3rem",
        paddingTop: "1.5rem",
        paddingBottom: "1.5rem",
        _hover: {
          bgColor: "white",
          color: "#000929",
          borderColor: "#000929",
        },
      },
      transparentBg: {
        fontSize: "13px",
        my: "1",
        color: "#000929",
        bgColor: "transparent",
        border: "1px",
        borderColor: "#000929",
        borderRadius: "12px",
        padding: ["0.7rem", "1.4rem", "0.8rem", "1.4rem"],
        _hover: {
          bgColor: "#000929",
          color: "white",
          borderColor: "#000929",
        },
      },
    },
  },
  Table: {
    colorScheme: {
      proficient: '#F7F9FE'
    }
  },

  Text: {
    baseStyle: {
      fontFamily: "Gilroy",
    },

    variants: {
      heading: {
        color: "black",
        padding: ["10px", "0px", "10px", "0px"],
        fontWeight: "500",
      },
      para: {
        padding: ["10px", "0px", "10px", "0px"],
        fontWeight: "medium",
      },
    },
  },
};

const theme = extendTheme({
  config,
  styles,
  components,
  colors,
  breakpoints,
});
export default theme;
