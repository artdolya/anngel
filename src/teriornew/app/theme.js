import { extendTheme } from "@chakra-ui/react";
import '@fontsource/roboto';

const theme = extendTheme({
  fonts: {
    heading: `'Roboto', sans-serif`,
    body: `'Roboto', sans-serif`,
  },
  components:{
    Button: {
      border: "1px solid",
      fontSize: "xl",
      fontWeight: 700,
      backgroundColor: "#FFF"
    },
  },
});

export default theme