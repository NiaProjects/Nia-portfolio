import { menuAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys);

const baseStyle = definePartsStyle({
  list: {
    py: "0",
    m: "auto",
    backdropFilter: "blur(10px)",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    border: "1px solid rgba(255, 255, 255, 0.18)",
  },
  item: {
    justifyContent: "center",
    textAlign: "center",
    color: "white",
    _hover: {
      bg: "orange.400",
    },
    _focus: {
      bg: "orange.400",
    },
  },
});

// define custom styles
const lg = defineStyle({
  // fontSize: "md",
  my: "1",
});

const xl = defineStyle({
  // fontSize: "xl",
  px: "4",
  py: "2",
});

const sizes = {
  xl: definePartsStyle({
    button: xl,
    item: xl,
    groupTitle: lg,
    command: xl,
  }),
};

const variants = {
  roundLeft: definePartsStyle({
    button: {
      borderLeftRadius: "full",
      pl: "6",
    },
  }),
  roundRight: definePartsStyle({
    button: {
      borderRightRadius: "full",
      pr: "6",
      textAlign: "center",
    },
  }),
};

export const menuTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps: {
    size: "xl",
  },
});
