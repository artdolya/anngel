import { extendTheme } from "@chakra-ui/react";
import '@fontsource/roboto';
import '@fontsource/open-sans';
import '@fontsource/raleway';

const theme = extendTheme({
  fonts: {
    heading: `'Roboto', sans-serif`,
    body: `'Roboto', sans-serif`,
  }
});

export default theme